const { ObjectID } = require("mongodb");
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
  fetchCartItemById: async (id) => {
    const collection = (await Connection).db.collection("cart");

    const item = await collection.findOne({ _id: ObjectID(id) });

    return item;
  },
  deleteCartItemById: (id) => (cart = cart.filter((e) => e.id != id)),
  clearCart: () => (cart = []),
  updateCartItem: async (id, patchCartItem) => {
    const collection = (await Connection).db.collection("cart");
    const updatedItem = (
      await collection.findOneAndUpdate(
        { _id: ObjectID(id) },
        { $set: patchCartItem },
        { returnOriginal: false }
      )
    ).value;

    return updatedItem;
  },
};

module.exports = cartDS;
