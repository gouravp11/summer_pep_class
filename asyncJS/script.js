// console.log("hello");

// setTimeout(() => {
//     console.log("hi");
// }, 1000);

// console.log("world");

// console.log('1');
// console.log('2');
// setTimeout(()=>console.log('3'), 3000);
// console.log('4');
// setTimeout(()=>console.log('5'), 1000);
// console.log('6');
// setTimeout(()=>console.log('7'), 2000);

// console.log("hello");

// setTimeout(() => {
//     console.log("hi");
// }, 0);

// console.log("world");


console.log('1');
Promise.resolve().then(()=>console.log('9'));
console.log('2');
setTimeout(()=>console.log('3'), 3000);
console.log('4');
setTimeout(()=>console.log('5'), 1000);
Promise.resolve().then(()=>console.log('8'));
console.log('6');
setTimeout(()=>console.log('7'), 2000);

/* 1 2 4 6 9 8 5 7 3 */