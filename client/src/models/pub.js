var Pub = function(params){
  this.name = params.name,
  this.phoneNo = params.phoneNo,
  this.address = params.address,
  this.latlng = params.latlng,
  this.openingHours = params.openingHours,
  this.foodServingTimes = params.foodServingTimes,
  this.CCRanking = params.CCRanking,
  this.reviews = []
}

Pub.prototype = {
  addReview: function(review){
    this.reviews.push(review)
  }
}


module.exports = Pub