const http = require('http');
const handle = require('./handle');
const events = require('events');s
let emiter = new events.EventEmitter();

// const console_log_hello_world = require('console-log-hello-world');

emiter.on('say', say)
function say() {
    console.log('Saying');
}

say();

emiter.emit('say12');

// const s = require('./name');
// console.log(s.a());
// console.log(s.b());
// console.log(handle);
var server = http.createServer(handle);
// var server = http.createServer(handle.fn);

server.listen(3000, function() {
    console.log('Server is listening at port 3000');
});