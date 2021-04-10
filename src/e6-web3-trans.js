var Web3 = require('web3');
var web3 = new Web3("http://127.0.0.1:8345");

var ganache = "0x3094f548932189deb69fa7f6701bdcf426ae8814"        // ganache-cli coinbase
var geth = "0x74ccd5b995b3480fe9063ee539ebf065385f61c8";          // geth coinbase
var trans = web3.utils.toWei('1', "ether");                       // 전송할 1 ether 값

web3.eth.getBalance(geth).then(function (ret) {
    console.log("Before transaction...");
    console.log("coinbase: " + ret);
});
web3.eth.personal.sendTransaction({from:ganache, to:geth, value:trans});  // transaction
web3.eth.getBalance(geth).then(function (ret) {
    console.log("After transaction...");
    console.log("coinbase: " + ret);
});
