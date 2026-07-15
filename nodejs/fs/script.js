const { error } = require("console");
const fs = require("fs");

// fs.readFile("hello.txt", "utf-8", (error, data) => {
//     if(error) {
//         console.log("Error: ", error);
//         return;
//     }
//     console.log(data);
// })

// const str = "some text inside the hello.txt file";
// fs.writeFile("hello.txt", str, (error) => {
//     if(error) {
//         console.log("Error writing in file");
//         return;
//     }
//     console.log("File written! Victory!");
// })

// const moreText = "\nthis is some more text";
// fs.appendFile('hello.txt', moreText, (error) => {
//     if(error) {
//         console.log("Unable to append");
//         return;
//     }
//     console.log("Text appended!")
// })

// fs.unlink('hello.txt', (err) => {
//     if(err) {
//         console.log("delete failed");
//         return;
//     }
//     console.log("file deleted");
// })
