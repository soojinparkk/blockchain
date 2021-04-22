var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));

var _abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"greet","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_greeting","type":"string"}],"name":"setGreeting","outputs":[],"stateMutability":"nonpayable","type":"function"}];
var greeter = new web3.eth.Contract(_abi, "0x30D1124F17A58CCA5c22F9Db8020669d2Dbc0776");
greeter.methods.greet().call().then(function(value) { console.log(value); });
greeter.methods.setGreeting("Hi").send({from: "0xFd95A6545Db3315F1e402230003A528122132AE9", gas: 1000000});
greeter.methods.greet().call().then(function(value) { console.log(value); });
