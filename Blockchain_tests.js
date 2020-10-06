
const sha256 = require('sha256');

function Blockchain(){
	this.chain = [];
	this.pendingTransactions = [];
	this.createNewBlock(100,'000000000000000000','000000000000000000000000');

}

Blockchain.prototype.createNewTransaction = function(amount, sender, recipient){
	const newTransaction = {
		amount : amount,
		sender : sender,
		recipient : recipient
	};

	this.pendingTransactions.push(newTransaction);
}

Blockchain.prototype.createNewBlock = function(nonce, previousHash, hash){
	const newBlock = {
		index : this.chain.length +1,
		timestamp : Date.now(),
		transaction : this.pendingTransactions,
		nonce : nonce,
		previousHash : previousHash,
		hash : hash,
	};

	this.pendingTransactions = [];
	this.chain.push(newBlock);
	return newBlock;
}

Blockchain.prototype.getLastBlock = function(){
	return this.chain[this.chain.length -1];
}

Blockchain.prototype.getHash = function(previousHash, nonce, currentData){
	const dataToString = previousHash + nonce.toString() + JSON.stringify(currentData);
	const hash = sha256(dataToString);
	return hash;
}

Blockchain.prototype.proofOfWork = function(previousHash,currentData){
	let nonce = 0;
	let hash = this.getHash(previousHash,nonce,currentData);
	while(hash.substring(0,5) !== '00000'){
		nonce++;
		hash = this.getHash(previousHash,nonce,currentData);
	}
	return nonce;
}


Blockchain.prototype.blockchain = function(amount,sender,recipient){
	//let currentData = this.blockchain;
	let currentData = {amount,sender,recipient};
	this.createNewTransaction(amount,sender,recipient);
	let previousHash = this.getLastBlock().hash;
	let nonce = this.proofOfWork(previousHash,currentData);
	let hash = this.getHash(previousHash,nonce,currentData);
	this.createNewBlock(nonce,previousHash,hash);
	
}




module.exports = Blockchain;