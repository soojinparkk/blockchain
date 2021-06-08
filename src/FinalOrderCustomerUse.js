var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));

var _abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_ph","type":"string"},{"internalType":"string","name":"_home","type":"string"}],"name":"addCustomer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getHomeAddress","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNOrder","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getOrderById","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOrderItem","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStatus","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalOrderAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"string","name":"_p","type":"string"},{"internalType":"uint256","name":"_n","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"placeOrder","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"queryBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"string","name":"_s","type":"string"}],"name":"updateStatus","outputs":[],"stateMutability":"nonpayable","type":"function"}];
var _order = new web3.eth.Contract(_abi, "0x51d6fA8569A118B7fD5eC12fd0f6723bf806033C");

async function doIt() {
    const accounts = await web3.eth.getAccounts();
    
    // Q4
    console.log("\nQ4 ==========================================================\n\naddCustomer Complete");
    await _order.methods.addCustomer(111, "kim", "010-2017-1111", "111 hongji-dong jongro-gu seoul").send({from:accounts[1], gas:3000000})
    await _order.methods.addCustomer(112, "lee", "010-2017-1112", "112 hongji-dong jongro-gu seoul").send({from:accounts[2], gas:3000000})
    await _order.methods.addCustomer(113, "lim", "010-2017-1113", "113 hongji-dong jongro-gu seoul").send({from:accounts[3], gas:3000000})

    // Q5
    console.log("\nQ5 ==========================================================\ngetHomeAddress\n");
    await _order.methods.getHomeAddress().call({from:accounts[1]}).then(function(v) {console.log("accounts[1]: "+v)});
    await _order.methods.getHomeAddress().call({from:accounts[2]}).then(function(v) {console.log("accounts[2]: "+v)});
    await _order.methods.getHomeAddress().call({from:accounts[3]}).then(function(v) {console.log("accounts[3]: "+v)});
    
    // Q6
    console.log("\nQ6 ==========================================================\n\nplaceOrder Complete");
    await _order.methods.placeOrder(555, "T-Shirt", 2, 1115).send({from:accounts[1], gas:3000000, value:1115});
    await _order.methods.placeOrder(556, "T-Shirt", 3, 1116).send({from:accounts[2], gas:3000000, value:1116});
    await _order.methods.placeOrder(557, "T-Shirt", 4, 1117).send({from:accounts[3], gas:3000000, value:1117});
    
    // Q7
    console.log("\nQ7-1 ========================================================\n");
    await _order.methods.getNOrder().call().then(function(v) {console.log("order count: "+v)});
    await _order.methods.getTotalOrderAmount().call().then(function(v) {console.log("order price: "+v)});
    await _order.methods.queryBalance().call().then(function(v) {console.log("contract balance: "+v)});
    
    console.log("\nQ7-2 ========================================================\n\nupdateStatus(556, 'On delivery')");
    await _order.methods.updateStatus(556, "On delivery").send({from:accounts[0], gas:3000000});

    console.log("\nQ7-3 ========================================================\ngetOrderById(556)\n");
    await _order.methods.getOrderById(556).call().then(function(v) {console.log(v)});
    
    // Q8
    console.log("\nQ8 ==========================================================\ngetOrderItem\n");
    await _order.methods.getOrderItem().call({from:accounts[1]}).then(function(v) {console.log(v)});
    await _order.methods.getOrderItem().call({from:accounts[2]}).then(function(v) {console.log(v)});
    await _order.methods.getOrderItem().call({from:accounts[3]}).then(function(v) {console.log(v)});
}
doIt()
