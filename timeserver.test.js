let timeserver = require('./timeserver');
let net = require('net');



describe('Testing the formatDate function', ()=>{

	test('Test with date "Tue Jan 30 2018 02:35:22 GMT+0530 (IST)", should return "2018-01-30 02:35"', ()=>{
		let testDate = new Date('Tue Jan 30 2018 02:35:22 GMT+0530 (IST)');
		expect(timeserver.formatDate(testDate)).toMatch('2018-01-30 02:35');
	});
});



describe('Testing whether the date and time is sent by server', () => {
	test('Testing format and content of date-time returned from server', (done) => {
		let client = new net.Socket();
		let received = '';
		timeserver.runServer(8000);
		client.connect(8000, '127.0.0.1', () => {
			client.end();
		});

		client.on('data', (data) => {
			received += data;
			client.destroy();
		});

		client.on('close', () => {
			expect(received).toMatch('2018-01-30 02:35');
			done();
		});

	});
});