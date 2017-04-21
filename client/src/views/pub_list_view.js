var PubListView = function(listElement){
  this.listElement = listElement
}

PubListView.prototype = {
  render: function(pubs){
    for (i=0; i<pubs.length; i++){
      var pubDiv = document.createElement('div')

      this.createImgLink(pubDiv, pubs[i])
      this.createNameParagraph(pubDiv, pubs[i])
      this.createAddressParagraph(pubDiv, pubs[i])
      this.createOpeningHoursList(pubDiv, pubs[i])

      

      // var pubFoodHrs = document.createElement('p')
      // pubFoodHrs.innerText = "Food served from: " + pubs[i]
      // food_serving_hours
      // pubDiv.appendChild(pubFoodHrs)

      var pubReview = document.createElement('p')
      pubReview.innerText = "Review: " + pubs[i].review
      pubDiv.appendChild(pubReview)

      this.listElement.appendChild(pubDiv)
    }
  },

  createImgLink: function(div, pub){
    if (pub.img){
      var pubImg = document.createElement('a')
      pubImg.href = pub.img
      pubImg.innerText = "Have a look at " + pub.name
      div.appendChild(pubImg)
    }
  },

  createNameParagraph: function(div, pub){
    var pubName = document.createElement('p')
    pubName.innerText = "Pub: " + pub.name
    div.appendChild(pubName)
  },

  createAddressParagraph: function(div, pub){
    if (pub.address){
      var pubAddress = document.createElement('p')
      pubAddress.innerText = "Address: " +pub.address
      div.appendChild(pubAddress)
    }
  },

  createOpeningHoursList: function(div, pub){
    if (pub.opening_hours){
      var pubOpeningHrs = document.createElement('p')
      pubOpeningHrs.innerText = "Opening hours:"
      var openingHoursList = document.createElement('ul')
      this.appendDailyOpeningHours(openingHoursList, pub.opening_hours)
      div.appendChild(pubOpeningHrs)
      div.appendChild(openingHoursList)
    }
  },

  appendDailyOpeningHours: function(list, openingHours){
    for (var day in openingHours){
      var li = document.createElement('li')
      var dayString = this.titleize(day)
      li.innerText = dayString + ": " + openingHours[day]
      list.appendChild(li)
    }
  },

  titleize: function(string){
    var arrayOfChars = string.split("")
    arrayOfChars[0] = arrayOfChars[0].toUpperCase()
    var newString = ""
    for (var char of arrayOfChars){
      newString += char
    }
    return newString
  }
}

module.exports = PubListView
