let grandParent = document.getElementById("grandParent");
let parent = document.getElementById("parent");
let child = document.getElementById("child");
let body = document.getElementsByTagName("body")[0];

body.addEventListener("click", ()=>{
    console.log("body event capturing");
}, true);
grandParent.addEventListener("click", ()=>{
    console.log("grandParent event capturing");
}, true);
parent.addEventListener("click", ()=>{
    console.log("parent event capturing");
}, true);
child.addEventListener("click", ()=>{
    console.log("child event capturing");
}, true);


body.addEventListener("click", ()=>{
    console.log("body event capturing");
});
grandParent.addEventListener("click", ()=>{
    console.log("grandParent event capturing");
});
parent.addEventListener("click", ()=>{
    console.log("parent event capturing");
});
child.addEventListener("click", ()=>{
    console.log("child event capturing");
});