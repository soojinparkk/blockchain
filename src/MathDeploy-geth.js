var primary = eth.accounts[0];

loadScript('src/Math-geth.js');
contractName = Object.keys(_compiled.contracts);
var _abi = JSON.parse(_compiled.contracts[contractName[0]].abi);
var _bin = _compiled.contracts[contractName[0]].bin;

var _class = eth.contract(_abi);
_obj = _class.new({from:primary, data:"0x"+_bin, gas:1000000}, function(err, contract) {
    if (!err && contract.address)
        console.log("contractAddress: "+contract.address);
        console.log("transactionHash: "+contract.transactionHash);
});
