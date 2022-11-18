const querystring = require('querystring');
function handle(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });

    let body = '';
    request.on('data', function(data) {
        body += data.toString();
    });

    request.on('end', function() {
        let decode = querystring.parse(body);
        console.log(decode);
    });

    response.write('<!DOCTYPE html>');
    response.write('<html lang="en">');
    response.write('<head><title>Http module</title></head>');
    response.write('<body>');
    response.write('<h1>Hello from http module</h1>');
    response.write('</body>');
    response.write('</html>');
    response.end();
}

// exports.fn = handle;
module.exports = handle;