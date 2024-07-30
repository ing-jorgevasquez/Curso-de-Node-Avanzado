import { createReadStream, createWriteStream } from "node:fs";

const readStream = createReadStream("./files/source.txt");
const writeStream = createWriteStream("./files/target.txt");

readStream.pipe(writeStream);

readStream.on("end", () => console.log("process finished"));
