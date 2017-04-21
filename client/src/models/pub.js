var Pub = function(params){
  this.name = params.name,
  this.phone = params.phone,
  this.address = params.address,
  this.latlng = params.latlng,
  this.opening_hours = params.opening_hours,
  this.food_serving_times = params.food_serving_times,
  this.cc_ranking = params.cc_ranking,
  this.reviews = params.review || []
  this.special_events = params.special_events || []
  this.img = params.img
}

Pub.prototype = {
  addReview: function(review){
    this.reviews.push(review)
  },

  addSpecialEvent: function(eventInfo){
    this.special_events.push(eventInfo)
  }
}


module.exports = Pub