

var MapWrapper = function ( container , coords , zoom ) {
  this.googlemap = new google.maps.Map( container , { center: coords , zoom: zoom } );
}

MapWrapper.prototype = {

  addMarker: function ( coords ) {
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googlemap,
      animation: google.maps.Animation.DROP
    });
    return marker;
  },

  geolocate: function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function ( position ) {
        var crds = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      this.googlemap.setCenter( crds );
      this.addMarker( crds );
    }.bind(this));
  }
}

}

module.exports = MapWrapper;
