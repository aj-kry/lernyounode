var http = require('http');
var map = require('through2-map');

function handleRequest(req, res) {
  if (req.method !== 'POST') {
    return res.end('send me a POST\n');
  }

  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase();
  })).pipe(res);
}

var server = http.createServer(handleRequest);

var portNumber = Number(process.argv[2]);
server.listen(portNumber);