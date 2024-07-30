// const fs = require("fs");
import { createWriteStream, writeFile } from "node:fs";

var content = "1234567890";
var iteraciones = 15;

const writeStream = createWriteStream("./files/my_file.txt");
for (var i = 0; i < iteraciones; i++) {
  content += content;
  writeStream.write(content, (_) => console.log("..."));
}

writeFile("./files/my_file.txt", content, () => {
  console.log("direct writing finished");
});

// const writeStream = createWriteStream("./files/my_file.txt");
// writeStream.write(content, (_) => console.log("..."));
