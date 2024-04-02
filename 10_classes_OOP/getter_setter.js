class User {
    constructor(email, password){
        this.email = email;
        this.passsword = password
    }

    get password(){ //getter gets the value and can manipulate it
        return this._password.toUpperCase()
    }

    set password(value){ //setter sets the value depending if it is maniupulated or not. even if it isnt the value that will be printed will be as the getter has. but without setter getter wont work and vice versa.
        this._password = value
    }

}

const mcknight = new User("mcknight@fb.com", "abc")
console.log(mcknight.password);