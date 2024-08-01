// const express = require("express");
import express from "express";
const app = express();
const port = 3000;

app.get("/", (request, response) => {
  response.send("Hello world express.js");
});

app.listen(port, () => {
  console.log(`listening on the port ${port}!`);
});
