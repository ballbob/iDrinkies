var express = require('express')
var pubRouter = express.Router()
var PubQuery = require('../db/PubQuery')

pubRouter.get('/', function(req,res){
  pubQuery.all(function(documents){
    res.json(documents)
  })
})

module.exports = pubRouter