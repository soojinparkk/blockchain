console.log('\n1. blocknumber: ', eth.blockNumber);
console.log('\n2. enode: ', admin.nodeInfo.enode);
console.log('\n3. peer count: ', net.peerCount);
console.log('\n4. accounts list: ', eth.accounts);

var bal1 = eth.getBalance(eth.accounts[0]);
var bal2 = eth.getBalance(eth.accounts[1]);
var bal3 = eth.getBalance(eth.accounts[2]);
console.log('\n5. balance in ether');
console.log('account[0] balance: ', web3.fromWei(bal1, "ether"));
console.log('account[1] balance: ', web3.fromWei(bal2, "ether"));
console.log('account[2] balance: ', web3.fromWei(bal3, "ether"));

console.log('\n6. coinbase change');
console.log('before: ', eth.coinbase);
miner.setEtherbase(eth.accounts[1]);
console.log('after: ', eth.coinbase);

console.log('\n7. transaction count: ', txpool.status.pending);
console.log('현재 거래가 발생하지 않았기 때문에 대기하는 트랜잭션이 없습니다.');

console.log('\n8. blocknumber: ', eth.blockNumber);
console.log('블록 번호가 처음 출력했을 때와 같습니다. 블록은 마이닝이 이루어졌을 때 생성되기 때문입니다.');
console.log('계정을 출력하거나 잔고를 출력하는 등의 작업은 마이닝에 해당되지 않기 때문에 블록이 생성되지 않습니다.');