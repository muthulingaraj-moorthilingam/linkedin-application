var http = require('http');

var static = require('node-static');
var port  = 3000;
var file = new static.Server();
 
require('http').createServer(function (request, response) {
	console.log(request.url);
    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
}).listen(port,() => console.log("This Server Running Under "+port+" Port"));