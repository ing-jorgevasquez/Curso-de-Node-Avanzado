import { createWriteStream } from "node:fs";
const writeStream = createWriteStream("file.txt");

for (let i = 0; i <= 1e6; i++) {
  writeStream.write(
    "This is my version - Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.\n"
  );
}

writeStream.end();
