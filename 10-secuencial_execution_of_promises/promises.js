function getBasicPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1500);
  });
}

function login() {
  return getBasicPromise();
}

function validateUserData() {
  return getBasicPromise();
}

login()
  .then(() => {
    console.log("user authenticated");
    return validateUserData();
  })
  .then(() => {
    console.log("user data is OK");
  })
  .catch(() => {
    console.log("error");
  });
