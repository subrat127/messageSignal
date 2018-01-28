var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080 ;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

var http = require('http');


// Loading the index file . html displayed to the client
var server = http.createServer(function(req, res) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end("Hi Welcome to first Project.! ");
    
});

// Loading socket.io
var io = require('socket.io').listen(server);

// When a client connects, we note it in the console
io.sockets.on('connection', function (socket) {
    console.log('A client is connected!');
});


server.listen(8080);