var Web3 = require('web3');
var web3 = new Web3("http://127.0.0.1:8345");
var krw = 2797000;
web3.eth.getCoinbase().then(function (coinbase) {
    web3.eth.getBalance(coinbase).then(function (ret) {
        var bal = web3.utils.fromWei(ret, "ether");
        console.log("coinbase balance in ether: " + bal);
        console.log((bal * krw) + "won");
    });
});
