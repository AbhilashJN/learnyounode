let httpclient = require('./httpclient');

describe('Testing for data in response', () => {
	test('Testing for valid HTTP response', (done) => {
		let callback = (err,data) => {
			expect(data).toMatch('123456789');
			done();
		};
		httpclient('http://www.mocky.io/v2/5a6f83af300000e6336fe63b', callback);
	});
	test('Testing for failed HTTP response', (done) => {
		let callback = (err,data) => {
			expect(data).toMatch('404 Not Found');
			done();
		};
		httpclient('http://www.mocky.io/v2/5a6f852f300000e6336fe640', callback);
	});
});