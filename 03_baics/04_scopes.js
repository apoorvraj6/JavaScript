function one(){
    const userName="apoorv";

    function two(){
        const website="github";
        console.log(userName); // function two can access the variable of the parent function which is one
    }
    // console.log(website); // but function one cannot access the variable of the child function 
    two();
}
one();

if(true){
    const userName = "hitesh";
    if(userName === "apoorv"){
        const website = "you"
        console.log(userName + website)
    }
    // console.log(website);
}

// console.log(username);


// +++++++++++++++++++++++++++++++++++Interesting+++++++++++++++++++++++

console.log(addone(5));
function addone(num){
    return num+1;
}



// console.log(addtwo(5)); error
const addtwo = function(num)
{
    return num+2;
}
console.log(addtwo(5));