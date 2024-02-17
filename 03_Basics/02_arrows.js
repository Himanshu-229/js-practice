
const user = {
    username : "Himanshu",
    age : 25,
    welcomeMessage : function(){
        console.log(`${this.username} welcome to course`);
        console.log(this);
    }
}
// user.welcomeMessage()
// console.log(this);

function two(){
    console.log(this);
}
// two()

// const arrow = function(){
//     let username = "Himanshu"     
//     console.log(this.username);   "this" keyword doesn't work in function and arrow function
// }

// old way to write arrow function
// const arrow = (num1,num2) =>{
//     return num1 + num2
// } 

// new way to write arrow function
const arrow1 = (num1,num2) => num1 + num2
// another way 
const arrow = (num1,num2) => (num1 + num2)


console.log(arrow(3,6))

