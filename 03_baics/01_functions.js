
function addTwo(number1,number2)
{
    //  let result =number1+number2;
     return number1+number2;
}
const result=addTwo(3,4);
// addTwo(3,"a");
console.log("result",result);

function loginUserMsg(username="sam")
{
    if(!username)
        {
            console.log("please enter a username")
            return
        }
    // return `${username} just logged in`;
    console.log(`${username} just logged In`);
}

// const message=loginUserMsg("apoorv");
// const message1=loginUserMsg("");
// console.log(message);
// console.log(message1)

loginUserMsg("apoorv")
loginUserMsg("")
loginUserMsg()



