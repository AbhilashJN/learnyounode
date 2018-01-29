let filterExtensions = require('./filteredls');

let inpPath;
let inpArr;
let extension;
console.log = jest.fn();

describe('Testing the filterExtensions function',()=>{

	test('Testing case where all filenames have valid extension', (done)=>{
		inpPath = '/Users/abhilashnambissan/learnyounode';
		inpArr = ['sample.file.txt','sample.txt','sample2.txt','sample3.txt','sample4.txt'];
		extension = 'txt';
		function callback(err,data){
			expect(data).toEqual(inpArr);
			done();
		}
		filterExtensions(inpPath,extension,callback);
	});


	test('Testing case where no filenames have valid extension', (done)=>{
		inpPath = '/Users/abhilashnambissan/learnyounode';
		inpArr = [];
		extension = 'png';
		function callback(err,data){
			expect(data).toEqual(inpArr);
			done();
		}
		filterExtensions(inpPath,extension,callback);

	});


	test('Testing case where filenames have more than 1 .', (done)=>{
		inpPath = '/Users/abhilashnambissan/learnyounode';
		inpArr = ['sample.mdfile.md'];
		extension = 'md';
		function callback(err,data){
			expect(data).toEqual(inpArr);
			done();
		}
		filterExtensions(inpPath,extension,callback);

	});

	test('Testing case where filename is same as extension .', (done)=>{
		inpPath = '/Users/abhilashnambissan/learnyounode';
		inpArr = ['sample.file.txt','sample.txt','sample2.txt','sample3.txt','sample4.txt'];
		extension = 'txt';
		function callback(err,data){
			expect(data).toEqual(inpArr);
			done();
		}
		filterExtensions(inpPath,extension,callback);
	});

	test('Testing for invalid directory', (done)=>{
		inpPath = '/Users/abhilashnambissan/learnyounode2';
		extension = 'txt';
		function callback(err,data){
			expect(err.code).toEqual('ENOENT');
			done();
		}
		filterExtensions(inpPath,extension,callback);
	});



});


