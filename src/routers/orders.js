const express = require("express");

const ordersDS = require("../datasource/orders");
const cartDS = require("../datasource/cart");

const routers = express.Router();

routers.post("/", function (req, res) {
  const id = ordersDS.createOrder(req.body);

  cartDS.clearCart();

  res.status(201).location(`/orders/${id}`).send();
});

module.exports = routers;
