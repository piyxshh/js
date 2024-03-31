//ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const ava = new User("ava", "ava@fb.com", "567")

console.log(ava.encryptPassword());     //this will take the given password with and encrypt(edit) it
console.log(ava.changeUsername());         //changes the username to uppercase