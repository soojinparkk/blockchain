pragma solidity 0.6.4;

contract Students {
    struct Student {
        uint num;
        string name;
        bool isEnrolled;
    }
    Student[] st;
    
    function insert(uint n, string memory sn, bool e) public {
        Student memory s = Student(n, sn, e);
        st.push(s);
    }
    function getFirstStudent() public view returns(uint, string memory, bool) {
        return (st[0].num, st[0].name, st[0].isEnrolled);
    }
    function findBy(uint8 index) view public returns(uint, string memory, bool) {
        return (st[index].num, st[index].name, st[index].isEnrolled);
    }
    function remove(uint index) public {
        if (index < st.length) {
            for (uint i = index;i < st.length-1;i++) {
                st[i].num = st[i+1].num;
                st[i].name = st[i+1].name;
                st[i].isEnrolled = st[i+1].isEnrolled;
            }
            st.pop();
        }
    }
    function getLength() view public returns(uint) {
        return st.length;
    }
    function pop() public {
        st.pop();
    }
}
