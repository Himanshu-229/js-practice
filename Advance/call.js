function setUserName(username){
    this.username = username
    console.log("setUser Function");
}

function createUser(username,email,password) {
    
    setUserName.call(this,username)

    this.email = email
    this.password = password
}

const user = new createUser("Himanshu","himanshu@gmail.com","Hima@22")
console.log(user);