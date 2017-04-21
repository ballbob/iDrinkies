var PubListView = function(listElement){
  this.listElement = listElement
}

PubListView.prototype = {
  render: function(pubs){
    for (i=0; i<pubs.length; i++){
      var pubDiv = document.createElement('div')

      var pubName = document.createElement('p')
      pubName.innerText = pubs[i].name
      pubDiv.appendChild(pubName)

      var pubAddress = document.createElement('p')
      pubAddress.innerText = pubs[i].address
      pubDiv.appendChild(pubAddress)

      this.listElement.appendChild(pubDiv)
    }
  }
}

module.exports = PubListView