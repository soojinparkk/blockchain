var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));

var _abi = [{"inputs":[{"internalType":"uint256","name":"input","type":"uint256"}],"name":"multiply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"}];
var multiply7 = new web3.eth.Contract(_abi, "0xB6D705C1693B197A3DdD133e1B8e47b05cB68aE0");
multiply7.methods.multiply(8).call().then(function(value) { console.log(value); });
