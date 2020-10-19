const express = require("express");

const ds = require("../datasource/shops");

const routers = express.Router();

routers.get("/", async (req, res) => {
  const shops = await ds.fetchShops(parseInt(req.query.limit));
  res.json(shops);
});

module.exports = routers;
