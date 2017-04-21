var express = require('express')
var pubRouter = express.Router()
var PubQuery = require('../db/PubQuery')


pubQuery = new PubQuery('mongodb://localhost:27017/idrinkies')

//pubs index
pubRouter.get('/', function(req,res){
  pubQuery.all(function(documents){
    res.json(documents)
  })
})

//update a pub
pubRouter.put('/:id',function(req,res){
  pubQuery.update( req.params.id, req.body.review,function(documents){
    res.json(documents)
  })
})

module.exports = pubRouter