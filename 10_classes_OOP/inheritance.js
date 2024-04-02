class User {
    constructor(username){
        this.username = username
    }

    logMe(){           //logMe is a method function inside in the class User
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)  //super and extend keyword help in calling something from  another exclusive function like the username
        this.email
        this.password
    }

   addCourse(){
    console.log(`A new course was added by ${this.username}`);
   }
}

const ava = new Teacher("ava", "ava@gm.com", "123")

ava.addCourse()
//calls the addCourse function and puts in the new variable
const avaWinters = new User("avaWinters")
//creates a username for teacher using logMe function 
avaWinters.logMe()

