var app = require('obedient')
var slack = require('../index.js')

app.use(slack)

app.get('/html', function(req, res){
  res.send('<h1>html</h1>', 201)
})

app.get('/default', function(req, res){
  res.send('<h1>default code</h1>')
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