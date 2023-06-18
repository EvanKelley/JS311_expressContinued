const express = require('express')
const router = require('./contacts')

const vehicles = require("./data/vehicles");

router.get("/vehicles", function (req, res){
  res.json(vehicles)
})

module.exports = router