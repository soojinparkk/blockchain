var Web3 = require('web3');
var web3;
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
}

var _abi = [{"inputs":[{"internalType":"uint256","name":"input","type":"uint256"}],"name":"powerOf2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"}];
var _bin = "6080604052348015600f57600080fd5b5060af8061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063bdacc0cf14602d575b600080fd5b605660048036036020811015604157600080fd5b8101908080359060200190929190505050606c565b6040518082815260200191505060405180910390f35b60008160020a905091905056fea264697066735822122069499af1cbd849af6224e43e25eeb01f786db32f812c1e7d470c648e22eb2b8364736f6c63430006040033";
var _contract = new web3.eth.Contract(_abi);

_contract
    .deploy({ data: "0x"+_bin })
    .send({
     from: '0x153497C8666601a4e4742ffBA665c0a6E54EfFE2',
     gas: '1000000'
    })
    .then(function(newContractInstance){
        console.log("contract address: "+newContractInstance.options.address)
    });
