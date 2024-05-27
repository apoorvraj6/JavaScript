const score=400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(typeof balance.toString());
console.log(balance.toFixed(2))

const otherNumber=23.328;
console.log(otherNumber.toPrecision(4));

const hundreds=1000000;
console.log(hundreds.toLocaleString()); // apply commas to a number accoring to us value
console.log(hundreds.toLocaleString('en-IN')); //converted to indian value

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// <---------------------------Maths----------------------->

console.log(Math);
console.log(Math.PI);
console.log(Math.abs(-5)); // absoluute value
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));  // can see all function of the math on console of a browser

console.log(Math.random());   // diplay a random number between 0 and 1



const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+ min) // formula to display a random number between a range


