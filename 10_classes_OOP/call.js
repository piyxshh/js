// function SetUsername(username){
//     //complex DB call
//     this.username = username
//     console.log("called");
// }


// function createUser(username, email, password){
//     SetUsername(username)

//     this.email = email
//     this.password = password
// }

// const gomez = new createUser("gomez", "gomez@fb.com", "567")
// console.log(gomez);


//in the above line of code when we console.log(chai) it prints only the email and password wrt to the createUser function and not the username
// even though the function SetUsername uis being called since the console.log is working but when the username is called in the later function its not getting called


//here's how to fix this:


function SetUsername(username){
    //complex DB call
    this.username = username
    console.log("called");
}


function createUser(username, email, password){
    SetUsername.call(this, username)
// .call is used to call something exclusive from another function
// this is used with username because it provides a fresh context in this function without using it username wont get called.

    this.email = email
    this.password = password
}

const gomez = new createUser("gomez", "gomez@fb.com", "567")
console.log(gomez);