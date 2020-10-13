const MongoClient = require("mongodb").MongoClient;

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.7ml4z.mongodb.net/zshop?retryWrites=true&w=majority`;

const Connection = (async () => {
  const client = await MongoClient.connect(uri);

  const collection = client.db("zshop").collection("products");

  return { client, collection };
})();

module.exports = Connection;
