var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));

var shelloContract = new web3.eth.Contract([{"inputs":[],"name":"sayHello","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"}],
                                          "0x8A870bbeb54F7Ba1f7775b0107dbF8e050276eB8");
shelloContract.methods.sayHello().call().then(function(str) {console.log(str);});
