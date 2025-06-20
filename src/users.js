const express = require("express");
const app = express();
const path = require("path");
const users = require("./data/users.json");

app.set("view engine", "pug");

app.set("views", path.join(__dirname, "../views"));

app.get("/", (req, res) => {
  res.status(200).send("welcome to the home page");
});

app.get("/users", (req, res) => {
  res.status(200).render("users", { users });
});

app.use((req, res) => {
  res.status(404).send("Not Found");
});

app.listen(3000);
