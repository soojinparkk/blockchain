var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));

var _abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"_addrB","type":"address"}],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"distributeBetAmount","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getBalanceAll","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMatchResult","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"play","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setA","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_rsp","type":"uint8"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setB","outputs":[],"stateMutability":"nonpayable","type":"function"}];
var _rsp = new web3.eth.Contract(_abi, "0x61633faFBAF95018F53C0d65FfFD875A7962a07d");

async function doIt() {
    const accounts = await web3.eth.getAccounts();
    
    // playerB에 계정 설정 및 playerA, B 모두 5000wei 충전
    await _rsp.methods.deposit(5000, accounts[1]).send({from:accounts[0], gas:1000000, value:5000});
    
    // 게임 전의 A, B, contract 잔고 출력
    _rsp.methods.getBalanceAll().call().then(function(v) {console.log("Before play\nA: "+v[0]+"  B: "+v[1]+"  contract: "+v[2]+"\n")});
    
    // setA(betting할 금액)
    await _rsp.methods.setA(1000).send({from:accounts[0], gas:1000000});
    
    // setB(rsp 선택, betting할 금액)
    // rsp (0:rock 1:scissors 2:paper)
    await _rsp.methods.setB(2, 1000).send({from:accounts[0], gas:1000000});
    
    // 승부내기
    await _rsp.methods.play().send({from:accounts[0], gas:1000000});
    
    // 결과 출력
    await _rsp.methods.getMatchResult().call().then(console.log);
    
    // betting 금액 분배
    await _rsp.methods.distributeBetAmount().send({from:accounts[0], gas:1000000});
    
    // 게임 후의 A, B, contract 잔고 출력
    _rsp.methods.getBalanceAll().call().then(function(v) {console.log("\nAfter play\nA: "+v[0]+"  B: "+v[1]+"  contract: "+v[2])});
}
doIt()
