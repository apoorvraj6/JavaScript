let score = "apoorv";
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof(valueInNumber)); //return NaN
console.log(valueInNumber) 


// 33 => 33
// "33abc" => NaN
// true=> 1 and false=>0
// null =0
// undefined =>NaN
// "apoorv" =>NaN

let isLoggedIn = "apoorv";

let booleanIsloogedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsloogedIn)
console.log(booleanIsloogedIn)


// 1=> true
// 0=>false
// "" => false
// "apoorv" =>true

let someNumber = 33;
let number=String(someNumber)
console.log(number)
console.log(typeof number)