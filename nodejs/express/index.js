const express = require("express");
const logger = require("./middlewares/logger");
const morgan = require("morgan");
const PORT = 3000;

const server = express();

server.use(express.json());

let students = [
    {id: 0, name: "John", age: 14, course: "Spanish"},
    {id: 1, name: "John", age: 11, course: "Maths"},
    {id: 2, name: "Michael", age: 21, course: "Physics"},
    {id: 3, name: "York", age: 13, course: "English"},
];

// server.use(logger);
server.use(morgan());

server.get("/", (req, res) => {
    res.send("This is home route...");
})
server.get("login", (req, res) => {
    res.send("This is login route...");
})
server.post("/login", (req, res)=> {
    res.status(202);
    res.json({success: true, message: "loggedin"});
})

server.get("/student/:id", (req, res)=> {
    const id = Number(req.params.id);
    if(id == NaN || id < 0 || id > students[students.length - 1].id) {
        res.json({success: false, message: "Record does not exist"});
        return;
    }

    const student = students.find(s => s.id == id);
    
    if(!student) {
        res.json({success: false, message: "Record does not exist"});
        return;
    }

    res.json({success: true, data: student});
})


server.get("/student/:id/:course", (req, res)=> {
    const id = Number(req.params.id);
    if(id == NaN || id < 0 || id > students[students.length - 1].id) {
        res.json({success: false, message: "Record does not exist"});
        return;
    }

    const course = req.params.course;
    
    const student = students.find(s => (s.id == id && s.course.toLowerCase() == course.toLowerCase()));
    
    if(!student) {
        res.json({success: false, message: "Record does not exist"});
        return;
    }

    res.json({success: true, data: student});
})

server.post("/student", (req, res) => {
    const newStudent = req.body;
    newStudent.id = students[students.length - 1].id + 1;

    students.push(newStudent);
    res.json({success: true, data: students[students.length - 1]});
})

server.put("/students/:id", (req, res) => {
    const id = Number(req.params.id);
    if(id == NaN || id < 0 || id > students[students.length - 1].id) {
        res.json({success: false, message: "Record does not exist"});
        return;
    }

    const {name, age, course} = req.body;

    if(!name || !age || !course) {
        res.json({success: false, message: "All details required"});
        return;
    }

    for(let i=0; i<students.length; i++) {
        const s = students[i];
        if(s.id == id) {
            s.name = name;
            s.age = age;
            s.course = course;
        }
    }

    const updatedStudent = students.find((s) => s.id == id);

    res.json({success: true, data: updatedStudent});
})

server.patch("/students/:id", (req, res) => {
    const id = Number(req.params.id);
    if(id == NaN || id < 0 || id > students[students.length - 1].id) {
        res.json({success: false, message: "Record does not exist"});
        return;
    }

    const {name, age, course} = req.body;
    if(!name && !age && !course) {
        res.json({success: false, message: "At least one detail required"});
        return;
    }

    for(let i=0; i<students.length; i++) {
        const s = students[i];
        if(s.id == id) {
            name && (s.name = name);
            age && (s.age = age);
            course && (s.course = course);
        }
    }

    const updatedStudent = students.find((s) => s.id == id);

    res.json({success: true, data: updatedStudent});
})

server.delete("/students/:id", (req, res) => {
    const id = Number(req.params.id);
    if(id == NaN || id < 0 || id > students[students.length - 1].id) {
        res.json({success: false, message: "Record does not exist"});
        return;
    }

    students = students.filter(s => s.id != id);

    res.json({success: true, message: "Record deleted successfullly"});
})
server.listen(PORT, ()=>{
    console.log("Server is listening at", PORT);
})
