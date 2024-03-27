//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     //DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve()        //resolve is declared here and then later connected with .this
//     }, 1000)                     //the above promise will take place 1 second after code is run
// })

// promiseOne.then(function(){  //.then connects this promiseOne to resolve only
//     console.log('Promise consumed');
// })


//creating and consuming promise at once this time:

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 1000)
// }).then(function(){
//     console.log("Asunc 2 resolved");
// })


//
// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "chai", email: "chai@example.com"})  //we can also inject info inside the paramters of resolve
//     })
// }, 1000)

// promiseThree.then(function(user){
//     console.log(user);           //.then again connects to resolve and prints the paramter inside when a function is called
// })



//
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000) 
}).then((username) => {
    console.log(username);
}).catch(function(error){   //.catch is used to connect with reject 
    console.log(error);      
}).finally(() => console.log("The promise is either resolved or rejected"))

//since error is true hence resolve function wont work and .then is wont either
//only .catch will work with reject
