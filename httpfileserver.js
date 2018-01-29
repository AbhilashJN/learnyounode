let http = require('http');
let fs = require('fs');


let port = process.argv[2];
let filePath = process.argv[3];


let server = http.createServer((request,response)=>{

	let data  = fs.createReadStream(filePath);

	data.pipe(response);


});

server.listen(port);