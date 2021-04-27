var Web3 = require('web3');
var _abiJson = require('./MathABI.json');
var _binJson = require('./MathBIN.json');

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
}

contractName = Object.keys(_abiJson.contracts);
var _abi = JSON.parse(_abiJson.contracts[contractName].abi);
var _bin = _binJson.contracts[contractName].bin;

var _contract = new web3.eth.Contract(_abi);
_contract
    .deploy({ data: "0x"+_bin })
    .send({
     from: '0x153497C8666601a4e4742ffBA665c0a6E54EfFE2',
     gas: '1000000'
    })
    .then(function(newContractInstance){
        console.log("contract address: "+newContractInstance.options.address)
    });
