var PubLister = require('../views/pub_list_view.js')

var MapWrapper = function ( container , coords , zoom ) {

  //make your array for current markers
  this.markers = []

  //make your map with the coordinates passed in
  this.googlemap = new google.maps.Map( container , { center: coords , zoom: zoom })

  //searchbox - formed on loading. Set out the HTML element for the box
  var boxElement = document.querySelector('#search-box')

  //make the box with your parameters
  var customBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(55.939268, -3.210454),
    new google.maps.LatLng(55.953758, -3.179555))

  //make the search box
  this.searchBox = new google.maps.places.SearchBox(boxElement, {bounds: customBounds})

  //add a listener to the 'places' property of the search box changing. This negates the need for a search button
  this.searchBox.addListener('places_changed', function(){
    var selections = this.searchBox.getPlaces()
    this.search(selections, this.centreToResult, this.googlemap)
  }.bind(this))

}

MapWrapper.prototype = {

//////MARKERS

//the 'you are here' marker
  addMarker: function (coords) {
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googlemap,
      animation: google.maps.Animation.DROP
    });
    this.markers.push(marker)
    return marker;
  },

  //create an empty pub marker to be filled in in the addPubMarker function
  getMarker: function(coords){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googlemap,
      animation: google.maps.Animation.DROP,
      //customise the icon for the pub marker
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 5,
        fillColor: '#66ff33',
        fillOpacity: 1.0
      }
    });
    return marker
  },

//the 'pub' markers
  addPubMarker: function (pub, coords, distanceCalculator, pubLister ) {
    //create the marker
    var marker = this.getMarker(coords)

    //get current position and perform the next few tasks with it, so you have access to the distance value
    navigator.geolocation.getCurrentPosition(function ( position ) {
      var currentLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }

      //make your distance calculator
      distanceCalculator.calculateDistance(currentLocation, coords, function(distance){

      //populate the info window for the pub. First, define what goes inside the info window div
      var windowContents = '<div>' +
      '<h3>' + pub.name + '</h3>' +
      '<p>Distance from you: ' + distance + '</p>' +
      '<p>' + pub.address + '</p>' +
      '<img src="' + pub.img + '" width="200">' +
      '</div>'

      //create the pub info window
      var pubInfo = new google.maps.InfoWindow({content: windowContents})

      //add the listener for the pub info window's creation to the pub's marker
      marker.addListener('click', function(){
        var allPubDivs = document.querySelectorAll('.pub-div')
        var correctDiv

        //set the div for each pubs
        allPubDivs.forEach(function(div){
          //first check that you've got the right pub
          if (div.id === 'pub-entry' + pub.id){
            correctDiv = div
          }
        }.bind(this))

        //then, if the marker is clicked, activate that pub's drop-down
        if (correctDiv.childNodes.length <= 2){
          pubLister.dropDownInfo(pub,correctDiv)
        } else {
          console.log('collapsing')
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

//finally, the function to call addPubMarker to each pub
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
  },


////// SEARCH

  geolocate: function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function ( position ) {
        var crds = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.googlemap.setCenter( crds );
        this.addMarker(crds);
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

}

module.exports = MapWrapper;
