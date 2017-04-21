var MapWrapper = function ( container , coords , zoom ) {
  this.googlemap = new google.maps.Map( container , { center: coords , zoom: zoom } );
}

MapWrapper.prototype = {

  addMarker: function ( coords ) {
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap,
      animation: google.maps.Animation.DROP
    });
    return marker;
  },

  geolocate: function () {
    navigator.geolocation.getCurrentPosition(function ( position ) {
      var center = {lat: position.coords.latitude , lng: position.coords.longtitude};
      this.googleMap.setCenter( center );
      this.addMarker( center );
    }.bind(this));
  }

}

module.exports = MapWrapper;
