var PlaceMarker = require("./place_marker.js")

var GeoLocate = function ( container , coords , zoom ) {
  this.googlemap = new google.maps.Map( container , { center: coords , zoom: zoom } );
}

GeoLocate.prototype = {

  geolocate: function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function ( position ) {
        var crds = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        var center = {lat: position.coords.latitude , lng: position.coords.longitude};
        this.googlemap.setCenter( crds );
        PlaceMarker.addMarker( crds );
      }.bind(this));
    }
  }

}

module.exports = GeoLocate;
