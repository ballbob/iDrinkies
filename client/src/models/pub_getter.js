var Pub = require('./pub.js')

var PubGetter = function(url){
  this.url = url
  this.pubs = []
}

PubGetter.prototype = {

  getData: function(callback){
    var request = new XMLHttpRequest() //start your XMLHttpRequest
    request.open('GET',this.url) //get from the URL specified in the constructor
    request.onload = function(){ //once that data has been got, put the data into the pubs array
      if(request.status === 200){
        var jsonString = request.responseText //our pubs are listed in the responseText for the request. So, 'de-stringify' it to get the javascript object back.
        var pubsInfo = JSON.parse(jsonString)
        this.convertToPubObjects(pubsInfo)
        callback(this.pubs)
      }
    }.bind(this)
    request.send()
  },

  convertToPubObjects: function(pubsFromAPI){
    pubsFromAPI.forEach(function(pubInfo){
      var pub = new Pub(pubInfo)
      pub.id = pubInfo._id
      this.pubs.push(pub)
    }.bind(this))
  }
  
}

module.exports = PubGetter
