var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));

var _abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_receiver","type":"address"}],"name":"forwardTo","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"}];
var bank = new web3.eth.Contract(_abi, "0xf8F8aefa8Fb920612750686E4c8F263bFb36138D");
var coinbase = "0xF4B615BDCDbfB8cE347cf2581761cBb0Ce08da34";

bank.methods.deposit(11111).send({from:coinbase, gas:1000000, value:11111});
bank.methods.deposit(222).send({from:coinbase, gas:1000000, value:222});
