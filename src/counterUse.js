var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));

var _abi = [{"inputs":[],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"subtract","outputs":[],"stateMutability":"nonpayable","type":"function"}];
var addr = "0x02E6c6DE31d43C92A6D0B22741cbC3313c07adC5";
var counter = new web3.eth.Contract(_abi, addr);
counter.methods.getCounter().call().then(function (str) { console.log(str); });
counter.methods.add().send({from: "0xbFa80B827dbd9434fd9f03cf11f235571fAC5751", gas: 100000});
counter.methods.add().send({from: "0xbFa80B827dbd9434fd9f03cf11f235571fAC5751", gas: 100000});
counter.methods.subtract().send({from: "0xbFa80B827dbd9434fd9f03cf11f235571fAC5751", gas: 100000});
