const wb = require('websocket').server;
const http = require('http');

let socket = new ws({
    httpServer: http.createServer().listen(3000)
});

socket.on('request', function(req) {
    let conn = req.accept(null, req.origin);
    console.log('Origin ->', req.origin);
    
    conn.on('message', function(message) {
        conn.sendUTF('Hello from server');
    });

    conn.on('close', function(connection) {
        console.log('connection is closed');
    });
});