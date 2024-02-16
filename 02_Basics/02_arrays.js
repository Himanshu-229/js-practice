
let arr = [1,2,3,4,5]
let arr2 = [11,12,13,14,15]
//arr.push(arr2) 
//let new_arr = arr.concat(arr2)  // concat always return new arr
//let another_arr = [...arr,...arr2] // spread operator use three dots 

let arr3 = [1,2,3,4,[5,6,[,8,7,[9,10],54],65,7],8,6]
//console.log(arr3.flat(Infinity)); // arr ke under arr ko single arr me store karne ke liye

console.log(Array.isArray("Himanshu"));

console.log(Array.from("Himanshu"));

console.log(Array.from({name : "Himanshu"}));
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));