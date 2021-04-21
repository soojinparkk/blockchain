var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));

var shelloContract = new web3.eth.Contract([{"inputs":[],"name":"sayHello","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"}],
                                          "0x290EDC850027F23Aaab6a81C60Db0B03aFeaa5A1");
shelloContract.methods.sayHello().call().then(function(str) {console.log(str);});
