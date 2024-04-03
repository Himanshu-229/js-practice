class user{
    constructor(username){
       this.username = username
    }
    logMe(){
        console.log(`This is username ${this.username}`)
    }
}

class Teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`this course added by ${this.username}`)
    }
}

const himan = new Teacher("Himanshu","himanshu@gmail.com","himan22")
himan.addCourse()

const shu = new user("Shhhuuuu")
// shu.addCourse()
shu.logMe()
// console.log(himan === user)
console.log(himan instanceof user)

