var http = require("http");
http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('The server is running\n');
}).listen(8081);

console.log("Server running on port 8081");