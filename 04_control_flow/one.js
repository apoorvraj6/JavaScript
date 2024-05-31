/* if 

if(condition){  // if condition is true then code under if is execcuted

}

condition can be an operator

types of operators 
<,>,<=,>=,==,===,!=

*/

// const isUserloggedIn = true;
// const temperature = 41;

// if (temperature === 51) {
//     console.log("less than 50")
// }
// else {
//     console.log("temperature is greater than 50");
// } 

// const score = 200; // error due to block
// if (score > 100) {
//     let power = "fly"
//     console.log(`user power: ${power}`)
// }
// console.log(`user power: ${power}`)  

// const balance =1000; // shorthand
// if(balance>500) console.log("test"),console.log("test2");

// 


const userLoggedIn=true;
const debitCard=true;
const loggedInFromGoogle =false;
const loggedInfromEmail =true;

if(userLoggedIn && debitCard ){
    console.log("Allowed to buy courses");
}
if(loggedInFromGoogle || loggedInfromEmail){
    console.log("user logged in");
}
    