
function name(){
 console.log("H");
 console.log("I");
 console.log("M");
 console.log("A");
 console.log("N");
 console.log("S");
 console.log("H");
 console.log("U");
}

function add(num1, num2){
    return num1 + num2
}
const result = add(5,3)
//console.log(result);

function add2(num1,num2){
    console.log(num1 + num2);
}
//add2(5,39)

function restoprator(...num1){     //three dots use for restoperator in functions
    return num1
}
//console.log(restoprator(301,453,8090,323,452));
 
const user = {
    username : "Himanshu",
      age : 24    
}

function getUser(getdetail){
    return `username ${getdetail.username} and his age is ${getdetail.age}`
}

function getUser2(getdetail2){
    return `username ${getdetail2.username} and his age is ${getdetail2.age}`
}

console.log(getUser2({
    username : "Himanshu",     // example of direct pass methods value in function
    age : 19
}));
