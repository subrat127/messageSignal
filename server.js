var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080 ;var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
 console.log('server.js started!!!');var http = require('http');

var server = http.createServer(function(req, res) {    console.log('http request received');    res.writeHead(200, {"Content-Type": "text/html"});        res.write('Hello World!');     res.end();    });
var io = require('socket.io').listen(server);io.set('transports', ['websocket']);
io.sockets.on('connection', function (socket) {    console.log('A client is connected!');});
io.on('connection', function(socket) {  console.log('Client connected');      socket.on('disconnect', function(event) {     console.log('Client disconnected');    });        });
server.listen(8080);
