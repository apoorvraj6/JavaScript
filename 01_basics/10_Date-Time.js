let date=new Date();
console.log(date);
console.log(date.toString());
console.log(typeof date)


// console.log(date.toString())
// console.log(date.toISOString())
// console.log(date.toJSON())
// console.log(date.toLocaleDateString())
// console.log(date.toLocaleString())
// console.log(date.toLocaleTimeString())
// console.log(date.toTimeString())

// let myCreatedDate =new Date(2023,4,23);
// let myCreatedDate =new Date(2023,4,23,5,3);
// let myCreatedDate =new Date("2023-01-14");
let myCreatedDate =new Date("01-14-2023");
console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// console.log(`${newDate.getDay()} and the time is`)

console.log(newDate.toLocaleString('default',{
    weekday:"long",
}));