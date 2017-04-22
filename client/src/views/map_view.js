var GeoLocate = require("../models/geolocate.js")
var PlaceMarker = require("../models/place_marker.js")

var MapView = function () {
  this.mainMap
}

MapView.prototype = {

  initialize: function () {
    var mapSection = document.getElementById('map');
    var center = { lat: 0 , lng: 0 }
    this.mainMap = new GeoLocate( mapSection, center, 16 );
    PlaceMarker.addMarker( center );
    this.mainMap.geolocate();
  },

  centerNearMe: function(){
    this.mainMap.geolocate()
  }

}

module.exports = MapView;
