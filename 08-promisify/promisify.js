// const fs = require("fs");
// const util = require("util");
import { writeFile } from "fs";
import util from "util";

// fs.writeFile("./files/file/", "12345678", () => {
//   console.log("ok");
// });

// writeFile("./files/file/", "12345678", (error) => {
//   if (error) console.log("error");
//   else console.log("ok");
// });

const writeFilePromisified = util.promisify(writeFile);

writeFilePromisified("./files/file.txt", "12345678")
  .then(() => {
    console.log("ok");
  })
  .catch(() => {
    console.log("error");
  });
