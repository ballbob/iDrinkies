var MapWrapper = require("../models/map_wrapper.js")

var MapView = function () {
  this.mainMap
  
}

MapView.prototype = {

  initialize: function () {
    var mapSection = document.getElementById('map');
    var center = { lat: 0 , lng: 0 }
    this.mainMap = new MapWrapper( mapSection, center, 16 );
    this.mainMap.addMarker(center);
    this.mainMap.geolocate();
    
    // var nearMeButton = document.querySelector("#near-me-button");
    

    // var findlocation = function () {
    //   mainMap.geoLocate();
    // };
  },

  centerNearMe: function(){
    this.mainMap.geolocate()
  }
  
}

module.exports = MapView;
