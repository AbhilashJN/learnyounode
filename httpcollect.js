let http = require('http');
let url = process.argv[2];

function httpcollect(url, callback){
	http.get(url , (response)=>{
		let content='';
		response.setEncoding('utf8');
		response.on('error' , (error)=>{
			console.log(error);
			callback(error,null);
		});
		response.on('data', (data)=>{
			content+=data;
		});
		response.on('end',()=>{
			console.log(content.length);
			console.log(content);
			callback(null,content);
		});
	});

}


module.exports=httpcollect;