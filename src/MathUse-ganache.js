var Web3 = require('web3');
var _abiJson = require('./MathABI.json');

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));

contractName = Object.keys(_abiJson.contracts);
var _abi = JSON.parse(_abiJson.contracts[contractName].abi);

var math = new web3.eth.Contract(_abi, "0x018a9e2DB54122aE400EFDA8a483C4b736725Ef7");
math.methods.powerOf2(8).call().then(function(value) { console.log("2^8: "+value); });
math.methods.powerOf2(32).call().then(function(value) { console.log("2^32: "+value); });
