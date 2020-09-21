const { v4: uuidv4 } = require("uuid");

const orders = [];

const ds = {
  createOrder: (order) => {
    order.id = uuidv4();
    orders.push(order);
    return order.id;
  },
};

module.exports = ds;
