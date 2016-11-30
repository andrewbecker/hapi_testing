var hapi_server = require('./server/server.js');
var port = 3000;

var server = hapi_server.createServer(port);
server.start();
console.log('hapi.js server running at port: ' + port);