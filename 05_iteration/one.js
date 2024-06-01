// for


// for (let i = 0; i <=10; i++) {
//     const element = i;
//     if(element == 5)
//         {
//             console.log("5 is best number");
//         }
//     console.log(element);
// }
// console.log(element) //cannot used outside of loop


// 

let myarray = ["flash", "batman", "superman"];
console.log(myarray.length);
for (let i = 0; i < myarray.length; i++) {
    console.log(myarray[i]);
}

// break and continue

for(let i=1;i<=20;i++){
    if(i==5){
        console.log(`detected 5`);
        break;
    }
    console.log(`value of i ${i}`);
}

for(let i=1;i<=20;i++){
    if(i==5){
        console.log(`detected 5`);
        continue;
    }
    console.log(`value of i ${i}`);
}
