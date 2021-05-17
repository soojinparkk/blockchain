var Web3 = require('web3');
var web3;
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
}

var _abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_receiver","type":"address"}],"name":"forwardTo","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"}];
var _bin = "608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555047600181905550610247806100676000396000f3fe60806040526004361061003f5760003560e01c806312065fe01461004457806327d8ad8814610076578063853828b6146100ba578063b6b55f25146100d1575b600080fd5b34801561005057600080fd5b506100596100ff565b604051808381526020018281526020019250505060405180910390f35b6100b86004803603602081101561008c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061010e565b005b3480156100c657600080fd5b506100cf610170565b005b6100fd600480360360208110156100e757600080fd5b81019080803590602001909291905050506101f2565b005b60008047600154915091509091565b600061014d9050806001600082825403925050819055508173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801561016b573d6000803e3d6000fd5b505050565b60006001549050806001600082825403925050819055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156101ee573d6000803e3d6000fd5b5050565b8034146101fe57600080fd5b806001600082825401925050819055505056fea2646970667358221220cda7fc4d9e8dc978a01a0817cee5ef25976afcca4cf010d9faab727e3186e1ff64736f6c63430006040033";
var _contract = new web3.eth.Contract(_abi);

_contract
    .deploy({ data: "0x"+_bin })
    .send({
     from: '0xF4B615BDCDbfB8cE347cf2581761cBb0Ce08da34',
     gas: '1000000'
    })
    .then(function(newContractInstance){
        console.log("contract address: "+newContractInstance.options.address)
    });
