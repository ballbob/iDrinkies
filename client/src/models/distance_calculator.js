var DistanceCalculator = function(){
}

DistanceCalculator.prototype = {
  calculateDistance: function(originCoords, destinationCoords, callback){
    var service = new google.maps.DistanceMatrixService()

    service.getDistanceMatrix({
      origins: [new google.maps.LatLng(originCoords.lat, originCoords.lng)],
      destinations: [new google.maps.LatLng(destinationCoords.lat, destinationCoords.lng)],
      travelMode: 'WALKING'}, function(response){
        var origins = response.originAddresses;
        var destinations = response.destinationAddresses;
        var distance = response.rows[0].elements[0].distance.text
        

        //callback is the add marker info window function - this provides distance to it
        callback(distance)
        
        
    })
  }
}


module.exports = DistanceCalculator