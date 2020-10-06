const Blockchain = require('./blockchain');
const bitcoin = new Blockchain;
const requestPromises = [];


var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for( var i = 0; i < arr.length; i++){ 
   if ( arr[i] === 5) {
     arr.splice(i, 1); 
   }
}
console.log(arr);


/*
const bc =  {
"chain": [
{
"index": 1,
"timestamp": 1556903277247,
"transaction": [],
"nonce": 100,
"previousHash": "0",
"hash": "000000000000000000000000"
},
{
"index": 2,
"timestamp": 1556903359344,
"transaction": [],
"nonce": 32123,
"previousHash": "000000000000000000000000",
"hash": "0000ac9acc4d56c056acc9107468f4ce52169f4e860382d4043382a8eaee81e1"
},
{
"index": 3,
"timestamp": 1556903402115,
"transaction": [
{
"amount": 12.5,
"sender": "00",
"recipient": "fc9fd9706dc511e9a696cf75328cc029",
"transactionId": "305798706dc611e9a696cf75328cc029"
},
{
"amount": 200,
"sender": "ACADCASDSS46346AVDASV4FD64F6WSFS4FW6F464WF",
"recipient": "GEEEVDSGVCACADASASSSGHG646F4W6W6F46F46JJAC",
"transactionId": "3ff195606dc611e9803981e99dafa12a"
},
{
"amount": 250,
"sender": "ACADCASDSS46346AVDASV4FD64F6WSFS4FW6F464WF",
"recipient": "GEEEVDSGVCACADASASSSGHG646F4W6W6F46F46JJAC",
"transactionId": "43aa09806dc611e9803981e99dafa12a"
}
],
"nonce": 137682,
"previousHash": "0000ac9acc4d56c056acc9107468f4ce52169f4e860382d4043382a8eaee81e1",
"hash": "0000c08f5b54b352a3e022ff91b44b2959b0a4e2c5ad0531e5d4ec0d63e86e8e"
},
{
"index": 4,
"timestamp": 1556903437595,
"transaction": [
{
"amount": 12.5,
"sender": "00",
"recipient": "ff675de06dc511e988cbe39d31b8e0f4",
"transactionId": "49daf7b06dc611e988cbe39d31b8e0f4"
},
{
"amount": 500,
"sender": "ACADCASDSS46346AQQVDASV4FD64F6WSFS4FW6F464WF",
"recipient": "GEEEVDSGVCACADASASSSGHBBG646F4W6W6F46F46JJAC",
"transactionId": "581d53e06dc611e9a8c35da1897cafe4"
},
{
"amount": 550,
"sender": "ACADCASDSS46346AQQVDASV4FD64F6WSFS4FW6F464WF",
"recipient": "GEEEVDSGVCACADASASSSGHBBG646F4W6W6F46F46JJAC",
"transactionId": "5a3e86306dc611e9a8c35da1897cafe4"
}
],
"nonce": 8494,
"previousHash": "0000c08f5b54b352a3e022ff91b44b2959b0a4e2c5ad0531e5d4ec0d63e86e8e",
"hash": "0000832bf409c5863c493aadc8befc1c8afd755f4e4f971751e6ab7af32b48fe"
}
]
};

console.log(bitcoin.chainIsValid(bc.chain));
*/

/*
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

*/


/*

const bc2 = {
chain: [
{
"index": 1,
"timestamp": 1556806090396,
"transaction": [],
"nonce": 100,
"previousHash": "000000000000000000",
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
},
{
"index": 5,
"timestamp": 1556806163217,
"transaction": [
{
"amount": 12.5,
"sender": "00",
"recipient": "b786edc06ce311e99edb6b3de82ca6a9",
"transactionId": "d49c9b806ce311e99edb6b3de82ca6a9"
},
{
"amount": 300,
"sender": "ADJFLWFJWFH42F6W4FW6F4W6F4W",
"recipient": "DSFLFWFWF462432H6W4GW6EG4W6FW5",
"transactionId": "dc1461906ce311e99edb6b3de82ca6a9"
},
{
"amount": 350,
"sender": "ADJFLWFJWFH42F6W4FW6F4W6F4W",
"recipient": "DSFLFWFWF462432H6W4GW6EG4W6FW5",
"transactionId": "ddd858b06ce311e99edb6b3de82ca6a9"
},
{
"amount": 400,
"sender": "ADJFLWFJWFH42F6W4FW6F4W6F4W",
"recipient": "DSFLFWFWF462432H6W4GW6EG4W6FW5",
"transactionId": "e0cd2eb06ce311e99edb6b3de82ca6a9"
}
],
"nonce": 32817,
"previousHash": "0000536498011cc366d12d50307df285505bfbe92a0b6513ec8dc444b51f67a3",
"hash": "0000513ca56d87d08e221cf0f9674a62fc76735208dee19f29a7a8788b6aaec8"
},
{
"index": 6,
"timestamp": 1556806182837,
"transaction": [
{
"amount": 12.5,
"sender": "00",
"recipient": "b786edc06ce311e99edb6b3de82ca6a9",
"transactionId": "e2eefd406ce311e99edb6b3de82ca6a9"
},
{
"amount": 500,
"sender": "ADJFLWFJWFH42F6W4FW6F4W6F4W",
"recipient": "DSFLFWFWF462432H6W4GW6EG4W6FW5",
"transactionId": "ebdb3ae06ce311e99edb6b3de82ca6a9"
}
],
"nonce": 49637,
"previousHash": "0000513ca56d87d08e221cf0f9674a62fc76735208dee19f29a7a8788b6aaec8",
"hash": "0000b753e965e3d24db95b445490fc78acd9ce591854fedda1fca4e146731435"
},
{
"index": 7,
"timestamp": 1556806193675,
"transaction": [
{
"amount": 12.5,
"sender": "00",
"recipient": "b786edc06ce311e99edb6b3de82ca6a9",
"transactionId": "eea0c3806ce311e99edb6b3de82ca6a9"
}
],
"nonce": 263246,
"previousHash": "0000b753e965e3d24db95b445490fc78acd9ce591854fedda1fca4e146731435",
"hash": "0000f8c9b4667391ac5107a0451b6c63fb77827f96007407d0c6fd86dafe85cb"
}
],
"pendingTransactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "b786edc06ce311e99edb6b3de82ca6a9",
"transactionId": "f51682e06ce311e99edb6b3de82ca6a9"
}
],
"currentNodeUrl": "http://localhost:3002",
"networkNodes": [
"http://localhost:3001",
"http://localhost:3003",
"http://localhost:3004",
"http://localhost:3005"
]
};

console.log(bitcoin.chainIsValid(bc2.chain));
*/
/*
requestPromises.push(bc2);


const bc3 = {
chain: [
{
"index": 1,
"timestamp": 1556806090396,
"transaction": [],
"nonce": 100,
"previousHash": "000000000000000000",
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
},
{
"index": 5,
"timestamp": 1556806163217,
"transaction": [
{
"amount": 12.5,
"sender": "00",
"recipient": "b786edc06ce311e99edb6b3de82ca6a9",
"transactionId": "d49c9b806ce311e99edb6b3de82ca6a9"
},
{
"amount": 300,
"sender": "ADJFLWFJWFH42F6W4FW6F4W6F4W",
"recipient": "DSFLFWFWF462432H6W4GW6EG4W6FW5",
"transactionId": "dc1461906ce311e99edb6b3de82ca6a9"
},
{
"amount": 350,
"sender": "ADJFLWFJWFH42F6W4FW6F4W6F4W",
"recipient": "DSFLFWFWF462432H6W4GW6EG4W6FW5",
"transactionId": "ddd858b06ce311e99edb6b3de82ca6a9"
},
{
"amount": 400,
"sender": "ADJFLWFJWFH42F6W4FW6F4W6F4W",
"recipient": "DSFLFWFWF462432H6W4GW6EG4W6FW5",
"transactionId": "e0cd2eb06ce311e99edb6b3de82ca6a9"
}
],
"nonce": 32817,
"previousHash": "0000536498011cc366d12d50307df285505bfbe92a0b6513ec8dc444b51f67a3",
"hash": "0000513ca56d87d08e221cf0f9674a62fc76735208dee19f29a7a8788b6aaec8"
},
{
"index": 6,
"timestamp": 1556806182837,
"transaction": [
{
"amount": 12.5,
"sender": "00",
"recipient": "b786edc06ce311e99edb6b3de82ca6a9",
"transactionId": "e2eefd406ce311e99edb6b3de82ca6a9"
},
{
"amount": 500,
"sender": "ADJFLWFJWFH42F6W4FW6F4W6F4W",
"recipient": "DSFLFWFWF462432H6W4GW6EG4W6FW5",
"transactionId": "ebdb3ae06ce311e99edb6b3de82ca6a9"
}
],
"nonce": 49637,
"previousHash": "0000513ca56d87d08e221cf0f9674a62fc76735208dee19f29a7a8788b6aaec8",
"hash": "0000b753e965e3d24db95b445490fc78acd9ce591854fedda1fca4e146731435"
},
{
"index": 7,
"timestamp": 1556806193675,
"transaction": [
{
"amount": 12.5,
"sender": "00",
"recipient": "b786edc06ce311e99edb6b3de82ca6a9",
"transactionId": "eea0c3806ce311e99edb6b3de82ca6a9"
}
],
"nonce": 263246,
"previousHash": "0000b753e965e3d24db95b445490fc78acd9ce591854fedda1fca4e146731435",
"hash": "0000f8c9b4667391ac5107a0451b6c63fb77827f96007407d0c6fd86dafe85cb"
}
],
"pendingTransactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "b786edc06ce311e99edb6b3de82ca6a9",
"transactionId": "f51682e06ce311e99edb6b3de82ca6a9"
}
],
"currentNodeUrl": "http://localhost:3003",
"networkNodes": [
"http://localhost:3001",
"http://localhost:3002",
"http://localhost:3004",
"http://localhost:3005"
]
};
requestPromises.push(bc3);


const bc4 = {
chain: [
{
"index": 1,
"timestamp": 1556806090396,
"transaction": [],
"nonce": 100,
"previousHash": "000000000000000000",
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
},
{
"index": 5,
"timestamp": 1556806163217,
"transaction": [
{
"amount": 12.5,
"sender": "00",
"recipient": "b786edc06ce311e99edb6b3de82ca6a9",
"transactionId": "d49c9b806ce311e99edb6b3de82ca6a9"
},
{
"amount": 300,
"sender": "ADJFLWFJWFH42F6W4FW6F4W6F4W",
"recipient": "DSFLFWFWF462432H6W4GW6EG4W6FW5",
"transactionId": "dc1461906ce311e99edb6b3de82ca6a9"
},
{
"amount": 350,
"sender": "ADJFLWFJWFH42F6W4FW6F4W6F4W",
"recipient": "DSFLFWFWF462432H6W4GW6EG4W6FW5",
"transactionId": "ddd858b06ce311e99edb6b3de82ca6a9"
},
{
"amount": 400,
"sender": "ADJFLWFJWFH42F6W4FW6F4W6F4W",
"recipient": "DSFLFWFWF462432H6W4GW6EG4W6FW5",
"transactionId": "e0cd2eb06ce311e99edb6b3de82ca6a9"
}
],
"nonce": 32817,
"previousHash": "0000536498011cc366d12d50307df285505bfbe92a0b6513ec8dc444b51f67a3",
"hash": "0000513ca56d87d08e221cf0f9674a62fc76735208dee19f29a7a8788b6aaec8"
},
{
"index": 6,
"timestamp": 1556806182837,
"transaction": [
{
"amount": 12.5,
"sender": "00",
"recipient": "b786edc06ce311e99edb6b3de82ca6a9",
"transactionId": "e2eefd406ce311e99edb6b3de82ca6a9"
},
{
"amount": 500,
"sender": "ADJFLWFJWFH42F6W4FW6F4W6F4W",
"recipient": "DSFLFWFWF462432H6W4GW6EG4W6FW5",
"transactionId": "ebdb3ae06ce311e99edb6b3de82ca6a9"
}
],
"nonce": 49637,
"previousHash": "0000513ca56d87d08e221cf0f9674a62fc76735208dee19f29a7a8788b6aaec8",
"hash": "0000b753e965e3d24db95b445490fc78acd9ce591854fedda1fca4e146731435"
},
{
"index": 7,
"timestamp": 1556806193675,
"transaction": [
{
"amount": 12.5,
"sender": "00",
"recipient": "b786edc06ce311e99edb6b3de82ca6a9",
"transactionId": "eea0c3806ce311e99edb6b3de82ca6a9"
}
],
"nonce": 263246,
"previousHash": "0000b753e965e3d24db95b445490fc78acd9ce591854fedda1fca4e146731435",
"hash": "0000f8c9b4667391ac5107a0451b6c63fb77827f96007407d0c6fd86dafe85cb"
}
],
"pendingTransactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "b786edc06ce311e99edb6b3de82ca6a9",
"transactionId": "f51682e06ce311e99edb6b3de82ca6a9"
}
],
"currentNodeUrl": "http://localhost:3004",
"networkNodes": [
"http://localhost:3002",
"http://localhost:3003",
"http://localhost:3001",
"http://localhost:3005"
]
};
requestPromises.push(bc4);


const bc5 = {
chain: [
{
"index": 1,
"timestamp": 1556806090396,
"transaction": [],
"nonce": 100,
"previousHash": "000000000000000000",
"hash": "000000000000000000000000"
}
],

"currentNodeUrl": "http://localhost:3005",
"networkNodes": [
"http://localhost:3002",
"http://localhost:3003",
"http://localhost:3001",
"http://localhost:3004"
]
};

requestPromises.push(bc5);

Promise.all(requestPromises)
	.then(blockchains => {
		const currentChainLength = bc1.chain.length;
		let maxChainLength = currentChainLength;
		//let longestChainExist = false;
		let newLongestChain = null;
		let newPendingTransaction = null;

		//console.log(blockchains);
		blockchains.forEach(block_chain => {
			if(block_chain.chain.length > maxChainLength){
				maxChainLength = block_chain.chain.length;
				//longestChainExist = true;
				newLongestChain = block_chain.chain;
				newPendingTransaction = block_chain.pendingTransactions;
			};
		});
		//console.log(maxChainLength);
		//console.log(newLongestChain);
		//console.log(bitcoin.chainIsValid(newLongestChain));

		if(newLongestChain && bitcoin.chainIsValid(newLongestChain)) {
			bitcoin.chain = newLongestChain;
			bitcoin.pendingTransactions = newPendingTransaction;
			console.log('New chain is replaced');
		}

		else if(!newLongestChain || (newLongestChain && !bitcoin.chainIsValid(newLongestChain))){
			console.log('No chain replaced');
		}
	});
*/



/*
//To check actual output
bitcoin.blockchain(100,'HJDHWJGJWDWKDK2D','WHFK3HK2HD2HSD');
bitcoin.blockchain(11,'NAHID','HASAN');
console.log(bitcoin);
console.log(bitcoin.chain[2]);
*/

/*
//To test nonce finding time
const previousHash = bitcoin.getLastBlock().hash;
const currentData = [
	{
		amount : 100,
		sender : 'AS54545412512',
		recipient : 'MMM45464D6A4D6A4DA4D6'
	},
	{
		amount : 10010,
		sender : 'NANA555452S4A54SA46A5S6',
		recipient : 'MMM45464D6A4D6A4DA4D6'
	},
	{
		amount : 20,
		sender : 'NANALLSLA44563526ASSA36S5',
		recipient : 'HSAJSA445245A4S5AASASA'
	}

];

let t1 = Date.now();
console.log(t1);
const nonce = bitcoin.proofOfWork(previousHash,currentData);

console.log(bitcoin.getHash(previousHash,nonce,currentData));
console.log(nonce);
let t2 = Date.now();
console.log(t2);
console.log(t2-t1);
*/
/*
bitcoin.blockchain(40,'ASH4S6AD546W5F6W','NAH4G84HG65Q4D');
//bitcoin.blockchain(500,'MAS464F64W6F4W6F','TAM56654FDW6DF46DF');
console.log(bitcoin);
*//**
const previousHash = bitcoin.getLastBlock().hash;
const currentData = [
	{
		amount : 100,
		sender : 'AS54545412512',
		recipient : 'MMM45464D6A4D6A4DA4D6'
	},
	{
		amount : 10010,
		sender : 'NANA555452S4A54SA46A5S6',
		recipient : 'MMM45464D6A4D6A4DA4D6'
	},
	{
		amount : 20,
		sender : 'NANALLSLA44563526ASSA36S5',
		recipient : 'HSAJSA445245A4S5AASASA'
	}

];
let t1 = Date.now();
console.log(t1);
const nonce = bitcoin.proofOfWork(previousHash,currentData);
console.log(bitcoin.getHash(previousHash,nonce,currentData));
console.log(nonce);
let t2 = Date.now();
console.log(t2);
console.log(t2-t1);

//console.log(bitcoin.getHash(previousHash,nonce,currentData));

*/

/*
currentData = bitcoin.createNewTransaction(410,'ASH4S6AD546W5F6W','NAH4G84HG65Q4D');
let previousHash = bitcoin.getLastBlock().hash;
let nonce = bitcoin.proofOfWork(previousHash,currentData);
let hash = bitcoin.getHash(previousHash,nonce,currentData);
bitcoin.createNewBlock(nonce,previousHash,hash);
*/




