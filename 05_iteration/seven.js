const num = [1, 2, 3, 4, 5, 6, 7];

// const newnum = num.map((i) => {
//     return i + 10
// });

const newnums = num   // chaining 
    .map((i) => i * 10)
    .map((i) => i + 1)
    .filter( (i) => i>40)

console.log(newnums)