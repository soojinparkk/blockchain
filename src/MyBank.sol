pragma solidity 0.6.4;

contract MyBank {
    address payable owner;
    uint balance;
    constructor() public {
        owner = msg.sender;
        balance = address(this).balance;
    }
    
    function deposit(uint amount) public payable {
        require(msg.value == amount);
        balance += amount;
    }
    function withdrawAll() public {
        uint amount = balance;
        balance -= amount;
        owner.transfer(amount);
    }
    function getBalance() public view returns(uint, uint) {
        return (address(this).balance, balance);
    }
    function forwardTo(address payable _receiver) public payable {
        uint amount = 333;
        balance -= amount;
        _receiver.transfer(amount);
    }
}
