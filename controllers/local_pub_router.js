var express = require('express')
var pubRouter = express.Router()

pubRouter.get('/', function(req,res){
  pubQuery.all(function(documents){
    res.json(documents)
  })
})

module.exports = pubRouter