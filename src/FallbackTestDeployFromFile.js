var Web3 = require('web3');
var _abiJson = require('../src/FallbackTestABI.json');
var _binJson = require('../src/FallbackTestBIN.json');

var web3;
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
}

contractName = Object.keys(_abiJson.contracts);
console.log("- contract name: "+contractName[0]);
var _abi = JSON.parse(_abiJson.contracts[contractName].abi);
var _bin = _binJson.contracts[contractName].bin;

async function deploy() {
    const accounts = await web3.eth.getAccounts();
    console.log("Deploying the contract from "+accounts[0]);
    var deployed = await new web3.eth.Contract(_abi)
        .deploy({data:_bin})
        .send({from:accounts[0], gas:1000000}, function(err, transactionHash) {
            if (!err)
                console.log("hash: "+transactionHash);
        });
    console.log("The contract deployed to: "+deployed.options.address)
}
deploy()
