const http = require("http");

const server = http.createServer((req, res) => {
    const route = req.url;
    if(route == '/') {
        res.end("This is home");
    } else if(route == '/login') {
        res.end("This is login");
    } else if(route == 'signup') {
        res.end("This is sign up");
    } else {
        res.end("route not found!");
    }
})

server.listen(3000, ()=>{
    console.log("server started listening");
})