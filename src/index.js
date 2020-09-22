const express = require("express");

const productsRouters = require("./routers/products");
const cartRouters = require("./routers/cart");
const ordersRouters = require("./routers/orders");
const shopsRouters = require("./routers/shops");

const apiServer = express();

apiServer.use(express.json());

apiServer.use("/products", productsRouters);
apiServer.use("/cart", cartRouters);
apiServer.use("/orders", ordersRouters);
apiServer.use("/shops", shopsRouters);

apiServer.get("/", function (req, res) {
  res.send("Hello from Express");
});

apiServer.listen(3000, "0.0.0.0", () => console.log("API Server started"));
