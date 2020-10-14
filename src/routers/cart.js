const express = require("express");

const ds = require("../datasource/cart");

const routers = express.Router();

routers.post("/", async (req, res) => {
  const cartItem = req.body;

  const id = await ds.addToCart(cartItem);

  res.status(201).location(`/cart/${id}`).send();
});

routers.get("/", async (req, res) => {
  const cart = await ds.fetchCartItems();
  res.status(200).json(cart);
});

routers.get("/:id", async (req, res) => {
  const cartItem = await ds.fetchCartItemById(req.params.id);

  if (cartItem != undefined) {
    res.status(200).json(cartItem);
  } else {
    res.status(404).send();
  }
});

routers.delete("/:id", async (req, res) => {
  const itemId = req.params.id;

  await ds.deleteCartItemById(itemId);

  res.status(200).send();
});

routers.delete("/", async (req, res) => {
  await ds.clearCart();

  res.send();
});

routers.patch("/:id", async (req, res) => {
  const item = await ds.updateCartItem(req.params.id, req.body);

  if (item != undefined) {
    res.json(item);
  } else {
    res.status(404).send();
  }
});

module.exports = routers;
