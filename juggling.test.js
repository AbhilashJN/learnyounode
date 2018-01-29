let juggler = require('./juggling');
let url1 = 'http://www.mocky.io/v2/5a6f871330000074336fe646';
let url2 = 'http://www.mocky.io/v2/5a6f8789300000e0336fe649';
let url3 = 'http://www.mocky.io/v2/5a6f87f9300000e0336fe64c';

let orderedString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis eu felis quis lobortis. Vestibulum augue lectus, interdum eu sollicitudin non, accumsan non mi. Mauris urna erat, posuere et pharetra at, porttitor sit amet velit. In hac habitasse platea dictumst. Duis diam ante, rutrum in pellentesque quis, auctor in lectus.';
orderedString+='Sed nec tellus at nisi laoreet cursus. Maecenas efficitur massa quis est laoreet, eu suscipit risus fermentum. Donec accumsan mauris faucibus nunc blandit, non eleifend tortor pharetra. In sagittis dui et ex luctus, eu auctor nisi gravida. Integer a risus justo. Morbi et erat ipsum.';
orderedString+='Sed malesuada porttitor lorem, quis tempor ligula mollis mattis. Curabitur in metus pulvinar ligula volutpat finibus. Donec egestas felis ac porttitor lobortis.';

describe('Testing for complete data of all 3 urls in sequence in response', () => {

    
	test('Testing for requests in same order', (done) => {
		// url1+='?mocky-delay=1500ms';
		// url2+='?mocky-delay=3000ms';
        
		let callback = (err,data) => {
			expect(data).toMatch(orderedString);
			done();
		};
		juggler(url1,url2,url3, callback);
	});
    
	test('Testing for requests in random order', (done) => {
		url1delay1= url1 + '?mocky-delay=1500ms';
		url2delay1= url2 + '?mocky-delay=3000ms';
        
		let callback = (err,data) => {
			expect(data).toMatch(orderedString);
			done();
		};
		juggler(url1delay1,url2delay1,url3, callback);
	});
    
	test('Testing for requests in reverse order', (done) => {
		url1delay2 = url1 + '?mocky-delay=3000ms';
		url2delay2 = url2 + '?mocky-delay=1500ms';
		
        
		let callback = (err,data) => {
			expect(data).toMatch(orderedString);
			done();
		};
		juggler(url1delay2,url2delay2,url3, callback);
	});
	
});