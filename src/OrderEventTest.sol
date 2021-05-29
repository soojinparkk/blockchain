pragma solidity >=0.5.0;

contract OrderEventTest {
    uint uintPrice = 10;
    event OrderLog(string);
    event OrderLog(bytes2 _itemId, uint _value);
    event OrderLog(uint256 timestamp);
    event OrderLog(address indexed _from, bytes2 indexed _itemId, uint indexed _value);

    function order(bytes2 _itemId, uint quantity) public payable {
        uint256 orderTime = now;
        uint256 orderAmount = quantity * uintPrice;
        require(msg.value == orderAmount);
        emit OrderLog("Ordered");
        emit OrderLog(orderTime);
        emit OrderLog(msg.sender, _itemId, msg.value);
    }
}
