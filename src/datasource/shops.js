const Connection = require(".");

const ds = {
  fetchShops: async (limit) => {
    const collection = (await Connection).db.collection("products");

    const pipeline = [
      {
        $project: {
          _id: 0,
          price: 0,
          discountPrice: 0,
          isFavorite: 0,
        },
      },
      {
        $unwind: "$shops",
      },
      {
        $group: {
          _id: "$shops.id",
          name: {
            $first: "$shops.name",
          },
          image: {
            $first: "$shops.image",
          },
          items: {
            $push: {
              name: "$name",
              image: "$image",
              price: "$shops.price",
              discountPrice: "$shops.discountPrice",
            },
          },
        },
      },
    ];

    if (limit) {
      pipeline.push({ $limit: limit });
    }

    const shops = await collection.aggregate(pipeline).toArray();

    return shops;
  },
};

module.exports = ds;
