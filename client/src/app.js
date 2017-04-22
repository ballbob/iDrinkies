// Models
var GeoLocate = require("./models/geolocate.js");
var PubGetter = require('./models/pub_getter.js');
var PlaceMrker = require("./models/place_marker.js");

// Views
var MapView = require("./views/map_view.js");
var PubListView = require('./views/pub_list_view.js');

var app = function() {
  var pubGetter = new PubGetter("http://localhost:3000/api/pubs"); // Start an instance of your API-getting object
  var pubListElement = document.querySelector('#pub-list'); // Set up your document element with the DOM to make your view
  var pubLister = new PubListView(pubListElement);
  pubGetter.getData(function(pubs){ // Get your data and render it
    pubLister.render(pubs);
  });

  var nearMeButton = document.querySelector('#near-me-button'); // Get a reference to the 'near me' button
  nearMeButton.addEventListener('click', function(){
    mapView.centerNearMe();
  });

  var mapView = new MapView(); // Get the map and render to screen
  mapView.initialize();

}

window.onload = app;
