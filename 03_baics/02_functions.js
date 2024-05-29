function calculateCartPrice(val1,val2,...num1)  //... is a rest operator which put all the values in an array
{
    return num1;
}
console.log(calculateCartPrice(200,500,700,1000));

const user ={
    username:"apoorv",
    price:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user);
handleObject({
    username:"apoorv",
    price:399
});

const myNewArray =[200,400,100,600];

function returnsecondvalue(getarray)
{
    return getarray[1];
}

console.log(returnsecondvalue(myNewArray))
console.log(returnsecondvalue([100,200,300]))
