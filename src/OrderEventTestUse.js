var Web3 = require('web3');
var web3;
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    var web3 = new Web3(new Web3.providers.WebsocketProvider("http://localhost:8345"));
}

var _abi = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"","type":"string"}],"name":"OrderLog","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes2","name":"_itemId","type":"bytes2"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"OrderLog","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"OrderLog","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"bytes2","name":"_itemId","type":"bytes2"},{"indexed":true,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"OrderLog","type":"event"},{"inputs":[{"internalType":"bytes2","name":"_itemId","type":"bytes2"},{"internalType":"uint256","name":"quantity","type":"uint256"}],"name":"order","outputs":[],"stateMutability":"payable","type":"function"}];

async function doIt() {
    var _contract = new web3.eth.Contract(_abi, "0x745b7fEb0DA1D72c6945cdCd3CDD42543AeC5E80");
    const accounts = await web3.eth.getAccounts();
    console.log("\nAccount: "+accounts[0]);
    var event = _contract.events.OrderLog({
            filter:{_from:accounts[0]},
            fromBlock: '16', toBlock: 'latest'
        }, function (err, ret) {
        if (!err)
            console.log("\n\nEvent Fired: "+JSON.stringify(ret.returnValues));
    });
    
    const balanceBefore = await web3.eth.getBalance(accounts[0]);
    console.log("Balance Before: "+balanceBefore);
    
    // this will fire another event
    my = await _contract.methods.order("0x1234", 4)
        .send({from:accounts[0], gas:100000, value:40});
    console.log("\n---> function called "+JSON.stringify(my.events.OrderLog.returnValues));
    
    // this will NOT fire another event
    my = await _contract.methods.order("0x1234", 10)
        .send({from:accounts[0], gas:100000, value:100});
    console.log("\n---> function called "+JSON.stringify(my.events.OrderLog.returnValues));
    
    const balanceAfter = await web3.eth.getBalance(accounts[0]);
    console.log("\nBalance After: "+balanceAfter);
    console.log("Balance diff: "+(balanceBefore - balanceAfter));
    
    process.exit(1);
}
doIt()
