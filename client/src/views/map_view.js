var MapWrapper = require("../models/map_wrapper.js")

var MapView = function () {

}

MapView.prototype = {

  initialize: function () {

    var mapSection = document.getElementById('map');
    var center = { lat: 55.9533 , lng: -3.1883 };

    var nearMeButton = document.querySelector("#near-me-button");

    var mainMap = new MapWrapper( mapSection, center, 10 );
    mainMap.addMarker(center);
    // mainMap.addClickEvent();

    var findlocation = function () {
      mainMap.geoLocate();
    };

  }

}

module.exports = MapView;
