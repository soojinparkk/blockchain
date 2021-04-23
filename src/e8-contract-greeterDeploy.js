var Web3 = require('web3');
var web3;
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
}

var _abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"greet","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_greeting","type":"bytes32"}],"name":"setGreeting","outputs":[],"stateMutability":"nonpayable","type":"function"}];
var _bin = "608060405234801561001057600080fd5b507f48656c6c6f00000000000000000000000000000000000000000000000000000060008190555060c7806100466000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c806350513b4f146037578063cfae3217146062575b600080fd5b606060048036036020811015604b57600080fd5b8101908080359060200190929190505050607e565b005b60686088565b6040518082815260200191505060405180910390f35b8060008190555050565b6000805490509056fea26469706673582212209783fe7472d18828b662f67d756e46d27e43599a41f4654582caa72d85acf53764736f6c63430006040033";
var _contract = new web3.eth.Contract(_abi);

_contract
    .deploy({ data: "0x"+_bin })
    .send({
     from: '0xCE966b32cAd5E30E5A20F425bac553F07641eEe3',
     gas: '1000000'
    })
    .then(function(newContractInstance){
        console.log("contract address: "+newContractInstance.options.address)
    });
