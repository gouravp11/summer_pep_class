let a = 10;
var b = 13; // global execution context

function sayHello() {
    let c = 10;
    // console.log("hello"); // function execution context
}

// console.log(a);

sayHello();