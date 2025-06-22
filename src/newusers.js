const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).render("");
});

app.use((req, res) => {
  res.status(404).send("Not Found");
});

app.listen(3000);