var Web3 = require('web3');
var web3;
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
}

var _abi = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"my","type":"string"}],"name":"MyLog","type":"event"},{"inputs":[],"name":"myFunction","outputs":[],"stateMutability":"nonpayable","type":"function"}];
var _bin = "0x"+"6080604052348015600f57600080fd5b5060d58061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063c3780a3a14602d575b600080fd5b60336035565b005b7f5186edd9beca61d795526ca1f274260b3fc74be3e10e1f02e1be1552e14f137360405180806020018281038252600c8152602001807f48656c6c6f20576f726c6421000000000000000000000000000000000000000081525060200191505060405180910390a156fea2646970667358221220096991976fa573005dabf68d3f5432146d7554635fb670d4ae2cff3c4d4c84f964736f6c63430006040033";

async function deploy() {
    const accounts = await web3.eth.getAccounts();
    console.log("Deploying the contract from "+accounts[0]);
    var deployed = await new web3.eth.Contract(_abi)
        .deploy({data:_bin})
        .send({from:accounts[0], gas:1000000}, function(err, transactionHash) {
            if (!err)
                console.log("hash: "+transactionHash);
        });
    console.log("The contract deployed to: "+deployed.options.address)
}
deploy()
