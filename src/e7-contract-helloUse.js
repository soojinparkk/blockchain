var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));

var shelloContract = new web3.eth.Contract([{"inputs":[],"name":"sayHello","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"}],
                                          "0x3EC0C983f0A405940CdEEa44c77db4Da72A37e44");
shelloContract.methods.sayHello().call().then(function(str) {console.log(str);});
