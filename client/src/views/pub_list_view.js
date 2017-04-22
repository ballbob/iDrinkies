var PubListView = function(listElement){
  this.listElement = listElement
}

PubListView.prototype = {
  render: function(pubs){
    for (i=0; i<pubs.length; i++){
      var pubDiv = document.createElement('div')

      
      this.createNameParagraph(pubDiv, pubs[i])
      // var id = '#' + pubs[i].id
      // var dropDown = document.querySelector(id)
    

      // this.createImgLink(pubDiv, pubs[i])
      // this.createAddressParagraph(pubDiv, pubs[i])
      // this.createOpeningHoursList(pubDiv, pubs[i])
      // this.createReviewList(pubDiv, pubs[i])
     
      this.listElement.appendChild(pubDiv)
    }
  },

  createReviewList: function(div, pub){
    if (pub.reviews.length !== 0){
      var reviewSectionTitle = document.createElement('p')
      reviewSectionTitle.innerText = 'Reviews:'
      div.appendChild(reviewSectionTitle)
      var reviewList = document.createElement('ul')
      for (var review of pub.reviews){
        var li = document.createElement('li')
        li.innerText = review
        reviewList.appendChild(li)
      }
      div.appendChild(reviewList)
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
    var headingDiv = document.createElement('div')
    headingDiv.style.display = 'flex'
    headingDiv.style.flexDirection = 'row'
    headingDiv.classList.add('pub-name')
    var pubName = document.createElement('h4')
    pubName.innerText = pub.name
    pubName.style.margin = '5px'
    var dropDownArrow = document.createElement('img')
    dropDownArrow.id = pub.id
    console.log('drop down id', dropDownArrow.id)

    dropDownArrow.src = 'dropdown_arrow.png'
    dropDownArrow.style.backgroundColor = 'white'
    dropDownArrow.style.height = '25px'
    dropDownArrow.addEventListener('click', function(){
      this.createImgLink(div, pub)
      this.createAddressParagraph(div, pub)
      this.createOpeningHoursList(div, pub)
      this.createReviewList(div, pub)
    }.bind(this))
    headingDiv.appendChild(pubName)
    headingDiv.appendChild(dropDownArrow)

    div.appendChild(headingDiv)
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
