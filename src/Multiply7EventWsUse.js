var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.WebsocketProvider("http://localhost:8345"));

var _abi = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"addr","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ret","type":"uint256"}],"name":"Print","type":"event"},{"inputs":[{"internalType":"uint256","name":"input","type":"uint256"}],"name":"multiply","outputs":[],"stateMutability":"nonpayable","type":"function"}];
var _contract = new web3.eth.Contract(_abi, "0x971fA2B124718373AD7f34bbf2606E4165B4D94a");

var event = _contract.events.Print({fromBlock:0}, function (err, ret) {
    if (!err)
        console.log("Event Fired: "+JSON.stringify(ret.returnValues));
});

async function doIt() {
    const accounts = await web3.eth.getAccounts();
    console.log("\nAccount: "+accounts[0]);
    const balanceBefore = await web3.eth.getBalance(accounts[0]);
    console.log("Balance Before: "+balanceBefore);
    
    // multiply 8
    const value8 = await _contract.methods.multiply(8)
        .send({from:accounts[0], gas:1000000})
    console.log("\n\n---> function called 8"+JSON.stringify(value8.events.Print.returnValues));
    
    // multiply 16
    const value16 = await _contract.methods.multiply(16)
        .send({from:accounts[0], gas:1000000})
    console.log("\n\n---> function called 16"+JSON.stringify(value16.events.Print.returnValues));
    
    const balanceAfter = await web3.eth.getBalance(accounts[0]);
    console.log("\nBalance After: "+balanceAfter);
    console.log("Balance diff: "+(balanceBefore - balanceAfter));
}
doIt()
