var Web3 = require('web3');
var _abiJson = require('../src/timerABI.json');
var _binJson = require('../src/timerBIN.json');

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
}

contractName = Object.keys(_abiJson.contracts);
console.log("contract name: "+contractName[0]);
var _abi = JSON.parse(_abiJson.contracts[contractName].abi);
var _bin = _binJson.contracts[contractName].bin;
console.log("abi: "+_abi);
console.log("bin: "+_bin);

var _contract = new web3.eth.Contract(_abi);

// unlock the account with a password provided
// web3.personal.unlockAccount(web3.eth.accounts[0], 'password');

_contract
    .deploy({ data: "0x"+_bin })
    .send({
     from: '0x6039EcA4b432697CfA4f787135C1E9641fe10A4F',
     gas: '1000000'
    })
    .then(function(newContractInstance){
        console.log("contract address: "+newContractInstance.options.address)
    });
