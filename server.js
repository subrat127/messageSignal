var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080 ;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

 console.log('server.js started!!!');
var http = require('http');


// Loading the index file . html displayed to the client
var server = http.createServer(function(req, res) {
    console.log('http request received');
    res.writeHead(200, {"Content-Type": "text/html"});    
    res.write('Hello World!'); 
    res.end();
    
});

// Loading socket.io
var io = require('socket.io').listen(server);
io.set('transports', ['websocket']);

// When a client connects, we note it in the console
io.sockets.on('connection', function (socket) {
    console.log('A client is connected!');
});

io.on('connection', function(socket) {
  console.log('Client connected');
      
socket.on('disconnect', fuction() { console.log('Client disconnected');});}

server.listen(8080);