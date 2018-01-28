let filterExtensions = require('./filteredls');

let inpPath;
let inpArr;
let extension;
console.log = jest.fn();

describe('Testing the filterExtensions function',()=>{

	test('Testing case where all filenames have valid extension', ()=>{
		inpPath = '/Users/abhilashnambissan/learnyounode';
		inpArr = ['sample.txt','sample2.txt','sample3.txt','sample4.txt'];
		extension = 'txt';
		expect(filterExtensions(inpPath,extension)).toBe('sample.txt','sample2.txt','sample3.txt','sample4.txt');
	});


	test('Testing case where no filenames have valid extension', ()=>{
		inpPath = '/Users/abhilashnambissan/learnyounode';
		inpArr = ['sample.txt','sample2.txt','sample3.txt','sample4.txt'];
		extension = 'md';
		expect(filterExtensions(inpPath,extension)).toBe('');

	});






});


