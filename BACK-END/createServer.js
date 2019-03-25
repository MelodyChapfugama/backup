var http = require('http');

http.createServer(

	function (req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('hello world. my name is melody chapfugama, and i am a member of impact hub');
}).listen(8080);