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


	test('Testing case where filenames have more than 1 .', ()=>{
		inpPath = '/Users/abhilashnambissan/learnyounode';
		inpArr = ['sample.txt','sample2.txt','sample3.txt','sample4.txt','sample.file.txt','sample.mdfile.md'];
		extension = 'txt';
		expect(filterExtensions(inpArr,extension)).toBe('sample.file.txt','sample.txt','sample2.txt','sample3.txt','sample4.txt');

	});

	test('Testing case where filenameis same as extension .', ()=>{
		inpPath = '/Users/abhilashnambissan/learnyounode';
		inpArr = ['sample.txt','sample2.txt','sample3.txt','sample4.txt','sample.file.txt','sample.mdfile.md','txt'];
		extension = 'txt';
		expect(filterExtensions(inpArr,extension)).toBe('sample.mdfile.md');

	});





});


