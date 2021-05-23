var Web3 = require('web3');
var web3;
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
}

var _abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"","type":"string"}],"name":"PrintLog","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Sent","type":"event"},{"stateMutability":"nonpayable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_receiver","type":"address"}],"name":"forwardTo","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"}];
var _bin = "0x"+"608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060006001819055506103f4806100686000396000f3fe6080604052600436106100435760003560e01c806312065fe0146100bb57806327d8ad88146100ed578063853828b614610131578063b6b55f251461014857610044565b5b34801561005057600080fd5b507f968f0302429ff0e5bd56a45ce3ba1f4fa79f4b822857e438616435f00c3b59fd60405180806020018281038252600f8152602001807f46616c6c6261636b2063616c6c6564000000000000000000000000000000000081525060200191505060405180910390a1005b3480156100c757600080fd5b506100d0610176565b604051808381526020018281526020019250505060405180910390f35b61012f6004803603602081101561010357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610185565b005b34801561013d57600080fd5b506101466102c7565b005b6101746004803603602081101561015e57600080fd5b8101908080359060200190929190505050610386565b005b60008060015447915091509091565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146101de57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050158015610224573d6000803e3d6000fd5b507f3990db2d31862302a685e8086b5755072a6e2b5b780af1ee81ece35ee3cd3345338234604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a150565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461032057600080fd5b6065471161032d57600080fd5b476001600082825403925050819055503373ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f19350505050158015610383573d6000803e3d6000fd5b50565b60025442101561039557600080fd5b600a42016002819055508034146103ab57600080fd5b806001600082825401925050819055505056fea26469706673582212209b441e66e38575dc80972a2756c5bc6f3b65c4cdffc461e7e9486fb272eaba0364736f6c63430006040033";

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
