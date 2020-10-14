const express = require("express");

const ordersDS = require("../datasource/orders");
const cartDS = require("../datasource/cart");

const routers = express.Router();

routers.post("/", async (req, res) => {
  const id = await ordersDS.createOrder(req.body);

  await cartDS.clearCart();

  res.status(201).location(`/orders/${id}`).send();
});

module.exports = routers;
