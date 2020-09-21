const { v4: uuidv4 } = require("uuid");
var cart = [];

const cartDS = {
  addToCart: (cartItem) => {
    const id = uuidv4();
    cartItem.id = id;
    cart.push(cartItem);
    return id;
  },
  fetchCartItems: () => cart,
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
