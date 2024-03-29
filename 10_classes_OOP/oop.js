
//OBJECT LITERAL: literrary an object and its properties

const user = {              //user is object lteral and has info and also a fucntion inside
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);    //without this. you wont get the recent result
        // console.log(this);    //this will show you what this contains atm
    }
}


console.log(user.username);     
// console.log(user.getUserDetails());       //calling a function from object litertal
// console.log(this);