let http = require('http');
let url = process.argv[2];
let url2 = process.argv[3];
let url3 = process.argv[4];
let count=3;
let content ='';
let content2 ='';
let content3 ='';



http.get(url , (response)=>{
	response.setEncoding('utf8');
	response.on('error' , (error)=>{
		console.log(error);
	});
	response.on('data', (data)=>{
		content+=data;
	});
	response.on('end',()=>{
		count--;
		if(count===0)
		{
			console.log(content);
			console.log(content2);
			console.log(content3);
		}
		
	});
});



http.get(url2 , (response)=>{
	content2='';
	response.setEncoding('utf8');
	response.on('error' , (error)=>{
		console.log(error);
	});
	response.on('data', (data)=>{
		content2+=data;
	});
	response.on('end',()=>{
		count--;
		if(count===0)
		{
			console.log(content);
			console.log(content2);
			console.log(content3);
		}
		
	});
});


http.get(url3 , (response)=>{
	content3='';
	response.setEncoding('utf8');
	response.on('error' , (error)=>{
		console.log(error);
	});
	response.on('data', (data)=>{
		content3+=data;
	});
	response.on('end',()=>{
		count--;
		if(count===0)
		{
			console.log(content);
			console.log(content2);
			console.log(content3);
		}
		
	});
});




