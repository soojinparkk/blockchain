var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.WebsocketProvider("http://localhost:8345"));

var _abi = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"my","type":"string"}],"name":"MyLog","type":"event"},{"inputs":[],"name":"myFunction","outputs":[],"stateMutability":"nonpayable","type":"function"}];
var _contract = new web3.eth.Contract(_abi, "0x2020D42A3e0706f1d3B5901458424e266b81114C");

var event = _contract.events.MyLog({fromBlock:0}, function (err, ret) {
    if (!err)
        console.log("Event Fired: "+JSON.stringify(ret.returnValues));
});

async function doIt() {
    const accounts = await web3.eth.getAccounts();
    console.log("Account: "+accounts[0]);
    const balanceBefore = await web3.eth.getBalance(accounts[0]);
    console.log("Balance Before: "+balanceBefore);
    const value = await _contract.methods.myFunction()
        .send({from:accounts[0], gas:1000000})
    console.log("myFunction called "+JSON.stringify(value.events.MyLog.returnValues));
    const balanceAfter = await web3.eth.getBalance(accounts[0]);
    console.log("Balance After: "+balanceAfter);
    console.log("Balance diff: "+(balanceBefore - balanceAfter));
}
doIt()
