

console.log(b); // var is hoisted and initialized with undefined
// console.log(a); // ref error, let is hoisted but in TDZ
// console.log(c); // ref error, const is hoisted but in TDZ

let a = 5;
const c = 13;
var b = 45;

console.log(a)
console.log(c)
console.log(b)