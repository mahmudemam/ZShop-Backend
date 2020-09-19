const { v4: uuidv4 } = require("uuid");
const cart = [];

const cartDS = {
  addToCart: (cartItem) => {
    cart.push(cartItem);
    return uuidv4();
  },
  fetchCartItems: () => cart,
};

module.exports = cartDS;
