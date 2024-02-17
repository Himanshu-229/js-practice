// Immediately Invoked function Expression (IIFE)
//globe scope ke varibales ke decleration ko remove karne ke liye iife ka use hota h

(function one(){
  console.log("Himanshu");
})();

(() => {
    console.log("Singh");
})();

((name) => {
    console.log(`this system name ${name}`);
})("Singh");