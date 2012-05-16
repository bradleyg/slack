###Slack - Middleware for lazy sending of HTTP responses.     
Install: ```npm install slack```
***
###res.send():  
```javascript
app.send(body, code)
```  
```code``` is optional, if given will set the HTTP status code. If ```body``` is an ___object___ then the output will be converted to ___json___ and the ___content-type___ header will be set to ___application/json___. Otherwise the output won't be converted and will be sent as ___text/html___.
***
###Examples: 
[View the examples](https://github.com/bradleyg/slack/blob/master/example/app.js)  
***
###Tests  
```
npm test
```  

[![Build Status](https://secure.travis-ci.org/bradleyg/slack.png)](http://travis-ci.org/bradleyg/slack)