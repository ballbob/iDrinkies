var PubListView = function(listElement){
  this.listElement = listElement
}

PubListView.prototype = {
  render: function(pubs){
    for (i=0; i<pubs.length; i++){
      var pubDiv = document.createElement('div')

      var pubImg = document.createElement('a')
      pubImg.href = pubs[i].img
      pubImg.innerText = "Have a look at " + pubs[i].name
      pubDiv.appendChild(pubImg)

      var pubName = document.createElement('p')
      pubName.innerText = "Pub: " + pubs[i].name
      pubDiv.appendChild(pubName)

      var pubAddress = document.createElement('p')
      pubAddress.innerText = "Address: " +pubs[i].address
      pubDiv.appendChild(pubAddress)

      var pubOpeningHrs = document.createElement('p')
      pubOpeningHrs.innerText = "Opening hours: " + pubs[i].opening_hours
      pubDiv.appendChild(pubOpeningHrs)

      // var pubFoodHrs = document.createElement('p')
      // pubFoodHrs.innerText = "Food served from: " + pubs[i]
      // food_serving_hours
      // pubDiv.appendChild(pubFoodHrs)

      var pubReview = document.createElement('p')
      pubReview.innerText = "Review: " + pubs[i].review
      pubDiv.appendChild(pubReview)

      this.listElement.appendChild(pubDiv)
    }
  }
}

module.exports = PubListView
