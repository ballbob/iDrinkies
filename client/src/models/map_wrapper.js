var PubGet = require('./pub_getter.js')

var MapWrapper = function ( container , coords , zoom ) {
  this.googlemap = new google.maps.Map( container , { center: coords , zoom: zoom })
  
  //searchbox - formed on loading. Set out the HTML element for the box
  var boxElement = document.querySelector('#search-box')
  //make the box with your parameters
  this.searchBox = new google.maps.places.SearchBox(boxElement)

  this.searchBox.addListener('places_changed', function(){
    
    var selections = this.searchBox.getPlaces()
    this.search(selections, this.centreToResult, this.googlemap)
  }.bind(this))

  
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
},

  search: function(searchChoices, callback, map){
    var placesFinder = new google.maps.places.PlacesService(this.googlemap)

    var lat = searchChoices[0].geometry.location.lat()
    var lng = searchChoices[0].geometry.location.lng()

    callback(lat, lng, map)
  },

  centreToResult: function(latitude, longitude, map){
    map.setCenter({lat: latitude, lng: longitude})
  },

  pubLocationMarkers: function(){
    pubGetter = new PubGet("http://localhost:3000/api/pubs")
    pubGetter.getData(function(pubs){
      for (i=0; i<pubs.length; i++){
        this.addMarker({
          lat: pubs[i].latlng[0],
          lng: pubs[i].latlng[1],
          })
      }
    }.bind(this))
  }

}

module.exports = MapWrapper;
