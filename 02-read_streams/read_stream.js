// const fs = require("fs");
import { createReadStream } from "node:fs";

// const readStream = createReadStream("./files/my_file.txxxxxxt", {
const readStream = createReadStream("./files/my_file.txt", {
  encoding: "utf8",
});

readStream
  .on("open", () => {
    console.log("opening file");
  })
  .on("data", () => {
    console.log("----");
  })
  .on("close", () => {
    console.log("file closed");
  })
  .on("error", () => {
    console.log("error while reading file");
  });
