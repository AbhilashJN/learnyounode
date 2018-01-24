let readString = require('./firstio');


describe('testing the readString function' , ()=> {

	test('Test file with 0 \n, should return 0' , ()=>{

		expect(readString('sample.txt')).toBe(0);
	});
    

	test('Test file with 1 \n, should return 1' , ()=>{

		expect(readString('sample2.txt')).toBe(1);
	});
    
	test('Test empty file should return 0' , ()=>{

		expect(readString('sample3.txt')).toBe(0);
	});
    
});