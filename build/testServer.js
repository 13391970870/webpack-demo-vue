var http = require('http');
var https = require('https');
var server = http.createServer();
var fs = require('fs');

server.listen('9049');
var url = require('url');

server.on('request', (request, response) => {
  console.log(request)
  console.log("===========================")
  console.log(response)
})


