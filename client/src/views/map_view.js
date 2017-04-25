 var MapWrapper = require("../models/map_wrapper.js")

var MapView = function () {
  this.mainMap

}

MapView.prototype = {

  initialize: function () {
    var mapSection = document.getElementById('map-content');
    var center = { lat: 0 , lng: 0 }
    this.mainMap = new MapWrapper( mapSection, center, 16 );
    this.mainMap.geolocate();
  },

  centerNearMe: function(){
    this.mainMap.geolocate()
  }

}

module.exports = MapView;
