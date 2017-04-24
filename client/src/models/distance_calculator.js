var DistanceCalculator = function(){

}

DistanceCalculator.prototype = {
  calculateDistance: function(originCoords, destinationCoords){
  
    var destinations = 'destinations=' + destinationCoords.lat + ',' + destinationCoords.lng
    console.log('destinations', destinations)

    var reqUrl = 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=' + originCoords.lat + ',' + originCoords.lng + '&' + destinations + '&key=AIzaSyAMJHPbORbz_vlVN9nNu_wN-jyT02mKnAQ'
    console.log(reqUrl)

    var request = new XMLHttpRequest()
    request.open('GET', reqUrl)
    request.onload = function(){
      console.log(request.status)
      if (request.status === 200){
        var response = request.responseText
        var data = JSON.parse(response)
        var distance = data.rows[0].elements[0].distance.text
        console.log(distance)
      }
    }
    request.send()
  }
}


module.exports = DistanceCalculator