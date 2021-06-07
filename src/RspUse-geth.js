var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8445"));
var fs = require('fs');

var _abi = [{"constant":true,"inputs":[],"name":"getMatchResult","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"},{"name":"_addrB","type":"address"}],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"getBalanceAll","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"play","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"distributeBetAmount","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_rsp","type":"uint8"},{"name":"amount","type":"uint256"}],"name":"setB","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"setA","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];
var _rsp = new web3.eth.Contract(_abi, "0x05d992E51227D7DEE49724611ddd7703d0ad1a1D");

async function doIt() {
    const accounts = await web3.eth.getAccounts();
    
    // playerB에 계정 설정 및 게임 전 playerA, B 모두 5000wei 충전
    await _rsp.methods.deposit(5000, accounts[1]).send({from:accounts[0], gas:3000000, value:5000});
    
    // 게임 전의 A, B, contract 잔고 출력
    _rsp.methods.getBalanceAll().call().then(function(v) {console.log("Before play\nA: "+v[0]+"  B: "+v[1]+"  contract: "+v[2]+"\n")});
    
    // setA(betting할 금액)
    await _rsp.methods.setA(1000).send({from:accounts[0], gas:3000000});
    
    // setB(rsp 선택, betting할 금액)
    // rsp (0:rock 1:scissors 2:paper)
    await _rsp.methods.setB(2, 1000).send({from:accounts[0], gas:3000000});
    
    // 승부내기
    await _rsp.methods.play().send({from:accounts[0], gas:3000000});
    
    // 결과 출력
    _rsp.methods.getMatchResult().call().then(console.log);
    
    // betting 금액 분배
    await _rsp.methods.distributeBetAmount().send({from:accounts[0], gas:3000000});
    
    // 게임 후의 A, B, contract 잔고 출력
    _rsp.methods.getBalanceAll().call().then(function(v) {console.log("\nAfter play\nA: "+v[0]+"  B: "+v[1]+"  contract: "+v[2])});
}
doIt()
