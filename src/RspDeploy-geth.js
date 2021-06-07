var Web3 = require('web3');
var web3;
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8445"));
}

var _abi = [{"constant":true,"inputs":[],"name":"getMatchResult","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"},{"name":"_addrB","type":"address"}],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"getBalanceAll","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"play","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"distributeBetAmount","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_rsp","type":"uint8"},{"name":"amount","type":"uint256"}],"name":"setB","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"setA","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];
var _bin = "0x"+"608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060006002819055507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600160166101000a81548160ff021916908360000b60ff160217905550610c7b806100a66000396000f3fe608060405260043610610083576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680634a686381146100885780636e553f6514610118578063764e15a41461016657806393e84cd91461019f578063a0be28f5146101b6578063cb4bac76146101c0578063ee919d5014610208575b600080fd5b34801561009457600080fd5b5061009d610243565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100dd5780820151818401526020810190506100c2565b50505050905090810190601f16801561010a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101646004803603604081101561012e57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610365565b005b34801561017257600080fd5b5061017b6104f0565b60405180848152602001838152602001828152602001935050505060405180910390f35b3480156101ab57600080fd5b506101b46105db565b005b6101be61071f565b005b3480156101cc57600080fd5b50610206600480360360408110156101e357600080fd5b81019080803560ff16906020019092919080359060200190929190505050610942565b005b34801561021457600080fd5b506102416004803603602081101561022b57600080fd5b8101908080359060200190929190505050610aab565b005b606080602060405190810160405280600081525090506000600160169054906101000a900460000b60000b14156102b1576040805190810160405280600381526020017f7469650000000000000000000000000000000000000000000000000000000000815250905061035e565b60018060169054906101000a900460000b60000b1415610308576040805190810160405280600681526020017f412077696e730000000000000000000000000000000000000000000000000000815250905061035d565b6002600160169054906101000a900460000b60000b141561035c576040805190810160405280600681526020017f422077696e73000000000000000000000000000000000000000000000000000081525090505b5b5b8091505090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156103c057600080fd5b81341415156103ce57600080fd5b81600360008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508160036000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505050565b6000806000600360008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205460036000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020543073ffffffffffffffffffffffffffffffffffffffff1631925092509250909192565b600160159054906101000a900460ff1660ff16600160149054906101000a900460ff1660ff16141561062b576000600160166101000a81548160ff021916908360000b60ff16021790555061071d565b6000600160149054906101000a900460ff1660ff1614801561065e575060018060159054906101000a900460ff1660ff16145b8061069957506002600160149054906101000a900460ff1660ff1614801561069857506002600160159054906101000a900460ff1660ff16145b5b806106d457506002600160149054906101000a900460ff1660ff161480156106d357506000600160159054906101000a900460ff1660ff16145b5b156106fc5760018060166101000a81548160ff021916908360000b60ff16021790555061071c565b6002600160166101000a81548160ff021916908360000b60ff1602179055505b5b565b60018060169054906101000a900460000b60000b14156107ae57600254600360008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550610938565b6002600160169054906101000a900460000b60000b141561083f5760025460036000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550610937565b6002805481151561084c57fe5b04600360008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550600280548115156108c757fe5b0460036000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b5b6000600281905550565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561099d57600080fd5b8060036000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410151515610a0d57600080fd5b81600160156101000a81548160ff021916908360ff1602179055508060036000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550806002600082825401925050819055505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610b0657600080fd5b80600360008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410151515610b7557600080fd5b6003424460405160200180838152602001828152602001925050506040516020818303038152906040528051906020012060019004811515610bb357fe5b06600160146101000a81548160ff021916908360ff16021790555080600360008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550806002600082825401925050819055505056fea165627a7a723058205a9fc1b218a2fee24fa07f6ae132a7f0c672e8ef188a647df91480f78a5b15440029";

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
