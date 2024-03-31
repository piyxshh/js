class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)  //super and extend keyword help in calling something from  another exclusive function like the username
        this.email
        this.password
    }
}