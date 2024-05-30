// Immediately Invoked Function Expression (IIFE)

(function chai() //Named IIFE
{
    console.log(`db connected`);
})();

// IIFE is used beacuse sometime there may be pollution because of global variable to remove that we use IIFE
// first () is function declaration and second () is used to call 

( () => {  // unnamed IIFE
    console.log(`db connected two`);
})('apoorv'); // gives error changing arrow function to normal function

( function chaiaur() {
    console.log(`db connected two`)
})(); // after changing it again give error to stop it use ;