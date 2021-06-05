var Web3 = require('web3');
var _abiJson = require('../src/FallbackTestABI.json');

var web3;
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.WebsocketProvider("http://localhost:8345"));
}

contractName = Object.keys(_abiJson.contracts);
console.log("- contract name: "+contractName[0]);
var _abi = JSON.parse(_abiJson.contracts[contractName].abi);

async function doIt() {
    const accounts = await web3.eth.getAccounts();
    console.log("\nAccount: "+accounts[0]);
    const balanceBefore = await web3.eth.getBalance(accounts[0]);
    console.log("Balance Before: "+balanceBefore);
    
    var _contract = new web3.eth.Contract(_abi, "0x58D1b899a3d483a85cA4C2e02Ef78c5fC10B9D8d");
    var event = _contract.events.PrintLog(function (err, ret) {
        if (!err)
            console.log("\n\nEvent Fired: "+JSON.stringify(ret.returnValues));
    });
    
    _contract.methods.callA().call().then(console.log);
    
    // fallback called
    web3.eth.sendTransaction({from:accounts[0], to:"0x5FA96D98362f92cc2E3dAF1F0fB53E2E717e4368"})
    
    const balanceAfter = await web3.eth.getBalance(accounts[0]);
    console.log("\nBalance After: "+balanceAfter);
    console.log("Balance diff: "+(balanceBefore - balanceAfter));
    
    process.exit(1);
}
doIt()
