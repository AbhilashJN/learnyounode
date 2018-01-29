let http = require('http');
let reqUrl = process.argv[2];

function httpclient(reqUrl , callback){

	
	http.get(reqUrl , (response)=>{
		response.setEncoding('utf8');
		response.on('error' , (error)=>{
			console.log(error);
			callback(error,null);
		});
		response.on('data', (data)=>{

			console.log(data);
			callback(null,data);
		});
	});


}

module.exports = httpclient;


