var _abiJson = require('../src/timerABI.json');
var _binJson = require('../src/timerBIN.json');
contractName = Object.keys(_abiJson.contracts);
console.log("contract name: "+contractName[0]);   // or contractName

_abi = _abiJson.contracts[contractName].abi;
_bin = _binJson.contracts[contractName].bin;
console.log("abi: "+_abi);
console.log("bin: "+_bin);
