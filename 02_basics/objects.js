// singleton
// Object.create

// object literals      

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",   // object.create will not work on this only the object[""] will
    [mySym]: "mykey1",                 // [] is mandatory for accessing it as a symbol or else it will be a string by default
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)                // further changes are not possible if the object is frozen
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);     //by using ` ` we can access all the info related to the object with given syntax
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());