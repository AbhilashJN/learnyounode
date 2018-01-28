let sum = require('./babysteps');


describe('Testing the sum function' , ()=>
{

	test('test for 3 args' , ()=>{
		expect(sum([1,2,3])).toBe(6);

	});
    

	test('test for 0 args' , ()=>{
		expect(sum([])).toBe(0);

	});
    
	test('test for 1 arg' , ()=>{
		expect(sum([1])).toBe(1);

	});
	
}
);

