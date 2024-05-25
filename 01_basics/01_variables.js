const accountId =144553; //cannot be changed
let accountEmail="apoorvraj2112@gmail.com";
var pass="342323"; //scope problem
accountCity="Jaipur"; //not a good practice
let accountState;

//accountId=2;
/*
prefer not to use var 
because of issue of block scope and functional scope
*/

accountEmail+"gunjan45.com";
pass="3434343";
accountCity="banglore";
console.log(accountId);
console.table([accountEmail,accountId,accountCity,pass,accountState]);