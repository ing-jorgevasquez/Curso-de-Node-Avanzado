// const promesasNode = require("fs").promises;
// import { promises } from "fs";
// import { promises } from "node:fs";
import promises from "node:fs/promises";

promises
//   .copyFile("./files/original.pdf", "./files/copy.txt")
  .copyFile("./files/original.txt", "./files/copy.txt")
  .then(() => console.log("copy finished"))
  .catch(() => console.log("file cannot be copied"))
  .finally(() => console.log("..."));
