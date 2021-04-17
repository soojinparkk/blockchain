var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));

var shelloContract = new web3.eth.Contract([{"inputs":[],"name":"sayHello","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"}],
                                          "0xf32CB41EEF7F6d024e6136B07Bb3C8fad19354f7");
shelloContract.methods.sayHello().call().then(function(str) {console.log(str);});
