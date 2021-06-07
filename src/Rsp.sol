pragma solidity >=0.5.0;

contract Rsp {
    address owner;  // player A
    address addrB;  // player B
    uint8 rspA;     // 0:rock 1:scissors 2:paper
    uint8 rspB;     // 0:rock 1:scissors 2:paper
    int8 result;    // 0:tie 1:A wins 2:B wins
    uint betting;
    mapping(address=>uint) balanceOf;
    constructor() public {
        owner = msg.sender;
        betting = 0;
        result = -1;
    }
    
    function deposit(uint amount, address _addrB) payable public onlyOwner {
        require(msg.value == amount);
        balanceOf[owner] += amount;
        addrB = _addrB;
        balanceOf[addrB] += amount;
    }
    function getBalanceAll() view public returns(uint, uint, uint) {
        return (balanceOf[owner], balanceOf[addrB], address(this).balance);
    }
    function setA(uint amount) public onlyOwner {
        require(balanceOf[owner] >= amount);
        rspA = uint8(uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty)))%3);
        balanceOf[owner] -= amount;
        betting += amount;
    }
    function setB(uint8 _rsp, uint amount) public onlyOwner {
        require(balanceOf[addrB] >= amount);
        rspB = _rsp;
        balanceOf[addrB] -= amount;
        betting += amount;
    }
    function play() public {
        if (rspA == rspB)
            result = 0;     // tie
        else if ((rspA==0 && rspB==1) || (rspA==2 && rspB==2) || (rspA==2 && rspB==0))
            result = 1;     // A wins
        else
            result = 2;     // B wins
    }
    function distributeBetAmount() payable public {
        if (result == 1) {          // A wins
            balanceOf[owner] += betting;
        } else if (result == 2) {   // B wins
            balanceOf[addrB] += betting;
        } else {                    // tie
            balanceOf[owner] += betting/2;
            balanceOf[addrB] += betting/2;
        }
        betting = 0;
    }
    function getMatchResult() view public returns(string memory) {
        string memory ret = "";
        if (result == 0)
            ret = "tie";
        else if (result == 1)
            ret = "A wins";
        else if (result == 2)
            ret = "B wins";
        return ret;
    }
    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }
}
