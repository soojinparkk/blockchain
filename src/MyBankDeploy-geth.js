var Web3 = require('web3');
var web3;
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8445"));
}

var _abi = [{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_receiver","type":"address"}],"name":"forwardTo","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"withdrawAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];
var _bin = "608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503073ffffffffffffffffffffffffffffffffffffffff16316001819055506102798061007e6000396000f3fe608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806312065fe01461006757806327d8ad8814610099578063853828b6146100dd578063b6b55f25146100f4575b600080fd5b34801561007357600080fd5b5061007c610122565b604051808381526020018281526020019250505060405180910390f35b6100db600480360360208110156100af57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610148565b005b3480156100e957600080fd5b506100f26101aa565b005b6101206004803603602081101561010a57600080fd5b810190808035906020019092919050505061022c565b005b6000803073ffffffffffffffffffffffffffffffffffffffff1631600154915091509091565b600061014d9050806001600082825403925050819055508173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156101a5573d6000803e3d6000fd5b505050565b60006001549050806001600082825403925050819055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610228573d6000803e3d6000fd5b5050565b803414151561023a57600080fd5b806001600082825401925050819055505056fea165627a7a7230582089ef82d58762171f4c91db27996cdc11a23944ad0b9f7b3937119f7e9d4961010029";
var _contract = new web3.eth.Contract(_abi);

_contract
    .deploy({ data: "0x"+_bin })
    .send({
     from: '0x74ccd5b995b3480fe9063ee539ebf065385f61c8',
     gas: '4700000'
    })
    .then(function(newContractInstance){
        console.log("contract address: "+newContractInstance.options.address)
    });
