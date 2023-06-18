const express = require('express')
const router = express.Router()

const products = require("./data/products");

router.get("/products", function (req, res){
  res.json(products)
})

module.exports = router