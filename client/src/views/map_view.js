var GeoLocate = require("../models/geolocate.js")
var PlaceMarker = require("../models/place_marker.js")

var MapView = function () {
  this.mapView
}

MapView.prototype = {

  initialize: function () {
    var mapSection = document.getElementById('map');
    var center = { lat: 0 , lng: 0 }
    this.mapView = new GeoLocate( mapSection, center, 16 );
    PlaceMarker.addMarker( center );
    this.mapView.geolocate();
  },

  centerNearMe: function(){
    this.mapView.geolocate()
  }

}

module.exports = MapView;
