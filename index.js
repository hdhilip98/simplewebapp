const express = require("express");
const app = express();

app.get("/api/hello", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/welcome", (req, res) => {
  res.send("Welcome to the world of docker");
});

app.get("/api/greet/:name", (req, res) => {
  res.send(`Welcome to Docker ${req.params.name}`);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
