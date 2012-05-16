module.exports = function(req, res, next) {
  res.send = function(body, code) {
    
    var contentType = this.getHeader('content-type')
    
    if(typeof body === 'object') {
      body = JSON.stringify(body)
      contentType = contentType || 'application/json'
    }
    
    this.setHeader('Content-Type', contentType || 'text/html')
    this.statusCode = code || this.statusCode || 200
    this.end(body)
  }
  next()
}