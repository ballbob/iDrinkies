var Pub = require('./pub.js')

var PubGet = function(url){
  this.url = url
  this.pubs = []
}

PubGet.prototype = {
  getData: function(callback){
    //start your XMLHttpRequest
    var request = new XMLHttpRequest()
    //get from the URL specified in the constructor
    request.open('GET',this.url)
    //once that data has been got, put the data into the pubs array
    request.onload = function(){
      if(request.status === 200){
        //our pubs are listed in the responseText for the request. So, 'de-stringify' it to get the javascript object back.
        var jsonString = request.responseText
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

module.exports = PubGet
