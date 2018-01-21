var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//require controllers from back-end
app.use(require('./controllers/index.js'))

//require front-end models
app.use(express.static('client/build'))

app.listen(3000, function(){
  console.log("The server is running on port 3000.")
})