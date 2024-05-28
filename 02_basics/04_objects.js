const tinderUser = new Object();

tinderUser.id="123abc";
tinderUser.name="sammy";
tinderUser.isLoggedIn = false;
console.log(tinderUser)

const regularUser ={
    email:"apoorvrajamazon.com",
    fullname:{
        userfullname:{
            firstname:"apoorv",
            lastname:"raj",
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname); // accessing object inside an object

const obj1={
    name:"apoorv",
    age:21,
}
const obj2={
    last_name:"raj",
    number:20,
}

// const obj3 = {obj1,obj2}; //object inside an object
// console.log(obj3)
// const obj3=Object.assign({},obj1,obj2) // {} is optional but applying {} is a good practice
// console.log(obj3);

const obj3 ={...obj1,...obj2};
console.log(obj3);

const users =[
{
    id: 1,
    email:"h@gmail.com"
},
{
    id: 1,
    email:"h@gmail.com"
},
{
    id: 1,
    email:"h@gmail.com"
}]

console.log(users[1].email)

console.log(tinderUser)
console.log(Object.keys(tinderUser)) // return an array of all the keys
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // converted into arrays of arrays

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));


