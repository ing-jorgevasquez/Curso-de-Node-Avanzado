// const fs = require("fs");
// const { Transform } = require("stream");
import { createReadStream, createWriteStream } from "node:fs";
import { Transform } from "node:stream";

const readStream = createReadStream("./files/source.txt");
const writeStream = createWriteStream("./files/target.txt");

readStream.setEncoding("utf8");

const transformStream = new Transform({
  writableObjectMode: true,
  transform(data, encoding, callback) {
    this.push(data.toString().toUpperCase());
    callback();
  },
  final(callback) {
    callback();
  },
});

readStream.pipe(transformStream).pipe(writeStream);
