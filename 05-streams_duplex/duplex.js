// const fs = require("fs");
// const { Duplex } = require("stream");
import { createReadStream, createWriteStream } from "node:fs";
import { Duplex } from "node:stream";

const readStream = createReadStream("./files/source.txt");
const writeStream = createWriteStream("./files/target.txt");

const middlewareStream = new Duplex({
  write(data, encode, callback) {
    console.log(data);
    // to see the text instead of the data in raw format, replace the line above for
    // console.log(data.toString())
    callback();
  },
  read(size) {},
});

readStream.pipe(middlewareStream).pipe(writeStream);
