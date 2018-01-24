let readString = require('./firstio');


describe('testing the readString function' , ()=> {

	test('Test file with 0 \n, should return 0' , ()=>{

		expect(readString('sample.txt')).toBe(0);
	});
    


    
});