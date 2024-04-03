
class User{
    constructor(username,email,password){
  this.username = username
  this.email = email
  this.password = password
    }
    encryptPassword(){
       return `${this.password}123`
    }
    changeuserName(){
        return `${this.username.toUpperCase()}`
    }
}

const use = new User('Himanshu','himanshu@gmail.com',"abc")
console.log(use.encryptPassword());
console.log(use.changeuserName());