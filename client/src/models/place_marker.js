var PlaceMarker = function ( coords ) {
  this.coords = coords;
  this.googlemap = new google.maps.Map( container , { center: coords , zoom: zoom } );
}

PlaceMarker.prototype = {

  addMarker: function ( coords ) {
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googlemap,
      animation: google.maps.Animation.DROP
    });
    return marker;
  }

}

module.exports = PlaceMarker;
