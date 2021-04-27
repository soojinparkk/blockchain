var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));

var _abi = [{"inputs":[{"internalType":"uint256","name":"input","type":"uint256"}],"name":"powerOf2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"}];
var math = new web3.eth.Contract(_abi, "0xFEE73C18693d14635254D97a2C8fd9737d056BD0");
math.methods.powerOf2(8).call().then(function(value) { console.log("2^8: "+value); });
math.methods.powerOf2(32).call().then(function(value) { console.log("2^32: "+value); });
