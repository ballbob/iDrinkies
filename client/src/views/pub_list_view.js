//CREATED WITH A SECTION TO APPEND ANY PUBLIST INFO TO
var PubListView = function(listElement){
  this.listElement = listElement
}

PubListView.prototype = {
  //CALLED AFTER PUB DATA RECEIVED - RENDERS LIST OF PUBS TO SCREEN
  render: function(pubs){
    for (var i=0; i<pubs.length; i++){
      var pubDiv = document.createElement('div')
      pubDiv.classList.add('pub-div')
      pubDiv.id = 'pub-entry' + pubs[i].id
      this.createNameParagraph(pubDiv, pubs[i])
      this.listElement.appendChild(pubDiv)
    }
  },

  //CALLED FROM WITHIN RENDER FUNCTION
  createNameParagraph: function(div, pub){
    //gets a new div element with the 'pub-name' class and an id unique to that pub
    var headingDiv = this.getPubHeader(pub)
    //gets an h4 element with the pub name  
    var pubName = this.getPubNameTitle(pub)
    //gets an arrow image element
    var dropDownArrow = this.getDropDownArrow(pub)

    //adds an event listener to the arrow, which expands and contracts the pub details when clicked
    dropDownArrow.addEventListener('click', function(){
      if (div.childNodes.length <= 2){
        this.dropDownInfo(pub,div)      
      } else {
        this.removeDropDownInfo(div)
        }
      }.bind(this))

    //appends the created elements to the heading div, and attaches it to the 'pub-entry'
    headingDiv.appendChild(dropDownArrow)
    headingDiv.appendChild(pubName)
    div.appendChild(headingDiv)
  },

  //CREATES A NEW DIV THAT WILL HOLD THE HEADER AND THE DROPDOWN ARROW
  getPubHeader: function(pub){
    var headingDiv = document.createElement('div')
    headingDiv.classList.add('pub-name')
    headingDiv.id = 'pub' + pub.id
    return headingDiv
  },

  //CREATES A HEADING ELEMENT CONTAINING PUB NAME AND RETURNS IT
  getPubNameTitle: function(pub){
    var pubName = document.createElement('h4')
    pubName.innerText = pub.name
    pubName.style.margin = '5px'
    return pubName
  },

  //CREATES AN IMAGE WITH THE ARROW ICON AND RETURNS IT
  getDropDownArrow: function(pub){
    var dropDownArrow = document.createElement('img')
    dropDownArrow.id = pub.id
    dropDownArrow.classList.add('dropdownarrow')
    dropDownArrow.src = 'dropdown_arrow.png'
    dropDownArrow.style.backgroundColor = 'white'
    dropDownArrow.style.height = '20px'
    dropDownArrow.style.width = '20px'
    return dropDownArrow
  },

  //CALLED WHEN A MARKER OR DROPDOWN ARROW IS CLICKED - RENDERS FULL PUB INFO
  dropDownInfo: function(pub,div){
    //grabs all the pub heading divs, and loops to find the one that matches the selected pub
    //(couldn't get this working with an id query directly)
    var headingDiv = document.querySelectorAll('.pub-name')
    var correctHeading
    headingDiv.forEach(function(individualDiv){
      if (individualDiv.id === ('pub' + pub.id)){
        correctHeading = individualDiv
      }
    }.bind(this))   

    //checks whether the full pub info is already displayed or not. If it isn't, it creates the elements. If it is, it deletes the elements to contract the menu again
   if (correctHeading.parentElement.childNodes.length <= 2){
    this.createImg(div, pub)
    this.createAddressParagraph(div, pub)
    this.createOpeningHoursList(div, pub)} 
    else {
      this.removeDropDownInfo(correctHeading)
    }
  },

  //CREATES AND APPENDS THE IMAGE FOR THE EXPANDED PUB INFO
  createImg: function(div, pub){
    if (pub.img){
      var pubImg = document.createElement('img')
      pubImg.src = pub.img
      pubImg.width = 200
      div.appendChild(pubImg)
    }
  },

  //CREATES AND APPENDS THE ADDRESS FOR THE EXPANDED PUB INFO
  createAddressParagraph: function(div, pub){
    if (pub.address){
      var pubAddress = document.createElement('p')
      pubAddress.innerText = "Address: " + pub.address
      div.appendChild(pubAddress)
    }
  },

  //CREATES AND APPENDS THE OPENING HOURS LIST FOR THE EXPANDED PUB INFO
  createOpeningHoursList: function(div, pub){
    if (pub.opening_hours){
      var pubOpeningHrs = document.createElement('p')
      pubOpeningHrs.innerText = "Opening hours:"
      var openingHoursList = document.createElement('ul')
      //loops through each of the daily pub opening hours and appends them to the ul list
      this.appendDailyOpeningHours(openingHoursList, pub.opening_hours)
      div.appendChild(pubOpeningHrs)
      div.appendChild(openingHoursList)
    }
  },

  //CREATES li ITEMS AND APPENDS THEM TO AN OPENING HOURS LIST FOR EXPANDED PUB INFO
  appendDailyOpeningHours: function(list, openingHours){
    for (var day in openingHours){
      var li = document.createElement('li')
      //titleize defined below - puts days of the week into title case
      var dayString = this.titleize(day)
      li.innerText = dayString + ": " + openingHours[day]
      list.appendChild(li)
    }
  },

  //REMOVES ALL OF THE DROP DOWN PUB INFO
  removeDropDownInfo: function(div){
    while (div.childNodes.length > 1){
      var node = div.childNodes[1]
      div.removeChild(node)
    }
  },

  //HELPER METHOD TO CAPITALISE THE INITIAL LETTER OF A STRING AND RETURN IT
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
