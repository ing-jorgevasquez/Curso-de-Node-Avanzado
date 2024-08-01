// const fs = require("fs");
// const EventEmitter = require("events");
import { createWriteStream, readFile } from "fs";
import { EventEmitter } from "events";

const FILE_PATH = "./files/my_file.txt";
const writeStream = createWriteStream(FILE_PATH);

class Emitter extends EventEmitter {}
const myEmitter = new Emitter();

function writeFile() {
  for (var i = 0; i < 5; i++) {
    writeStream.write(`Iteration #${i}\n`);
  }

  writeStream.write(`======= END =======`);
  writeStream.end(); // this line emmits a 'close' event
}

function notifyByEmail() {
  console.log("prepping email message");

  setTimeout(() => {
    myEmitter.emit("emailOK");
  }, 1000);
}

function readDocument() {
  readFile(FILE_PATH, (error, document) => {
    console.log(document.toString());
  });
}

writeFile();

writeStream.on("close", () => {
  notifyByEmail();
});

myEmitter.on("emailOK", () => {
  readDocument();
});
