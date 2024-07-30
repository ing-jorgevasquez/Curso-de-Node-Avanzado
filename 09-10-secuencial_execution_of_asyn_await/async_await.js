function randomNumber() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.floor(Math.random() * 100));
    }, 2000);
  });
}

async function result() {
  console.log("result function called");

  // using async/await syntax, we can force secuencial execution of API calls
  const random = await randomNumber();

  console.log(`Result: ${random}`);
}

result();
