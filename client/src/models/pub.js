var Pub = function(params){
  this.name = params.name,
  this.phoneNo = params.phoneNo,
  this.address = params.address,
  this.latlng = params.latlng,
  this.openingHours = params.openingHours,
  this.foodServingTimes = params.foodServingTimes,
  this.CCRanking = params.CCRanking,
  this.reviews = []
  this.specialEvents = []
  this.img = params.img
}

Pub.prototype = {
  addReview: function(review){
    this.reviews.push(review)
  },

  addSpecialEvent: function(eventInfo){
    this.specialEvents.push(eventInfo)
  }
}


module.exports = Pub