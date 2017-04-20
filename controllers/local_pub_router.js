var express = require('express')
var pubRouter = express.Router()
var PubQuery = require('../db/PubQuery')

pubQuery = new PubQuery('mongodb://localhost:27017/idrinkies')

pubRouter.get('/', function(req,res){
  pubQuery.all(function(documents){
    res.json(documents)
  })
})

module.exports = pubRouter