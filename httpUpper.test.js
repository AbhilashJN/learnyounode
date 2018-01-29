let http = require('http');
let upperServer = require('./httpUpper');

describe('Testing whether the content of the file returned by the server is correct', () => {
    
	upperServer(8000);

	test('Testing content of file returned from server, should be uppercase', (done) => {
		let post_options = {
			host: 'localhost',
			port: '8000',
			path: '',
			method: 'POST',
			headers: {
				'Content-Type': 'text/plain',
				'Content-Length': 3
			}
		};

		let post_req = http.request(post_options, (response)=>{
			response.setEncoding('utf8');
			response.on('error' , (error)=>{
				console.log(error);
				
			});
			response.on('data', (data)=>{
    
				expect(data).toMatch('ABC');
				
			});

			response.on('end',()=>{done();});
		});

		post_req.write('abc');
		post_req.end();

	});

	test('Testing content of empty file returned from server, should be empty string', (done) => {
		let post_options = {
			host: 'localhost',
			port: '8000',
			path: '',
			method: 'POST',
			headers: {
				'Content-Type': 'text/plain',
				'Content-Length': 0
			}
		};

		let post_req = http.request(post_options, (response)=>{
			response.setEncoding('utf8');
			response.on('error' , (error)=>{
				console.log(error);
				
			});
			response.on('data', (data)=>{
    
				expect(data).toMatch('');
				
			});

			response.on('end',()=>{done();});
		});

		post_req.write('');
		post_req.end();

	});
    
	test('Testing content of file returned from server, should be uppercase', (done) => {
		let post_options = {
			host: 'localhost',
			port: '8000',
			path: '',
			method: 'POST',
			headers: {
				'Content-Type': 'text/plain',
				'Content-Length': 6
			}
		};

		let post_req = http.request(post_options, (response)=>{
			response.setEncoding('utf8');
			response.on('error' , (error)=>{
				console.log(error);
				
			});
			response.on('data', (data)=>{
    
				expect(data).toMatch('ABC DE');
				
			});

			response.on('end',()=>{done();});
		});

		post_req.write('abc de');
		post_req.end();

	});


});