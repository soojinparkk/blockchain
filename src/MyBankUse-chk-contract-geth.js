var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8445"));

var _abi = [{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_receiver","type":"address"}],"name":"forwardTo","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"withdrawAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];
var bank = new web3.eth.Contract(_abi, "0x4BA8054752dC7c0823DdcA16a783E15eB9edf3eD");
var coinbase = "0x74ccd5b995b3480fe9063ee539ebf065385f61c8";

bank.methods.getBalance().call().then(console.log);
