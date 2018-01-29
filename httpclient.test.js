let httpclient = require('./httpclient');

describe('Testing for data in response', () => {
	test('Testing for valid HTTP response', (done) => {
		let callback = (err,data) => {
			expect(data).toMatch('200 OK');
			done();
		};
		httpclient('http://httpstat.us/200', callback);
	});
	test('Testing for failed HTTP response', (done) => {
		let callback = (err,data) => {
			expect(data).toMatch('404 Not Found');
			done();
		};
		httpclient('http://httpstat.us/404', callback);
	});
});