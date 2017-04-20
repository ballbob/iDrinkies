var MongoClient = require('mongodb').MongoClient

var PubQuery = function(url){
  this.url = url
}

PubQuery.prototype = {
  all: function(callback){
    MongoClient.connect(this.url,function(err,db){
      if(db){
        var collection = db.collection('pubs')

        collection.find().toArray(function(err,documents){
          callback(documents)
        })
      }
    })
  }
}

module.exports = PubQuery