// const fs = require("fs");
// const util = require("util");
// import util from "util";
import { writeFile } from "fs";
import { promisify } from "util";

// original version
// fs.writeFile("./files/file/", "12345678", () => {
//   console.log("ok");
// });

// my proposed solution using callbacks
// writeFile("./files/file/", "12345678", (error) => {
//   if (error) console.log("error");
//   else console.log("ok");
// });

// const writeFilePromisified = util.promisify(writeFile);
const writeFilePromisified = promisify(writeFile);

writeFilePromisified("./files/file.txt", "12345678")
  .then(() => {
    console.log("ok");
  })
  .catch(() => {
    console.log("error");
  });
