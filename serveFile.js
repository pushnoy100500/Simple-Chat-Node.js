var fs = require('fs');
function serveFile (name, res) {
	var index = fs.createReadStream(name);
				var output = "";
				index
				.on('readable', function() {
				var temp = index.read();
					if(temp) {
						output += temp.toString();
					}
				})
				.on('end', function() {
					//console.log(output);
					res.end(output);					
				});			
}

module.exports.serveFile = serveFile;