const express = require("express");

const ds = require("../datasource/cart");

const routers = express.Router();

routers.post("/", function (req, res) {
  const cartItem = req.body;

  console.log(cartItem);

  const id = ds.addToCart(cartItem);

  res.status(201).location(`/cart/${id}`).send();
});

routers.get("/", function (req, res) {
  res.status(200).json(ds.fetchCartItems());
});

module.exports = routers;
