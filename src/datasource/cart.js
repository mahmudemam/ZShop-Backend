const { v4: uuidv4 } = require("uuid");
const cart = [];

const cartDS = {
  addToCart: (cartItem) => {
    const id = uuidv4();
    cartItem.id = id;
    cart.push(cartItem);
    return id;
  },
  fetchCartItems: () => cart,
  fetchCartItemById: (id) => cart.find((e) => e.id == id),
};

module.exports = cartDS;
