pragma solidity >=0.4.2;

contract Customer {
    struct UserInfo {
        uint userId;
        string name;
        string phone;
        string addr;
    }
    mapping(address=>UserInfo) userMap;
    mapping(uint=>address) addressByUserId;
    mapping(address=>uint) balanceOfUser;
    
    function addCustomer(uint _id, string memory _name, string memory _ph, string memory _home) public {
        UserInfo memory c = UserInfo(_id, _name, _ph, _home);
        userMap[tx.origin] = c;
        addressByUserId[_id] = tx.origin;
        balanceOfUser[tx.origin] = tx.origin.balance;
    }
    function getHomeAddress() public view returns(string memory) {
        return userMap[tx.origin].addr;
    }
    function getId() public view returns(uint) {
        return userMap[tx.origin].userId;
    }
    function withdraw(address addr, uint _amount) public payable {
        require(balanceOfUser[addr] >= _amount);
        balanceOfUser[addr] -= _amount;
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
        string addr;
    }
    mapping(address=>OrderInfo) orderMap;
    mapping(uint=>address) addressByOrderId;
    Customer c;
    address owner;
    uint balanceOfOwner;
    uint orderCnt;
    constructor() public {
        c = new Customer();
        owner = msg.sender;
        balanceOfOwner = 0;
        orderCnt = 0;
    }
    function getHomeAddress() public view returns(string memory) {
        return c.getHomeAddress();
    }
    function placeOrder(uint _id, string memory _p, uint _n, uint _amount) public payable {
        OrderInfo memory od = OrderInfo(_id, _p, _n, _amount, now, "Ordered", getHomeAddress());
        orderMap[msg.sender] = od;
        addressByOrderId[_id] = msg.sender;
        orderCnt++;
        
        require(msg.value == _amount);
        c.withdraw(msg.sender, _amount);
        balanceOfOwner += _amount;
    }
    function addCustomer(uint _id, string memory _name, string memory _ph, string memory _home) public {
        c.addCustomer(_id, _name, _ph, _home);
    }
    function getStatus() public view returns(string memory) {
        return orderMap[msg.sender].status;
    }
    function updateStatus(uint _id, string memory _s) public isOwner {
        orderMap[addressByOrderId[_id]].status = _s;
    }
    function getOrderItem() public view returns(uint, string memory, string memory, string memory) {
        OrderInfo memory od = orderMap[msg.sender];
        return (od.orderId, od.item, od.status, od.addr);
    }
    function getOrderById(uint _id) public view returns(uint, string memory, string memory, string memory) {
        OrderInfo memory od = orderMap[addressByOrderId[_id]];
        return (od.orderId, od.item, od.status, od.addr);
    }
    function getNOrder() public view returns(uint) {
        return orderCnt;
    }
    function getTotalOrderAmount() public view returns(uint) {
        return balanceOfOwner;
    }
    function queryBalance() public view returns(uint) {
        return address(this).balance;
    }
    modifier isOwner() {
        require(msg.sender == owner);
        _;
    }
}
