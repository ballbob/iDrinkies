<<<<<<< HEAD
 var MapWrapper = require("../models/map_wrapper.js")

var MapView = function () {
  this.mainMap

=======
var GeoLocate = require("../models/geolocate.js")
var PlaceMarker = require("../models/place_marker.js")

var MapView = function () {
  this.mapView
>>>>>>> feature/markers
}

MapView.prototype = {

  initialize: function () {
    var mapSection = document.getElementById('map-content');
    var center = { lat: 0 , lng: 0 }
<<<<<<< HEAD
    this.mainMap = new MapWrapper( mapSection, center, 16 );
    this.mainMap.geolocate();
=======
    this.mapView = new GeoLocate( mapSection, center, 16 );
    PlaceMarker.addMarker( center );
    this.mapView.geolocate();
>>>>>>> feature/markers
  },

  centerNearMe: function(){
    this.mapView.geolocate()
  }

}

module.exports = MapView;
