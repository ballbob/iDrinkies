var PubLister = require('../views/pub_list_view.js')

var MapWrapper = function ( container , coords , zoom ) {
  this.googlemap = new google.maps.Map( container , { center: coords , zoom: zoom })
  
  //searchbox - formed on loading. Set out the HTML element for the box
  var boxElement = document.querySelector('#search-box')

  //make the box with your parameters
  var customBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(55.939268, -3.210454),
    new google.maps.LatLng(55.953758, -3.179555))

  this.searchBox = new google.maps.places.SearchBox(boxElement, {bounds: customBounds})

  this.searchBox.addListener('places_changed', function(){
    var selections = this.searchBox.getPlaces()
    this.search(selections, this.centreToResult, this.googlemap)
  }.bind(this))
  
}

MapWrapper.prototype = {

  addMarker: function (coords ) {
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googlemap,
      animation: google.maps.Animation.DROP
    });
    return marker;
  },

  addPubMarker: function (pub, coords, distanceCalculator, pubLister ) {
    //create the marker
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googlemap,
      animation: google.maps.Animation.DROP,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 5,
        fillColor: '#66ff33',
        fillOpacity: 1.0
      }
    });
    
    //get current position
    navigator.geolocation.getCurrentPosition(function ( position ) {
        var currentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
      }

      distanceCalculator.calculateDistance(currentLocation, coords, function(distance){
      
      //add the info window. First, define what goes inside the info window div  
        var windowContents = '<div>' + 
        '<h3>' + pub.name + '</h3>' + 
        '<p>Distance from you: ' + distance + '</p>' +
        '<p>' + pub.address + '</p>' +
        '<img src="' + pub.img + '" width="200">' +
        '</div>'

        var pubInfo = new google.maps.InfoWindow({content: windowContents})

        marker.addListener('click', function(){
          
          var allPubDivs = document.querySelectorAll('.pub-div')
          console.log('all', allPubDivs)
          var correctDiv 
          allPubDivs.forEach(function(div){
            if (div.id === 'pub-entry' + pub.id){
              correctDiv = div
            }
          }.bind(this))

          
          if (correctDiv.childNodes.length <= 2){
            pubLister.dropDownInfo(pub,correctDiv)      
          } else {
            pubLister.removeDropDownInfo(correctDiv)
          }
        
        })

        marker.addListener('click',function(){
          pubInfo.open(this.googlemap, marker)
        })
          return marker;
        })

    }.bind(this))

  },

  geolocate: function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function ( position ) {
        var crds = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      this.googlemap.setCenter( crds );
      this.addMarker(crds );
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

  pubLocationMarkers: function(pubs,distanceCalculator,pubLister){
    for (i=0; i<pubs.length; i++){
      //add the markers. the info window is made with them
      var pubMarker = this.addPubMarker(
        pubs[i],
        {
          lat: pubs[i].latlng[0],
          lng: pubs[i].latlng[1],
        }, 
        distanceCalculator,
        pubLister
      )
    }
  }

}

module.exports = MapWrapper;
