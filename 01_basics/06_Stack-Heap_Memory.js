/*
Memory 

Two types Stack Memory and Heap Memory
Stack(primitive)
Heap(Non-Primitive)
*/

let myname="apoorv";
let anothername=myname;
console.log(anothername)
anothername="Raj";
console.log(anothername)
console.log(myname)

let user={
    name:"apoorv",
    email:"apooorvraj2003@gmail.com",
    age:21
}

let user2=user;
user2.email="rajapoorv858@gmail.com";
console.table(user2)
console.table(user)
