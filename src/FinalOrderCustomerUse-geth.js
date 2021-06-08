var Web3 = require('web3');
var _abiJson = require('./FinalOrderCustomerABI.json');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8445"));

contractNames = Object.keys(_abiJson.contracts);
contractName = contractNames[1];
var _abi = JSON.parse(_abiJson.contracts[contractName].abi);

var _order = new web3.eth.Contract(_abi, "0x83C50371DC5A3F661C1174956a3c93Bd121f6ab9");

async function doIt() {
    const accounts = await web3.eth.getAccounts();
    
    // Q9
    console.log("\nQ9 ==========================================================\n\naddCustomer Complete");
    await _order.methods.addCustomer(111, "kim", "010-2017-1111", "111 hongji-dong jongro-gu seoul").send({from:accounts[1], gas:4700000})

    // Q10
    
}
doIt()
