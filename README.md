# blockchain - ethereum

### geth 네트워크 초기화
```
geth --datadir .\eth init _genesis.json
```

### geth 콘솔 접속
```
geth attach http://localhost:8445
```

### geth 명령어

- 계정 생성
```
personal.newAccount("password")
```
- 계정 확인
```
eth.accounts
```
```
personal.listAccounts
```
- 블록 번호 확인
```
eth.blockNumber
```
- 잔고 확인
```
eth.getBalance(eth.accounts[0])
```
- ether로 잔고 확인
```
web3.fromWei(eth.getBalance(eth.accounts[0]), "ether")
```
- coinbase (etherbase) 확인
```
eth.coinbase
```
- coinbase (etherbase) 변경
```
miner.setEtherbase(eth.accounts[1])
```
- 마이닝
```
miner.start(); admin.sleepBlocks(1); miner.stop();
```
- 송금 -> hash 값 리턴
```
var transHash = eth.sendTransaction({from: eth.accounts[0], to: eth.accounts[1], value: web3.toWei(1, "ether")})
```
- 트랜잭션 시 사용한 gas량
```
eth.getTransactionReceipt(transHash).gasUsed
```
- 트랜잭션 횟수
```
eth.getTransactionCount(eth.coinbase)
```
