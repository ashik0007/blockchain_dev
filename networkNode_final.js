const Blockchain = require('./blockchain');
const bitcoin = new Blockchain;

const bc1 = {
"chain": [
{
"index": 1,
"timestamp": 1556806090396,
"transaction": [],
"nonce": 100,
"previousHash": "0",
"hash": "000000000000000000000000"
},
{
"index": 2,
"timestamp": 1556806094784,
"transaction": [],
"nonce": 100416,
"previousHash": "000000000000000000000000",
"hash": "0000a644df4ac8e51db6921e7c0eba4c6d7206da462952b83d8601d93354d45d"
},
{
"index": 3,
"timestamp": 1556806117392,
"transaction": [
{
"amount": 12.5,
"sender": "00",
"recipient": "b786edc06ce311e99edb6b3de82ca6a9",
"transactionId": "ba2bf6106ce311e99edb6b3de82ca6a9"
},
{
"amount": 100,
"sender": "ADJFLWFJWFH42F6W4FW6F4W6F4W",
"recipient": "DSFLFWFWF462432H6W4GW6EG4W6FW5",
"transactionId": "c15c04c06ce311e99edb6b3de82ca6a9"
},
{
"amount": 50,
"sender": "ADJFLWFJWFH42F6W4FW6F4W6F4W",
"recipient": "DSFLFWFWF462432H6W4GW6EG4W6FW5",
"transactionId": "c57bc6306ce311e99edb6b3de82ca6a9"
}
],
"nonce": 4517,
"previousHash": "0000a644df4ac8e51db6921e7c0eba4c6d7206da462952b83d8601d93354d45d",
"hash": "000061240fe9c6867b0ea37482d344ada62b0640c8ce9fd54aa5c4e1cfb967ae"
},
{
"index": 4,
"timestamp": 1556806139188,
"transaction": [
{
"amount": 12.5,
"sender": "00",
"recipient": "b786edc06ce311e99edb6b3de82ca6a9",
"transactionId": "c79f1b606ce311e99edb6b3de82ca6a9"
},
{
"amount": 150,
"sender": "ADJFLWFJWFH42F6W4FW6F4W6F4W",
"recipient": "DSFLFWFWF462432H6W4GW6EG4W6FW5",
"transactionId": "cfb3bdb06ce311e99edb6b3de82ca6a9"
},
{
"amount": 250,
"sender": "ADJFLWFJWFH42F6W4FW6F4W6F4W",
"recipient": "DSFLFWFWF462432H6W4GW6EG4W6FW5",
"transactionId": "d1c511806ce311e99edb6b3de82ca6a9"
}
],
"nonce": 40036,
"previousHash": "000061240fe9c6867b0ea37482d344ada62b0640c8ce9fd54aa5c4e1cfb967ae",
"hash": "0000536498011cc366d12d50307df285505bfbe92a0b6513ec8dc444b51f67a3"
}

]
};

console.log(bitcoin.chainIsValid(bc1.chain));