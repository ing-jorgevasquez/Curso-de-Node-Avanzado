// const https = require('https');
import https from "https";

const req = https.get(
  "https://en.wikipedia.org/w/api.php?action=help&format=json",
  (res) => {
    res.on("data", (data) => {
    //   console.log("... recieving data", data.toString());
      console.log("... recieving data");
    });

    res.on("end", (data) => {
      console.log('end');
    });
  }
);

req.on("socket", (data) => {
  console.log("starting http");
});

req.on("error", (data) => {
  console.log("error");
});
