loadScript('src/Math-geth.js');
contractName = Object.keys(_compiled.contracts);
var _abi = JSON.parse(_compiled.contracts[contractName[0]].abi);

var _contract = eth.contract(_abi);
var _addr = "0x29c74d210d6a483b06e608c684d862303c92f362";
var _instance = eth.contract(_abi).at(_addr);
console.log("2^8: "+_instance.powerOf2(8).call());
console.log("2^32: "+_instance.powerOf2(32).call());
