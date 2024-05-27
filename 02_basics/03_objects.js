// singleton

// object literals
// Object.create //constructor method which creates singeleton another method do not create
const mysym=Symbol("key1");

const user={
    name:"apoorv",
    "full name":"apoorv raj",
    [mysym]:"aprbj", //symbols are declared like this in object
    age:21,
    location:"ghaziabad",
    email:"apoorv@amazon.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]
}
// console.log(user.email);
// console.log(user["email"]) // this method is used when the object consist of key in string format
// console.log(user["full name"]);
// console.log(typeof user[mysym]); //this type is used for printing symbol

// user.email="apoorv@google.com"
// console.log(user["email"])
// Object.freeze(user); // freeze is used to freeze the object means it cannot be changed
// user.email="apoorv@netflix.com"
// console.log(user.email)

// console.log(user); // See symbol key which is mysym here

user.greeting=function(){
    console.log("Hello user")
}
user.greetingtwo=function(){
    console.log(`Hello user ${this.name}`);
}
console.log(user.greeting())
console.log(user.greetingtwo())

