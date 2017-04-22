

var MapWrapper = function ( container , coords , zoom ) {
  this.googlemap = new google.maps.Map( container , { center: coords , zoom: zoom })
  
  //searchbox - formed on loading. Set out the HTML element for the box
  var boxElement = document.querySelector('#search-box')
  //make the box with your parameters
  this.searchBox = new google.maps.places.SearchBox(boxElement)

  //search button
  this.searchButton = document.querySelector('#submit-button')
  this.searchButton.onclick = this.search(this.searchBox.value)
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

  search: function(searchTerm){
    var userInput = searchTerm
    var geocoder = new google.maps.Geocoder()

    //start up geocoder, feeding it the search term
    geocoder.geocode({address: searchTerm}, function(results,status){
      if(status == google.maps.GeocoderStatus.OK){
        //reset the center of the map to the first search result
        this.googlemap.setCenter(results[0].geometry.location)
      }else{
        console.log(google.maps.GeocoderStatus)
        console.log('Search term produced no results')
      }
    })
  }

}

module.exports = MapWrapper;
