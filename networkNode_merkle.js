const sha256 = require('sha256');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');
const uuid = require('uuid/v1');
const port = process.argv[2];
const rp = require('request-promise');

const nodeAddress = uuid().split('-').join('');

const bitcoin = new Blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
 
app.get('/blockchain', function (req, res) {
	res.send(bitcoin);
});
 
app.post('/transaction', function (req, res) {
    const newTransaction = req.body;
    const blockIndex = bitcoin.addTransactionToPendingTransactions(newTransaction);
    res.json({note: `Transaction will be added in block ${blockIndex}`});
});

app.post('/transaction/broadcast', function(req, res){
	const newTransaction = bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);
	bitcoin.addTransactionToPendingTransactions(newTransaction);

	const requestPromises = [];
	bitcoin.networkNodes.forEach(networkNodeUrl => {
		const requestOptions = {
			uri: networkNodeUrl + '/transaction',
			method: 'POST',
			body: newTransaction,
			json: true
		};
		requestPromises.push(rp(requestOptions));
	});
	Promise.all(requestPromises)
	.then(data => {
		res.json({note: 'Transaction created and broadcast successfully'});
	});

});


app.get('/mine', function (req, res) {
	const allNetworkNodes = [...bitcoin.networkNodes,bitcoin.currentNodeUrl];
	let time = [], oldTime = [], indexes = [], previousHashes = [], currentHashes = [], nonces = [];
	 
	allNetworkNodes.forEach((networkNodeUrl,index)=> {
		const lastBlock = bitcoin.getLastBlock();
		const previousHash = lastBlock['hash'];
		const currentData = {
			transactions: bitcoin.pendingTransactions, 
			index: lastBlock['index'] + 1
		};
		const merkleeRoot = sha256(JSON.stringify(currentData));

		let t1 = Date.now();
		const nonce = bitcoin.proofOfWork(previousHash,merkleeRoot);
		let t2 = Date.now();
		const currentHash = bitcoin.getHash(previousHash, nonce, merkleeRoot);
		const timeOfWork = t2 - t1;
		const invTimeOfWork = 1/timeOfWork;
		nonces.push(nonce);
		previousHashes.push(previousHash);
		currentHashes.push(currentHash);
		oldTime.push(timeOfWork);
		time.push(timeOfWork);
		indexes.push(index);
	});

	Promise.all(time).then(data=> { //data is the old time array
		let miningNode,miningNonce,miningPreviousHash,miningCurrentHash,newBlock;
		
		time.sort((a, b) => b - a);
		const nthPercentile = Math.round(.9*time.length);
		time.splice(nthPercentile,time.length-nthPercentile);
		const minTime = Math.min(...time);

		for(let i=0; i<indexes.length ; i++){
			let index = indexes[i];
			if(data[index] === minTime){
			miningNode = allNetworkNodes[index];
			miningNonce = nonces[index];
			miningPreviousHash = previousHashes[index];
			miningCurrentHash = currentHashes[index];
			newBlock = bitcoin.createNewBlock(miningNonce, miningPreviousHash, miningCurrentHash);
			break;
			}
		}

		const requestPromises = [];
		allNetworkNodes.forEach(networkNodeUrl=> {
			const requestOptions = {
				uri: networkNodeUrl + '/receive-new-block',
				method: 'POST',
				body: {newBlock: newBlock},
				json: true
			};
			requestPromises.push(rp(requestOptions));
		});

		Promise.all(requestPromises).then(data=> {
			const requestOptions = {
				uri: miningNode + '/transaction/broadcast',
				method: 'POST',
				body: {
					amount: 12.5,
					sender:"00",
					recipient: nodeAddress
				},
				json: true
			};
			return rp(requestOptions);
		}).then(data=> {
			res.json({ 
				note: "New block mined and broadcast successfully!",
				oldTimes: oldTime,
				newTime: time,
				miningTime: minTime,
				miningNodeUrl: miningNode,
				newBlock: newBlock		
			});
		});

	});
});	


app.post('/receive-new-block', function(req,res){
	const newBlock = req.body.newBlock;
	const lastBlock = bitcoin.getLastBlock();
	const correctHash = lastBlock.hash === newBlock.previousHash;
	const correctIndex = lastBlock['index'] + 1 === newBlock['index'];

	if (correctHash && correctIndex){
		bitcoin.chain.push(newBlock);
		bitcoin.pendingTransactions = [];
	
	res.json({
		note:'New block received and accepted',
		newBlock: newBlock
	});
	
	}
	else{
		res.json({note:'New block rejected', newBlock: newBlock});
	}
});

app.post('/register-and-broadcast-node',function(req,res){
	const newNodeUrl = req.body.newNodeUrl;
	if (bitcoin.networkNodes.indexOf(newNodeUrl) == -1) bitcoin.networkNodes.push(newNodeUrl);

	const regNodesPromises = [];
	bitcoin.networkNodes.forEach(networkNodeUrl => {
		const requestOptions = {
			uri: networkNodeUrl + '/register-node',
			method: 'POST',
			body: {newNodeUrl: newNodeUrl},
			json: true
		};

		regNodesPromises.push(rp(requestOptions));

	});

	Promise.all(regNodesPromises).then(data =>{
		const bulkRegisterOptions = {
			uri: newNodeUrl + '/register-nodes-bulk',
			method: 'POST',
			body: {allNetworkNodes: [...bitcoin.networkNodes, bitcoin.currentNodeUrl]},
			json: true
		};
		return rp(bulkRegisterOptions);

	})
	.then(data =>{
		res.json({note: 'New node registered with network'});
	});

});

app.post('/register-node',function(req,res){
	const newNodeUrl = req.body.newNodeUrl;
	const nodeNotAlreadyPresent = bitcoin.networkNodes.indexOf(newNodeUrl ) == -1
	const notCurrentNode = bitcoin.currentNodeUrl !== newNodeUrl;
	if ( nodeNotAlreadyPresent && notCurrentNode) bitcoin.networkNodes.push(newNodeUrl);
	res.json({note: 'New node registered succesfully'});
});

app.post('/register-nodes-bulk',function(req,res){
	const allNetworkNodes = req.body.allNetworkNodes;
	allNetworkNodes.forEach(networkNodeUrl => {
		const notCurrentNode = bitcoin.currentNodeUrl !== networkNodeUrl;
		const nodeNotAlreadyPresent = bitcoin.networkNodes.indexOf(networkNodeUrl) == -1;
		if(nodeNotAlreadyPresent && notCurrentNode) bitcoin.networkNodes.push(networkNodeUrl);
	});
	res.json({note: "Bulk registration successful"});
});

app.get('/consensus', function(req,res){
	const requestPromises = [];
	bitcoin.networkNodes.forEach(networkNodeUrl => {
		const requestOptions = {
			uri: networkNodeUrl + '/blockchain',
			method: 'GET',
			json: true
		};
		requestPromises.push(rp(requestOptions));
	});

	Promise.all(requestPromises)
	.then(blockchains => {
		const currentChainLength = bitcoin.chain.length;
		let maxChainLength = currentChainLength;
		let longestChainExist = false;
		let newLongestChain = null;
		let newPendingTransaction = null;

		
		blockchains.forEach(block_chain => {
			if(block_chain.chain.length > maxChainLength){
				maxChainLength = block_chain.chain.length;
				longestChainExist = true;
				newLongestChain = block_chain.chain;
				newPendingTransaction = block_chain.pendingTransactions;
			};
		});

		if(longestChainExist && bitcoin.chainIsValid(newLongestChain)) {
			bitcoin.chain = newLongestChain;
			bitcoin.pendingTransactions = newPendingTransaction;
			res.json({
				note: 'This chain has been replaced',
				chain: bitcoin.chain
			});
		}

		else{
			res.json({
				note:'Not changed',
				chain: bitcoin.chain
		});
		}

	});
});



app.listen(port, function() {
	console.log(`Listening on port ${port}..`);
});