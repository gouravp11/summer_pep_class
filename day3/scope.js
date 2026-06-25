function scope(){
    if(true) {
        let num1 = 33;
        const constNum = 22;
        // console.log(constNum);

        var num2 = 44;
        console.log(num2);
    }
    // console.log(constNum); // reference error, const is block scoped
    // console.log(num); // reference error, let is block scoped
    console.log(num2);
}
// console.log(num2) // reference error, var is functional scoped
scope();
