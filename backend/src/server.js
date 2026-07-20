const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const fs = require("fs/promises");
const path = require("path");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

const COURSES_FILE = path.join(__dirname, "../data/courses.json");
const USERS_FILE = path.join(__dirname, "../data/users.json");

app.get("/api/courses", async (req, res) => {
  const result = await fs.readFile(COURSES_FILE, "utf-8");
  const courses = JSON.parse(result);

  res.status(201).json({ success: true, data: courses });
});

app.get("/api/my-courses", (req, res)=> {

});

app.post("/api/signup", async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required.",
    });
  }

  let users = [];

  const data = await fs.readFile(USERS_FILE, "utf-8");
  users = JSON.parse(data);

  const existingUser = users.find(
    (user) => user.email.toLowerCase() === email.toLowerCase(),
  );

  if (existingUser) {
    return res.status(409).json({
      success: false,
      message: "Email already registered.",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: Date.now().toString(),
    name,
    email,
    password: hashedPassword,
  };

  users.push(newUser);

  await fs.writeFile(USERS_FILE, JSON.stringify(users));

  const { password: _, ...user } = newUser;

  res.status(201).json({
    success: true,
    message: "Signup successful.",
    user,
  });
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required.",
    });
  }

  const data = await fs.readFile(USERS_FILE, "utf-8");
  const users = JSON.parse(data);

  const user = users.find(
    (user) => user.email.toLowerCase() === email.toLowerCase(),
  );

  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Invalid email or password.",
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(401).json({
      success: false,
      message: "Invalid email or password.",
    });
  }

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" },
  );

  const { password: _, ...userWithoutPassword } = user;

  res.status(200).json({
    success: true,
    message: "Login successful.",
    token,
    user: userWithoutPassword,
  });
});

app.listen(PORT, () => {
  console.log("Server is listening at", PORT);
});
