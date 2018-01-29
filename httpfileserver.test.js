let http = require('http');
let fileserver = require('./httpfileserver');





describe('Testing whether the content of the file is returned by the server', () => {
    
// 	test('Testing content of file returned from server', (done) => {

// 		fileserver(8000,'/Users/abhilashnambissan/learnyounode/sample.txt');

// 		http.get('http://127.0.0.1:8000' , (response)=>{
// 			response.setEncoding('utf8');
// 			response.on('error' , (error)=>{
// 				console.log(error);
				
// 			});
// 			response.on('data', (data)=>{
    
// 				expect(data).toMatch('first line');
				
// 			});

// 			response.on('end',()=>{done();});
            
// 		});
// 	});
    
	test('Testing format and content of empty file returned from server', (done) => {

		fileserver(8000,'/Users/abhilashnambissan/learnyounode/sample.file.txt');

		http.get('http://127.0.0.1:8000' , (response)=>{
			response.setEncoding('utf8');
			response.on('error' , (error)=>{
				console.log(error);
				
			});
			response.on('data', (data)=>{
    
				expect(data).toMatch('');
				
			});

			response.on('end',()=>{done();});
            
		});
	});
});