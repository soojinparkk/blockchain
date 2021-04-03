var peer = "0x77d201694d9d1c3fbd44a56dab324ef299bc3fb1"
var bal1 = eth.getBalance(eth.coinbase);
var bal2 = eth.getBalance(peer);
console.log('my account balance in ether: ', web3.fromWei(bal1, "ether"));
console.log('peer balance in ether: ', web3.fromWei(bal2, "ether"));
console.log('block number: ', eth.blockNumber);
console.log('transaction count: ', eth.getTransactionCount(eth.coinbase));

var h = eth.sendTransaction({from:eth.coinbase, to:peer, value:10000});
console.log("...mining start");
miner.start();admin.sleepBlocks(1);miner.stop();
console.log("mining done...");
var bal1new = eth.getBalance(eth.coinbase);
var bal2new = eth.getBalance(peer);
console.log('my account balance in ether: ', web3.fromWei(bal1new, "ether"));
console.log('peer balance in ether: ', web3.fromWei(bal2new, "ether"));
console.log('block number: ', eth.blockNumber);
console.log('transaction count: ', eth.getTransactionCount(eth.coinbase));

console.log("\n\nincreased balance: ", bal2new - bal2);
console.log("gasUsed: ", eth.getTransactionReceipt(h).gasUsed);
