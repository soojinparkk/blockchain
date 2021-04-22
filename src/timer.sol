pragma solidity 0.6.4;

contract Timer {
    uint256 startTime;
    
    function start() public {
        startTime = now;
    }
    
    function timePassed() public view returns(uint256) {
        return now - startTime;
    }
    
    function getNow() public view returns(uint256) {
        return now;
    }
}
