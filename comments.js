// Create web server
// HTTP module
var http = require('http');
var fs = require('fs');
// Create server
var server = http.createServer(function(req, res) {
    // Set header
    res.writeHead(200, {'Content-Type': 'text/html'});
    // Read file
    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    // Pipe file
    myReadStream.pipe(res);
});
// Listen port
server.listen(3000);