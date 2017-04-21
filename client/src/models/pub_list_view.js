var PubListView = function(listElement){
  this.listElement = listElement
}

PubListView.prototype = {
  render: function(pub){
    var pubDiv = document.createElement('div')

    var pubName = document.createElemtn('p')
    pubName.innerText = pub.name
    pubDiv.appendChild(pubName)

    this.listElement.appendChild(pubDiv)
  }
}

module.exports = PubListView