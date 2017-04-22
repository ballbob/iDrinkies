

var MapWrapper = function ( container , coords , zoom ) {
  this.googlemap = new google.maps.Map( container , { center: coords , zoom: zoom })
  
  //searchbox - formed on loading. Set out the HTML element for the box
  var boxElement = document.querySelector('#search-box')
  //make the box with your parameters
  this.searchBox = new google.maps.places.SearchBox(boxElement)

  //search button
  this.searchButton = document.querySelector('#submit-button')
  this.searchButton.addEventListener = ('click',this.search(this.searchBox.value,this.centreToResult))
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

  search: function(searchTerm, callback){
    var placesFinder = new google.maps.places.PlacesService(this.googlemap)

    var finderInput = {
      query: locations[searchTerm]
    }

    placesFinder.textSearch(finderInput,callback)

  },

  centreToResult: function(results, status){
    if (status == google.maps.places.PlacesServiceStatus.OK){
      this.googlemap.setcenter(results[0].location)
    }
  }

}

module.exports = MapWrapper;
