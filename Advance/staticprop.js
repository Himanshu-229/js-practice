class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`this user is logged in by name ${this.username}`);
    }
    static creatId(){
        return `13429`
    }
}
// const himans = new user("himanshu")
// himans.logMe()

class Teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }
}

const mam = new Teacher("hema","hema@gmail.com","123")
 
console.log(mam.creatId)



