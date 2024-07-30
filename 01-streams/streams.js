import { createReadStream, readFileSync } from 'node:fs';

console.time("tiempo de respuesta");

// for(let i=0; i<= 100; i++) {
//   readFileSync('file.txt', 'utf8');
// }

for (let i = 0; i <= 100; i++) {
  const readStream = createReadStream("file.txt", {
    encoding: "utf-8",
  });
}

console.timeEnd("tiempo de respuesta");
