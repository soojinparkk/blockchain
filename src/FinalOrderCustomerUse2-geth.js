var Web3 = require('web3');
var _abiJson = require('./FinalOrderCustomerABI.json');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8445"));

contractNames = Object.keys(_abiJson.contracts);
contractName = contractNames[1];
var _abi = JSON.parse(_abiJson.contracts[contractName].abi);

var _order = new web3.eth.Contract(_abi, "0x83C50371DC5A3F661C1174956a3c93Bd121f6ab9");

async function doIt() {
    const accounts = await web3.eth.getAccounts();
    
    // Q10
    console.log("\nQ10-1 =======================================================\n\nplaceOrder Complete");
    await _order.methods.placeOrder(555, "T-Shirt", 2, 1115).send({from:accounts[1], gas:4700000, value:1115});
    
    console.log("\nQ10-2 =======================================================\ngetOrderById(555)\n");
    await _order.methods.getOrderById(555).call().then(function(v) {console.log(v)});}
doIt()
