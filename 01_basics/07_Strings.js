const name="apoorv";
const repoCount=50;

// console.log(name+repoCount+"raj") //outdated
console.log(`hello my name is ${name} and my repo count is ${repoCount} `);

const gameName =new String('apoorv-ra');
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());//do not change the original value because string is primitive.
console.log(gameName.charAt(3));
console.log(gameName.indexOf('o'));

const newstring=gameName.substring(0,4);
console.log(newstring);

const anotherString =gameName.slice(1,1);
console.log(anotherString)

const newStringOne="      raj     ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url ="https://apoorv.com/apoorv%20raj";


console.log(url.replace('%20','-'));
console.log(url.includes('sundar'));

const naam="apoorv-raj-is-best";
console.log(naam.split('-'));
