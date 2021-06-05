// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0;

contract FallbackTest {
    event PrintLog(string);
    
    function callA() pure public returns(string memory) {
        return "doing callA";
    }
    fallback() external {
        emit PrintLog("fallback called");
    }
}
