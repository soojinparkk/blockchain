var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));

var _abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"greet","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_greeting","type":"bytes32"}],"name":"setGreeting","outputs":[],"stateMutability":"nonpayable","type":"function"}];
var greeter = new web3.eth.Contract(_abi, "0x81E522f375be14670DED3aadCe7014ff3897e347");

// 파라미터로 전달할 문자열을 16진수로 변환
var str = web3.utils.toHex("Hello World!");
greeter.methods.setGreeting(str).send({from: "0xCE966b32cAd5E30E5A20F425bac553F07641eEe3", gas: 1000000});
greeter.methods.greet().call().then(function(value) { console.log(web3.utils.hexToUtf8(value)); });
