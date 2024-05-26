const name="apoorv"

//1 length -> To find the length of string
console.log(name.length);
//2 charAt -> return the character at specified index
console.log(name.charAt(3))
//3 charCodeAt -> return the code of the char at specified index
console.log(name.charCodeAt(3))
//4 slice -> extract a part of the string return the extracted part negative means from back
console.log(name.slice(-6,6))
//5 substring same as slice but negative are treated as 0
console.log(name.substring(-5,3))
//6 substr -> same as slice but second parameter specifies length of extracted part
console.log(name.substr(1,2))
//7 uppearcase -> convert string to uppercase
console.log(name.toUpperCase())
//8 lowercase -> convert string to lowercase
console.log(name.toLowerCase());
//9 concat -> join two string
const title="raj";
console.log(name.concat(" ",title));
//10 trim ->remove whitespace from both the sides of a string
const temp="       apoorv    ";
console.log(temp.trim())
//11 replace -> to  replace a specifie value 
console.log(name.replace("o","g"));
console.log(name.replace(/o/g,"g"));
//12 replaceAll -> used to remove in an expresion not in a string
const text="dogs are cute, dogs are active, dogs are strong";
console.log(text.replaceAll(/dogs/g,"cats"))
//13 split ->string can be converted to an array 
console.table(text.split(" "));
