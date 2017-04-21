var assert = require('assert')
var Pub = require('../pub.js')

describe('Pub tests: ', function(){

  var pub

  beforeEach(function(){
    pub = new Pub('Happy Fun Pub', '0131 555 555')
  })

  it('has a name', function(){
    assert.strictEqual('Happy Fun Pub', pub.name)
  })

  it('has a phone number', function(){
    assert.strictEqual('0131 555 555', pub.phoneNo)
  })




})