const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "pug");

app.set("views", path.join(__dirname, "../views"));

app.get("/", (req, res) => {
  res.status(200).render("home");
});

app.use((req, res) => {
  res.status(404).send("page not found");
});

app.listen(8000);
