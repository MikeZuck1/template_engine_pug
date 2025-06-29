const express = require("express");
const app = express();
const path = require("path");

let users = [];

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "../views"));

app.get("/", (req, res) => {
  return res.status(200).render("home");
});

app.get("/users/new", (req, res) => {
  return res.status(200).render("newusers");
});

app.post("/users", (req, res) => {
  const { name, email, age } = req.body;
  users.push({ id: Date.now(), name, email, age });
  return res.status(201).redirect("/users");
});

app.get("/users", (req, res) => {
  return res.status(200).render("users", { users });
});

app.get(['/foo', '/toto', '/tata'], (req, res) => {
  res.send("<h1>path is working...</h1>");
});

app.use((req, res) => {
  return res.status(404).send("not found");
});

app.listen(3000);
