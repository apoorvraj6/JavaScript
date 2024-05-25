/*
Primitives - 7 Types They are call by reference
String
Number
Boolean
null
undefined
Symbol
Big Int


Non-Primitive They are call by reference
Array
Objects
Functions




*/

const score=100;
const scorevalue=3.3;

const isLoggedIn =false;
const outsideTemp = null;

let userEmail;

const id=Symbol('123');
const anotherid=Symbol('123');

console.log(id == anotherid)

const bigNumber =5432n;
console.log(bigNumber)

const heros =["shaktiman","naagraj","doga"]

let myobj={
    name:"apoorv",
    age:27,
}
console.log(myobj)

const myfunction=function(){
    console.log("hello world");
}
console.log()

/*typeof chart
   typeof val           result
   undefined            undefined
   null                 object
   boolean              boolean
   number               boolean
   string               string
   object-Native        object
   object-Native,Host   function
   object-host          Implementation-defined
   Symbol               symbol
   BigInt               bigint
   Arrays               object
   Function             function
   Object               object
*/

