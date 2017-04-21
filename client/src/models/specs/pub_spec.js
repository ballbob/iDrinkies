var assert = require('assert')
var Pub = require('../pub.js')

describe('Pub tests: ', function(){

  var pub

  beforeEach(function(){
    pub = new Pub({
      name: 'Happy Fun Pub', 
      phoneNo:'0131 555 555',
      address: '13 Castle Terrace'
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




})