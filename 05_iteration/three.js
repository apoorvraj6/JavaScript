// for of

// ["","",""];
// [{},{},{}]

const arr =["apoorv","raj","rahul","mohan"]

for (const i of arr) {
    console.log(i);
}

let str="apoorv";

for (const i of str) {
    console.log(`Each char is ${i} `);
}

// Maps

const mp=new Map;
mp.set('IN',"India")
mp.set('USA',"United States of America")
mp.set('Fr',"France")

for (const [key,value] of mp) {
    console.log(key ,'-' ,value)
}


const myobj={
    'game1' :"PUBG",
    'game2' :"COC",
    'game3' :"Spiderman",

}

// for (const [key,value] of myobj) {
//     console.log(key ,'-' ,value);
// }   object are not iterable my for of


