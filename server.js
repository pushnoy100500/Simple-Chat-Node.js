var http = require('http');
var qrs = require('querystring');
var srvF = require('./serveFile.js');
//global variable, sorry... it's temporary
var clients = [];

var server = http.createServer(function(req, res) {
	console.log(req.url);	

		switch(req.url) {
			case '/':
				srvF.serveFile('index.html', res);		
			break;

			case '/clientSide.js':
				srvF.serveFile('clientSide.js', res);	
			break;

			case '/publish':

			var message = "";
				req
				.on('data', function(chunk) {
					message += chunk.toString();
				})
				.on('end', function() {
					console.log(message);
					for (var i = 0; i < clients.length; i++) {
						clients[i].end(message);
					}
					clients = [];
					res.end(message);
				});
				
			break;

			case '/subscribe':
				clients.push(res);
				//console.log(clients.domain);
			break;

		default:
			res.end();
		}
});
server.listen(8003, 'localhost');

