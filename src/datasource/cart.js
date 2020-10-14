const Connection = require(".");
var cart = [];

const cartDS = {
  addToCart: async (cartItem) => {
    const collection = (await Connection).db.collection("cart");
    const id = await (await collection.insertOne(cartItem)).insertedId;

    return id;
  },
  fetchCartItems: async () => {
    const collection = (await Connection).db.collection("cart");

    const cart = await collection.find({}).toArray();

    return cart;
  },
  fetchCartItemById: (id) => cart.find((e) => e.id == id),
  deleteCartItemById: (id) => (cart = cart.filter((e) => e.id != id)),
  clearCart: () => (cart = []),
  updateCartItem: (id, patchCartItem) => {
    const existingItem = cart.find((e) => e.id == id);

    if (existingItem != undefined) {
      const itemIdx = cart.findIndex((e) => e.id == id);
      const newItem = { ...existingItem, ...patchCartItem };
      cart[itemIdx] = newItem;
      return newItem;
    }

    return undefined;
  },
};

module.exports = cartDS;
