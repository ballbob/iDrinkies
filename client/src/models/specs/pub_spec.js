var assert = require('assert')
var Pub = require('../pub.js')

describe('Pub tests: ', function(){

  var pub

  beforeEach(function(){
    pub = new Pub({
      name: 'Happy Fun Pub', 
      phoneNo:'0131 555 555',
      address: '13 Castle Terrace',
      latlng: [555, 444],
      openingHours: '10:00 - 12:00',
      foodServingTimes: '10:00 - 12:00',
      CCRanking: 5
    })
  })

  it('has a name', function(){
    assert.strictEqual('Happy Fun Pub', pub.name)
  })

  it('has a phone number', function(){
    assert.strictEqual('0131 555 555', pub.phoneNo)
  })

  it('has an address', function(){
    assert.strictEqual('13 Castle Terrace', pub.address)
  })

  it('has latlng coords', function(){
    assert.strictEqual(2, pub.latlng.length)
  })

  it('stores lat in index 0 of latlng', function(){
    assert.strictEqual(555, pub.latlng[0])
  })

  it('stores lng in index 1 of latlng', function(){
    assert.strictEqual(444, pub.latlng[1])
  })

  it('has opening hours', function(){
    assert.strictEqual('10:00 - 12:00', pub.openingHours)
  })

  it('has food service times', function(){
    assert.strictEqual('10:00 - 12:00', pub.foodServingTimes)
  })

  it('has a CC ranking', function(){
    assert.strictEqual(5, pub.CCRanking)
  })

  it('starts with empty array of reviews', function(){
    assert.strictEqual(0, pub.reviews.length)
  })

  it('can add a review', function(){
    pub.addReview('it was OK')
    assert.strictEqual(1, pub.reviews.length)
  })


})