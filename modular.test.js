let moduleRunner = require('./modular');


describe('testing the moduleRunner function',()=>{

	test('testing for directory with multiple matching files',()=>{

		expect(moduleRunner('/Users/abhilashnambissan/learnyounode','txt')).toBe('sample.file.txt','sample.txt','sample2.txt','sample.3.txt','sample4.txt');
	});


});