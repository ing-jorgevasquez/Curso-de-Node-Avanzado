// const fs = require("fs");
// var http = require("http");
import { createReadStream, readFileSync } from "fs";
import http from "http";

function readFile() {
  // readFileSync("./files/file.txt", "utf8");
  const readStream = createReadStream("./files/file.txt", {
    encoding: "utf-8",
  });
}

http
  .createServer(function (req, res) {
    // this is blocking the event loop
    for (let a = 0; a < 5000; a++) {
      readFile();
    }
    res.write("Hello world!");
    res.end();
  })
  .listen(8080);
