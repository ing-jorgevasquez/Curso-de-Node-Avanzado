function getBasicPromise(message) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, 1500);
  });
}

function getPrivateMessages() {
  return getBasicPromise("private messages");
}

function getPhotoGallery() {
  return getBasicPromise("photos");
}

function getLatestTransactions() {
  return getBasicPromise("transactions");
}

console.time("Promise all");
// We can now use top-level await!!
await Promise.all([
  getPrivateMessages(),
  getPhotoGallery(),
  getLatestTransactions(),
]).then((values) => {
  console.log(values);
});
console.timeEnd("Promise all");
