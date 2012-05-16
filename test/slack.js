var app = require('obedient')
var request = require('request')
var should = require('should')
var slack = require('../index')

// setup

app.use(slack)
    
app.get('/html', function(req, res){
  res.send('html', 201)
})

app.get('/default', function(req, res){
  res.send('default')
})

app.get('/overwrite/code', function(req, res){
  res.statusCode = 405
  res.send('overwrite code')
})

app.get('/overwrite/header', function(req, res){
  res.setHeader('Content-Type', 'text/plain')
  res.send('overwrite header')
})

app.get('/json', function(req, res){
  var json = {json: true}
  res.send(json, 200)
})

app.listen(3000)

// tests

describe("slack", function () {

  describe('res.send()', function(){
    
    it('should send the correct status code passed', function(done){
      request('http://localhost:3000/html', function(err, res, body){
        should.not.exist(err)
        should.exist(res)
        res.statusCode.should.equal(201)
        res.headers['content-type'].should.equal('text/html')
        body.should.equal('html')
        done()
      })      
    })
    
    it('should send the default status code if nothing was defined', function(done){
      request('http://localhost:3000/default', function(err, res, body){
        should.not.exist(err)
        should.exist(res)
        res.statusCode.should.equal(200)
        res.headers['content-type'].should.equal('text/html')
        body.should.equal('default')
        done()
      })      
    })
    
    it('should overwrite the default status code if defined in the callback', function(done){
      request('http://localhost:3000/overwrite/code', function(err, res, body){
        should.not.exist(err)
        should.exist(res)
        res.statusCode.should.equal(405)
        res.headers['content-type'].should.equal('text/html')
        body.should.equal('overwrite code')
        done()
      })      
    })
    
    it('should overwrite the default header if defined in the callback', function(done){
      request('http://localhost:3000/overwrite/header', function(err, res, body){
        should.not.exist(err)
        should.exist(res)
        res.statusCode.should.equal(200)
        res.headers['content-type'].should.equal('text/plain')
        body.should.equal('overwrite header')
        done()
      })      
    })
    
    it('should return json and a default status code', function(done){
      request('http://localhost:3000/json', function(err, res, body){
        should.not.exist(err)
        should.exist(res)
        res.statusCode.should.equal(200)
        res.headers['content-type'].should.equal('application/json')
        body.should.equal('{"json":true}')
        done()
      })      
    })
        
  })  

})