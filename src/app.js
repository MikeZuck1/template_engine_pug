const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "../views"));

app.get("/", (req, res) => {
  res.status(200).render("home");
});

app.get(["/admin", "/ceo", "/cto"], (req, res) => {
  if (req.url === "/admin" || "/ceo" || "/cto") {
    return res.status(200).render("admin");
  } else {
    return res.status(400).send("bad request.");
  }
});

app.get("/users", (req, res) => {
  console.log("users pages loaded...");
  if (req.url === "/users") {
    return res.status(200).render("users");
  } else {
    return res.status(400).send("bad request.");
  }
});

app.param("userId", (req, res, next, value, name) => {
  const user = []; // empty array
  const getUserFromDatabase = {
    id: value,
    name: "nole",
  };
  req.user = user.push(); // add user from the empty array.
  console.log(getUserFromDatabase);
  next();
});

app.get("/checkout/:userId/:userCompany", (req, res) => {
  res.status(200).send("<h1>disconnected...</h1>");
});

app.use((req, res) => {
  res.status(404).send("page not found");
});

app.listen(8000);
