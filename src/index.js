const express = require("express");

const productsRouters = require("./routers/products");

const apiServer = express();

apiServer.use("/products", productsRouters);

apiServer.get("/", function (req, res) {
  res.send("Hello from Express");
});

apiServer.listen(3000, () => console.log("API Server started"));
