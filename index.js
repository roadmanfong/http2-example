var fs = require('fs');
var http2 = require('http2');

var argv = require('minimist')(process.argv.slice(2));
var port = argv.port || 8888 ;
var isPlain = (argv.plain === true)

var options = isPlain ? {
  plain: true
} : {
 key: fs.readFileSync('./localhost.key'),
 cert: fs.readFileSync('./localhost.crt')
};

var createServer = isPlain ? http2.raw.createServer : http2.createServer;
createServer(options, function(equest, response) {
 response.end('Hello world!');
}).listen(port);

console.log((isPlain ? 'plain ' : '' ) +'http server is running on port:' + port );
