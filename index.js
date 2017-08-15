var fs = require('fs');
var options = {
 key: fs.readFileSync('./localhost.key'),
 cert: fs.readFileSync('./localhost.crt')
};

require('http2').createServer(options, function(equest, response) {
 response.end('Hello world!');
}).listen(8888);
