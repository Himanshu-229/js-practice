

const sym = Symbol("key1")

let jsUser = {
    name : "Himanshu",
    [sym] : "key1", // symbols keys always in a [] 
    "full name " : "Himanshu Singh",
    age : 18,
    email :"himanshu@gamil.com"
}
// console.log(jsUser.full name);

// console.log(jsUser["full name "]);

// console.log(jsUser);

// console.log(typeof jsUser[sym]); for symbols

// Object.freeze use for freeze that value that doesn't want to change

jsUser.greeting = function(){
    console.log(`Hello Good Morning ${this.name}. ${this.email} is it your email?`);

}
console.log(jsUser.greeting());