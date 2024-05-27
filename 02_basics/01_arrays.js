
// const arr =[0,1,1,2,3,true,"apooorv"]
const arr=[0,1,2,3,4,5,6] // js array is resizeable and can have mix datatypes.
// const myHeros=["shaktiman","ironman"];
// const myarr2=new Array(1,2,3,4);
// console.log(arr[0])
// js create a shallow copy->share same reference

//Array Methods 

arr.push(7); //push element at the last of the array
arr.push(8)
console.log(arr);
arr.pop();  //remove the last element of the array
console.log(arr);
arr.unshift(9); //add element at start of the array
console.log(arr);
arr.shift(); //remocve the first element
console.log(arr)

console.log(arr.includes(9)); //find the element is present or not in the array
console.log(arr.indexOf(5)); // return the index of an element is not present returns -1

const newArr=arr.join(); // join the array and convert it into string
console.log(typeof newArr);
console.log(arr);

//slice
console.log("A ",arr);
const myn1=arr.slice(1,3); //start from 1 index and go till 3 not include 3. 0-based indexing
console.log(myn1);
console.log("B ",arr);


//splice
const myn2=arr.splice(1,3);
console.log(myn2);
console.log("C ",arr);
//splice includes the last index and rempve these element from the main array
