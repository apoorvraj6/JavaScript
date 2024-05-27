const marvel_heros=["Thor","Ironman","Hulk"];
const dc_heros=["superman","batman","flash"];

// marvel_heros.push(dc_heros); //insert the whole dc array into the marvel array
// console.log(marvel_heros);

// let arr=marvel_heros.concat(dc_heros); //concat combines two array and return a new array
// console.log(arr)

const all_new_heros=[...marvel_heros,...dc_heros] //spread the array and create a new array
// console.log(all_new_heros)

// const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]; //to overcome this situtaion flat is used
// const real=another_array.flat(2);
// console.log(real);

console.log(Array.isArray("apoorv"));
console.log(Array.from("apoorv"));
console.log(Array.from({name:"apoorv"})); //return blank array


let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));