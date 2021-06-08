var Web3 = require('web3');
var _abiJson = require('./FinalOrderCustomerABI.json');
var _binJson = require('./FinalOrderCustomerBIN.json');

var web3;
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8445"));
}

contractNames = Object.keys(_abiJson.contracts);
contractName = contractNames[1];
console.log(">> contract name: "+contractNames[1]);
var _abi = JSON.parse(_abiJson.contracts[contractName].abi);
var _bin = "0x"+_binJson.contracts[contractName].bin;

async function deploy() {
    const accounts = await web3.eth.getAccounts();
    console.log("Deploying the contract from "+accounts[0]);
    var deployed = await new web3.eth.Contract(_abi)
        .deploy({data:_bin})
        .send({from:accounts[0], gas:4700000}, function(err, transactionHash) {
            if (!err)
                console.log("hash: "+transactionHash);
        });
    console.log("The contract deployed to: "+deployed.options.address)
}
deploy()
