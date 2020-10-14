const express = require("express");

const ds = require("../datasource/cart");

const routers = express.Router();

routers.post("/", async (req, res) => {
  const cartItem = req.body;

  const id = await ds.addToCart(cartItem);

  res.status(201).location(`/cart/${id}`).send();
});

routers.get("/", function (req, res) {
  res.status(200).json(ds.fetchCartItems());
});

routers.get("/:id", function (req, res) {
  const cartItem = ds.fetchCartItemById(req.params.id);

  if (cartItem != undefined) {
    res.status(200).json(cartItem);
  } else {
    res.status(404).send();
  }
});

routers.delete("/:id", function (req, res) {
  const itemId = req.params.id;

  ds.deleteCartItemById(itemId);

  res.status(200).send();
});

routers.delete("/", function (req, res) {
  ds.clearCart();

  res.send();
});

routers.patch("/:id", function (req, res) {
  const item = ds.updateCartItem(req.params.id, req.body);

  if (item != undefined) {
    res.json(item);
  } else {
    res.status(404).send();
  }
});

module.exports = routers;
