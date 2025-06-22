const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "../views"));

app.get("/", (req, res) => {
  res.status(200).send("welcome ti the root page.");
});

app.get("/users/new", (req, res) => {
  res.status(200).render("newusers");
});

app.use((req, res) => {
  res.status(404).send("Not Found");
});

app.listen(3000);
