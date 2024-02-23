
// for loop
for(let index = 1;index<=10;index++){
   console.log(`for loop ${index}`);
}

// while loop
let index = 1;
while (index <= 10){
    console.log(`while loop ${index}`)
    index++
}

// do while loop
let index2 = 1;
do{
  console.log(`Do while loop ${index2}`);
  index2++
}while(index2<=10);

// for of loop
let arr = [1,2,3,4,5,6,7,8]
for (const num of arr) {
  console.log(`for of loop ${num}`);
}

// map 

const map = new Map();
map.set('IN',"India");
map.set('USA',"United States of America");
map.set('FR',"Franch");
map.set('IN',"India"); // maps store always uniqe values
// console.log(map);

for (const [key,values] of map) {
  console.log(`${key} , ${values}`);
}

const myObj = {
  js : "javascript",
  cpp : "c++",
  rb : "ruby"
}
// "for in loop" use for object "for of loop" doesn't work in objects

for (const key in myObj) {
  console.log(`${key} shortcuts of ${myObj[key]}`);
}

// forEach loop

const lang = ["js","ruby","py","html"]

lang.forEach( (item) =>{
 console.log(item);
})


lang.forEach( (item,index,arr) =>{
 console.log(item,index,arr);
})

const prog = [
  {
     language : "javascript",
     file : "js"
  },
  
  {
     language : "python",
     file : "py"
  },
  
  {
     language : "java",
     file : "java"
  }
]

prog.forEach( (item)=>{
  console.log(item.language);
  // console.log(item.file);
})

prog.forEach( (item)=>{
  // console.log(item.language);
  console.log(item.file);
})