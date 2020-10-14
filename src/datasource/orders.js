const Connection = require(".");

const ds = {
  createOrder: async (order) => {
    const collection = (await Connection).db.collection("orders");
    const id = (await collection.insertOne(order)).insertedId;

    return id;
  },
};

module.exports = ds;
