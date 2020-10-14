const { ObjectID } = require("mongodb");

const Connection = require("./index");

const productsDS = {
  fetchProducts: async () => {
    const collection = (await Connection).db.collection("products");
    const data = await collection
      .find(
        {},
        {
          projection: {
            shops: 0,
          },
        }
      )
      .toArray();
    return data;
  },
  fetchProductById: async (id) => {
    const collection = (await Connection).db.collection("products");
    const data = await collection.findOne({ _id: ObjectID(id) });

    return data;
  },
};

module.exports = productsDS;
