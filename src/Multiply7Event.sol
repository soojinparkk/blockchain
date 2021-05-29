pragma solidity >=0.5.0;

contract Multiply7Event {
    event Print(address addr, uint256 timestamp, uint ret);
    
    function multiply(uint input) public {
        uint ret = 7 * input;
        emit Print(msg.sender, now, ret);
    }
}
