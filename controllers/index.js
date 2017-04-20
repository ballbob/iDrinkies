var express = require('express')
var router = express.Router()
var path = require('path')

router.use('./pubs', require('./local_pub_router'))

router.get('/',function(req,res){
  console.log("No main page yet.")
})

module.exports = router