const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    //DB calls,cryptography,network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    },1000)
});

promiseOne.then(function(){
    console.log("promise consumed");
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"apoorv",email:"apoorv@google.com"})
    },1000)
})

promiseThree.then(function (user){
    console.log(user);
})

promiseFour = new Promise(function(resolve,reject){
    setTimeout(function (){
        let error = true;
        if(!error)
            resolve({username:"appu",password:'123'})
        else{
            reject('ERROR: something went wrong');
        }
    },1000)
})

promiseFour.then((user) =>{
    console.log(user);
    return user.username
}).then( (username)=>{
    console.log(username)
}).catch(function(err){
    console.log(err);
}).finally(()=>{
    console.log("Promise is resolved or rejected");
})

const promisefive = new Promise(function (resolve,reject){
    setTimeout(function (){
        let error = true;
        if(!error)
            resolve({username:"javaScript",password:'123'})
        else{
            reject('ERROR: JS went wrong');
        }
    },1000)
})

async function consume(){
    try {
        const response = await promisefive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consume();

async function getallusers(){
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();
    console.log(data);
    } catch (error) {
        console.log("E: ",error)
    }
}

getallusers();

fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) =>{
    return response.json()
}).then( (data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))
