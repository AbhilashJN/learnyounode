let http = require('http');
let jsonserver = require('./jsonserver');





describe('Testing whether the content of the file is returned by the server', () => {
    
	jsonserver(8000);
	test('Testing content of file returned from server', (done) => {



		http.get('http://127.0.0.1:8000/api/parsetime?iso=2013-08-10T12:10:15.474Z' , (response)=>{
			response.setEncoding('utf8');
			response.on('error' , (error)=>{
				console.log(error);
				
			});
			response.on('data', (data)=>{
    
				expect(data).toMatch(JSON.stringify({'hour':17,'minute':40,'second':15}));
				
			});

			response.on('end',()=>{done();});
            
		});
	});
    
	test('Testing format and content of empty file returned from server', (done) => {


		http.get('http://127.0.0.1:8000/api/unixtime?iso=2013-08-10T12:10:15.474Z' , (response)=>{
			response.setEncoding('utf8');
			response.on('error' , (error)=>{
				console.log(error);
				
			});
			response.on('data', (data)=>{
    
				expect(data).toMatch(JSON.stringify({'unixtime':1376136615474}));
				
			});

			response.on('end',()=>{done();});
            
		});
	});
});