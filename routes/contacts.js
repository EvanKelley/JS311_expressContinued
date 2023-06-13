const express = require('express')
const router = express.Router()

const contacts = require("./data/contacts");

router.get("/contacts", function (req, res){
  res.json(contacts)
})

module.exports = router