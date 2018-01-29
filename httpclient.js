let http = require('http');
let url = process.argv[2];


http.get(url , (response)=>{
	response.setEncoding('utf8');
	response.on('error' , (error)=>{
		console.log(error);
	});
	response.on('data', (data)=>{
		console.log(data);
	});
});