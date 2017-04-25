<<<<<<< HEAD
var PubGet = require('./models/pub_getter.js')
var PubListView = require('./views/pub_list_view.js')
var MapWrapper = require("./models/map_wrapper.js")
var DistanceCalculator = require("./models/distance_calculator.js")
var MapView = require("./views/map_view.js")
=======
// Models
var GeoLocate = require("./models/geolocate.js");
var PubGetter = require('./models/pub_getter.js');
var PlaceMrker = require("./models/place_marker.js");
>>>>>>> feature/markers

// Views
var MapView = require("./views/map_view.js");
var PubListView = require('./views/pub_list_view.js');

<<<<<<< HEAD
  //set up your document element with the DOM to make your view
  var pubListElement = document.querySelector('#list-content')
  var pubLister = new PubListView(pubListElement)

  //get the map and render to screen
  var mapView = new MapView()
  mapView.initialize()

  var distanceCalculator = new DistanceCalculator()

  //get your data and render it
  pubGetter.getData(function(pubs){
    pubLister.render(pubs)
    mapView.mainMap.pubLocationMarkers(pubs,distanceCalculator,pubLister)
  })

  //get a reference to the 'near me' button
<<<<<<< HEAD
  var nearMeButton = document.querySelector('#map-button')
=======
  var nearMeButton = document.querySelector('#near-me-button')

>>>>>>> develop
=======
var app = function() {
  var pubGetter = new PubGetter("http://localhost:3000/api/pubs"); // Start an instance of your API-getting object
  var pubListElement = document.querySelector('#pub-list'); // Set up your document element with the DOM to make your view
  var pubLister = new PubListView(pubListElement);
  pubGetter.getData(function(pubs){ // Get your data and render it
    pubLister.render(pubs);
  });

  var nearMeButton = document.querySelector('#near-me-button'); // Get a reference to the 'near me' button
>>>>>>> feature/markers
  nearMeButton.addEventListener('click', function(){
    mapView.centerNearMe();
  });

  var mapView = new MapView(); // Get the map and render to screen
  mapView.initialize();


}

window.onload = app;
