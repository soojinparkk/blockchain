var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));

var _abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"getOrderList","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOrderListByAddr","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_orderId","type":"uint256"}],"name":"getOrderListById","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getUserAddr","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_orderId","type":"uint256"},{"internalType":"string","name":"_item","type":"string"},{"internalType":"uint256","name":"_n","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"order","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_orderId","type":"uint256"}],"name":"refund","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_userId","type":"uint256"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_phone","type":"string"},{"internalType":"string","name":"_addr","type":"string"}],"name":"setUser","outputs":[],"stateMutability":"nonpayable","type":"function"}];
var _order = new web3.eth.Contract(_abi, "0x1C12FEa92BAfD35C33b546CdF9B800E5Df2BFbfa");

async function doIt() {
    const accounts = await web3.eth.getAccounts();
    
    // 1-1
    console.log("1-1 ==========================================================\n");
    console.log("accounts[0]: "+await web3.eth.getBalance(accounts[0]));
    console.log("accounts[1]: "+await web3.eth.getBalance(accounts[1]));
    console.log("accounts[2]: "+await web3.eth.getBalance(accounts[2])+"\n");
    await web3.eth.getBlockNumber(function (e, ret) {
        if (!e)
            console.log("block number: "+ret);
    });
    
    // 1-3
    console.log("\n1-3 ==========================================================\n\nsetUser");
    await _order.methods.setUser(111, "kim", "010-2017-1111", "111 hongji-dong jongro-gu seoul").send({from:accounts[0], gas:3000000})
    await _order.methods.setUser(112, "lee", "010-2017-1112", "112 hongji-dong jongro-gu seoul").send({from:accounts[1], gas:3000000})
    await _order.methods.setUser(113, "lim", "010-2017-1113", "113 hongji-dong jongro-gu seoul").send({from:accounts[2], gas:3000000})

    // 1-4
    console.log("\n1-4 ==========================================================\n");
    await _order.methods.getUserAddr().call({from:accounts[0]}).then(function(v) {console.log("accounts[0]: "+v)});
    await _order.methods.getUserAddr().call({from:accounts[1]}).then(function(v) {console.log("accounts[1]: "+v)});
    await _order.methods.getUserAddr().call({from:accounts[2]}).then(function(v) {console.log("accounts[2]: "+v)});
    
    // 1-5
    console.log("\n1-5 ==========================================================\n\norder");
    await _order.methods.order(555, "T-Shirt", 2, 1115).send({from:accounts[0], gas:3000000, value:1115});
    await _order.methods.order(556, "T-Shirt", 3, 1116).send({from:accounts[1], gas:3000000, value:1116});
    await _order.methods.order(557, "T-Shirt", 4, 1117).send({from:accounts[2], gas:3000000, value:1117});
    
    // 1-6
    console.log("\n1-6 ==========================================================\n");
    await _order.methods.getOrderList().call().then(function(v) {console.log("order count: "+v[0]+"\norder price: "+v[1]+"\ncontract balance: "+v[2])});
    
    // 1-7
    console.log("\n1-7 ==========================================================\n");
    await _order.methods.getOrderListByAddr().call({from:accounts[0]}).then(function(v) {console.log(v)});
    await _order.methods.getOrderListByAddr().call({from:accounts[1]}).then(function(v) {console.log(v)});
    await _order.methods.getOrderListByAddr().call({from:accounts[2]}).then(function(v) {console.log(v)});
    
    // 1-8
    console.log("\n1-8 ==========================================================\n");
    _order.methods.getOrderListById(556).call({from:accounts[1]}).then(function(v) {console.log(v)});
    
    // 1-9
    await _order.methods.refund(556).send({from:accounts[1], gas:3000000});
    
    // 1-10
    console.log("\n1-10 ==========================================================\n");
    _order.methods.getOrderListById(556).call({from:accounts[1]}).then(function(v) {console.log(v)});
    _order.methods.getOrderList().call().then(function(v) {console.log("\norder count: "+v[0]+"\norder price: "+v[1]+"\ncontract balance: "+v[2])});
}
doIt()
