var MapWrapper = require("../models/map_wrapper.js")

var MapView = function () {

}

MapView.prototype = {

  initialize: function () {
    
    var mapSection = document.getElementById('map');
    var center = { lat: 55.9533 , lng: -3.1833 }
    var nearMeButton = document.querySelector("#near-me-button");
    var mainMap = new MapWrapper( mapSection, center, 16 );
    mainMap.addMarker(center);
    mainMap.geolocate();

    var findlocation = function () {
      mainMap.geoLocate();
    };

  }

}

module.exports = MapView;
