const userEmail = "fdhffjkah"
// Empty string is considered as falsy value
//Non empty strings are considered as truthy value


if(userEmail)
    {
        console.log("got the user email");
    }
    else
    {
        console.log("dont have user email");
    }


/*
FALSY VALUE

false,0,-0,BigInt 0n,"",null,undefined,NaN

except these all are considered as truthy value

TRUTHY VALUE
"0",'false'," ",[],{},function(){},
*/


// if(userEmail.length === 0) // To pass an array
//     {
//         console.log("Array is empty");
//     }

// const emptyObj ={}
// if(Object.keys(emptyObj).length === 0)
//     {
//         console.log("object is empty");
//     }

// Nullish coalescing Operator (??)   null undefined

let val1;
// val1 = 5??10;
// val1=null ?? 10
// val1=undefined??15
val1=null ??10??20

console.log(val1);


// Terniary Operator

// condition ? true : false

const iceTeaPrice=100;

iceTeaPrice>=80?console.log("No money"):console.log("have money");