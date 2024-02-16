
 //Const obj = new Object{}   // this is singleton object

const obj = {}
 //******* Object literals
/*let jsUser = {
    name : "Himanshu",
    [sym] : "key1", // symbols keys always in a [] 
    "full name " : "Himanshu Singh",
    age : 18,
    email :"himanshu@gamil.com"
}*/


obj.name = "himanshu"
obj.age = 18
obj.mail = "himanshu@gmail.com"

console.log(obj);

// merge of object 
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

const obj3 = Object.assign(obj1,obj2) // assign
//                         target,source
const obj5 = Object.assign({},obj1,obj2) // assign correct syntx
console.log(obj3);

const obj4 = {...obj1,...obj2} // spread operator
console.log(obj4);
// both work same assign and spread

console.log(obj);
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj)); // use for all details insert in arr
console.log(obj.hasOwnProperty('name2')); //hasOwnProperty use for check entity


const course = {
    coursename : "Himanshu",
    price : 3999,
    duration : "6 Month"
}

const {coursename : name3} = course
console.log(name3);




