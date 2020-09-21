const express = require("express");

const ds = require("../datasource/shops");

const routers = express.Router();

routers.get("/", function (req, res) {
  res.json(ds.fetchShops(req.query.limit));
});

module.exports = routers;
