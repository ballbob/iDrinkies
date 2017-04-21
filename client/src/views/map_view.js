var MapWrapper = require("../models/map_wrapper.js")

var MapView = function () {

}

MapView.prototype = {

  initialize: function () {

    var center = mainMap.geoLocate();
    var mapSection = document.getElementById('map');
    var nearMeButton = document.querySelector("#near-me-button");

    var mainMap = new MapWrapper(mapSection, center, 10);

    mainMap.addMarker(center);

    var findlocation = function () {
      mainMap.geoLocate();
    };

  }

}

module.exports = MapView;
