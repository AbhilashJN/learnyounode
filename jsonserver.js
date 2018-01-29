let http = require('http');
let url = require('url');
let port = process.argv[2];


function jsonServer(port)
{

	let server = http.createServer((request,response)=>{
		response.writeHead(200, { 'Content-Type': 'application/json' });
		let reqUrl = url.parse(request.url,true);
		let queryString = reqUrl.query.iso;
		let queryDate = new Date(queryString);
		let respJson={};

		if(reqUrl.pathname==='/api/parsetime')
		{   
			respJson['hour'] = queryDate.getHours();
			respJson['minute'] = queryDate.getMinutes();
			respJson['second'] = queryDate.getSeconds();
		}

		else if(reqUrl.pathname==='/api/unixtime')
		{
			respJson['unixtime'] = queryDate.getTime();
		}

		response.write(JSON.stringify(respJson));
		response.end();
	});
	server.listen(port);


}

module.exports = jsonServer;