var MongoClient = require('mongodb').MongoClient
var ObjectID = require('mongodb').ObjectID

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

  update: function(pubID,newInfo,callback){
    MongoClient.connect(this.url,function(err,db){
      if(db){
      console.log(newInfo)
        var collection = db.collection('pubs')

        collection.updateOne({_id: ObjectID(pubID)}, {$set: {review: newInfo} })

        collection.find().toArray(function(err,documents){
          callback(documents)
        })
      }
    })
  }
}

module.exports = PubQuery