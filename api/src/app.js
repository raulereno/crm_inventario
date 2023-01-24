const express = require("express");
const server = express();
const routes = require("./routes/index");
const { Serial, Type } = require("./db");

server.use("/", routes);

server.get("/", (req, res) => {
  Type.create({ type_name: "atm" });
  Type.addModel;
  res.send("Hola");
});

module.exports = server;
