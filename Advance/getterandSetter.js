class user{
    constructor(name,password){
        this.name = name
        this.password = password
    }

    get name(){
        return `${this._name.toUpperCase()}`
     }
     set name(value){
         this._name = value
     }

    get password(){
       return `${this._password.toUpperCase()}`
    }
    set password(value){
        this._password = value
    }

}

const newUser = new user("Himanshu","abcdef")
console.log(newUser.password);
console.log(newUser.name);