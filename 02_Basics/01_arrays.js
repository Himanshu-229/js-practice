let arr = new Array(1,2,3,4,5,6)
// console.log(arr);
// arr.unshift(0) use for insert value at start

// console.log(arr.includes(4));  // include search the value in arr
// console.log(arr.indexOf(4));  // search index

//console.log(arr.join());  // arr change into string

// slice and splice
console.log("A " , arr);
console.log("B " , arr.slice(0,4)); // slice don't change original arr

console.log("A " , arr);
console.log("C " , arr.splice(1,3)); // splice change original arr
console.log("A " , arr);