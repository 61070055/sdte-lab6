const express = require("express");
const app = express();

app.get("/hi", (req, res) => {
  res.send("do not pass!");
});

module.exports = app;
