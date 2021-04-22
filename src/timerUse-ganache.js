var Web3 = require('web3');
var _abiJson = require('../src/timerABI.json');

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));

contractName = Object.keys(_abiJson.contracts);
// console.log("contract name: "+contractName[0]);
var _abi = JSON.parse(_abiJson.contracts[contractName].abi);
// console.log("abi: "+_abi);

var timer = new web3.eth.Contract(_abi, "0xE340153E27b2Ea837552E83E6d3C59f0411261fD");
timer.methods.getNow().call().then(function(value) { console.log(value); });
timer.methods.start().send({from: "0x6039EcA4b432697CfA4f787135C1E9641fe10A4F", gas: 1000000});
timer.methods.timePassed().call().then(function(value) { console.log(value); });
