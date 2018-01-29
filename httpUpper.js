let http = require('http');
let port = process.argv[2];
let map =require('through2-map');

let server = http.createServer((request,response)=>{

	if(request.method!=='POST')
	{
		console.log('Not a post request');
		return null;
	}
	request.pipe(map(function (chunk) {
		return chunk.toString().toUpperCase();
	})).pipe(response);
});

server.listen(port);