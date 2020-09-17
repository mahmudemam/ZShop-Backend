const express = require("express");

const apiServer = express();

apiServer.get("/", function (req, res) {
  res.send("Hello from Express");
});

apiServer.listen(3000, () => console.log("API Server started"));
