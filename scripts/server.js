var express = require('express');
var https = require('https');
var http = require('http');
var fs = require('fs');
var bodyParser = require('body-parser')
var app = express();
var web = express();

// var options = {
//   key: fs.readFileSync(__dirname + './../keys/server.key'),
//   cert: fs.readFileSync(__dirname + './../keys/server.crt')
// };

app.use(bodyParser.json({type: ['application/json', 'application/csp-report']}));
app.use(express.static(__dirname + './../webpage'));

app.post('/processData', function (req, res) {
  if (!req.body) return res.sendStatus(400)
  console.log('----------');
  console.log(req.body);
  res.sendStatus(201)
})


// Create an HTTP service.
http.createServer(app).listen(8080);
// Create an HTTPS service identical to the HTTP service.
//https.createServer(options, app).listen(443);
