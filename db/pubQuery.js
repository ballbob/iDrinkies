var MongoClient = require('mongodb').MongoClient
var ObjectId = require('mongodb').ObjectID

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
  },

  update: function(pubId,field,callback){
    MongoClient.connect(this.url,function(err,db){
      if(db){
        var collection = db.collection('pubs')

        collection.updateOne({_id: ObjectID(pubObjectId)}, {$set:  {field}})

        collection.find().toArray(function(err,documents){
          callback(documents)
        })
      }
    })
  }
}

module.exports = PubQuery