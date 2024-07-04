const user1 ={
    username:"apoorv",
    loginCount:8,
    singedIn:true,

    getUserDetails : function (){
        //console.log("Got user details from database");
        // console.log(`username: ${this.username}`);
        console.log(this);
    }
}
// console.log(user.loginCount);
// console.log(user.getUserDetails());
// console.log(this);

// Constructor

function user(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    return this;
}
const userOne = new user("apoorv",5,true);
// console.log(userOne)
const userTwo= new user("chai",11,false);
console.log(userOne);
console.log(userTwo)

// 1->new create a new object 
// 2->create a constructor
// 3->this keyword inject the data
// 4->get the data