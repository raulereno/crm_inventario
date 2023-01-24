const express = require("express");
const server = express();
const { Serial } = require("./db");

server.get("/", (req, res) => {
  res.send("Hola");
});

module.exports = server;
