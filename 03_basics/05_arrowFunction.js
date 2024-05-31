const user = {
    username: "apoorv",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to the website`)
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this); // here this value will show {} but in browser it show browser event

// function chai(){
//     let user = "apoorv"
//     console.log(this.user) // show undefined
// }
// chai();

const chai = () => {
    let user = "apoorv"
    console.log(this.user) // show undefined
}
chai();
// () =>{}

// explict return 
// const addtwo =(num1,num2) => {
//     return num1+num2;
// }
// console.log(addtwo(4,5))

// Implict return 
// const addtwo = (num1, num2) => num1 + num2; // can also use (num1 + num2)
const addtwo = (num1, num2) => ({username:"apoorv"}); //() are used when object is passed

console.log(addtwo(4, 5))








