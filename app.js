

var express = require('express')//our mvc framework library
    , http = require('http')//core library for http functionality
    

//create our express application instance
//this is the core of our web application (our server)
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3000);