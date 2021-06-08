pragma solidity >=0.5.0;

contract Customer {
    struct UserInfo {
        uint userId;
        string name;
        string phone;
        string addr;
        uint mileage;
        bool isCustomer;
    }
    mapping(address=>UserInfo) userMap;
    mapping(uint=>address) addressByUserId;
    mapping(address=>uint) balanceOfUser;
    
    function setUser(address addr, uint _userId, string memory _name, string memory _phone, string memory _addr) public {
        if (userMap[addressByUserId[_userId]].isCustomer) {
            revert("This account already exists");
        } else {
            UserInfo memory c = UserInfo(_userId, _name, _phone, _addr, 0, true);
            userMap[addr] = c;
            addressByUserId[_userId] = addr;
            balanceOfUser[addr] = addr.balance;
        }
    }
    function setMileage(address addr, uint _price, bool _status) public {
        uint m = _price/100;
        if (_status) {
            userMap[addr].mileage += m;
        } else {
            userMap[addr].mileage -= m;
        }
    }
    function getUserAddr(address addr) public view returns(string memory) {
        return userMap[addr].addr;
    }
    function withdraw(address addr, uint _price) public payable {
        require(balanceOfUser[addr] >= _price);
        balanceOfUser[addr] -= _price;
    }
    function refund(address addr, uint _price) public payable {
        balanceOfUser[addr] += _price;
    }
}

contract Order {
    struct OrderInfo {
        uint orderId;
        string item;
        uint n;    // number of items
        uint price;
        uint time;
        string status;
        bool isOrdered;
    }
    mapping(address=>OrderInfo) orderMap;
    mapping(uint=>address) addressByOrderId;
    Customer c;
    uint balanceOfOwner;
    uint orderCnt;
    constructor() public {
        c = new Customer();
        balanceOfOwner = 0;
        orderCnt = 0;
    }
    function setUser(uint _userId, string memory _name, string memory _phone, string memory _addr) public {
        c.setUser(msg.sender, _userId, _name, _phone, _addr);
    }
    function getUserAddr() public view returns(string memory) {
        return c.getUserAddr(msg.sender);
    }
    function order(uint _orderId, string memory _item, uint _n, uint _price) public payable {
        OrderInfo memory od = OrderInfo(_orderId, _item, _n, _price, now, "Ordered", true);
        orderMap[msg.sender] = od;
        addressByOrderId[_orderId] = msg.sender;
        c.setMileage(msg.sender, _price, true);
        orderCnt++;
        
        require(msg.value == _price);
        c.withdraw(msg.sender, _price);
        balanceOfOwner += _price;
    }
    function getOrderList() public view returns(uint, uint, uint) {
        return (orderCnt, balanceOfOwner, address(this).balance);
    }
    function getOrderListByAddr() public view returns(uint, string memory, string memory, string memory) {
        OrderInfo memory od = orderMap[msg.sender];
        return (od.orderId, od.item, od.status, c.getUserAddr(msg.sender));
    }
    function getOrderListById(uint _orderId) public view returns(uint, string memory, string memory, string memory) {
        OrderInfo memory od = orderMap[addressByOrderId[_orderId]];
        return (od.orderId, od.item, od.status, c.getUserAddr(addressByOrderId[_orderId]));
    }
    function refund(uint _orderId) public payable {
        require(addressByOrderId[_orderId] == msg.sender);
        OrderInfo memory od = orderMap[msg.sender];
        c.setMileage(msg.sender, od.price, false);
        orderCnt--;
        
        c.refund(msg.sender, od.price);
        balanceOfOwner -= od.price;
        msg.sender.transfer(od.price);
        
        orderMap[addressByOrderId[_orderId]].status = "Refunded";
        orderMap[addressByOrderId[_orderId]].price = 0;
    }
}
