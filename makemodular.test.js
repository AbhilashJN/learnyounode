let filterModule = require('./makemodular');
let printConsole = require('./makemodular2');


let inpPath;
let inpArr;
let extension;

global.console = {
	log: jest.fn()
};

describe('Testing the filter module', () => {
    
    
	test('Testing for invalid directory', (done) => {
		inpPath = '/Users/abhilashnambissan/learnyounode2';
		extension = 'txt';
		let callback = (err, data) => {
			expect(err.code).toEqual('ENOENT');
			done();
		};
		filterModule(inpPath , extension, callback);
	});
    

	test('Testing for directory with multiple matches', (done) => {
		inpPath = '/Users/abhilashnambissan/learnyounode';
		inpArr = ['sample.file.txt','sample.txt','sample2.txt','sample3.txt','sample4.txt'];
		extension = 'txt';
		let callback = (err, data) => {
			expect(data).toEqual(inpArr);
			done();
		};
		filterModule(inpPath, extension, callback);
	});
    

	test('Testing for directory with 0 matching files', (done) => {
		inpPath = '/Users/abhilashnambissan/learnyounode';
		extension = 'png';
		let callback = (err, data) => {
			expect(data).toEqual([]);
			done();
		};
		filterModule(inpPath, extension, callback);
	});
});


describe('Testing the logging function', () => {
    
	test('Testing for invalid directory', (done) => {
		inpPath = '/Users/abhilashnambissan/learnyounode2';
		extension = 'txt';
		let callback = (err, data) => {
			global.console.log(err.code);
			expect(global.console.log).toHaveBeenCalledWith('ENOENT');
			done();
		};
		printConsole(inpPath, extension, callback);
	});
    


	test('Testing for directory with multiple matching files', (done) => {
		inpPath = '/Users/abhilashnambissan/learnyounode';
		inpArr = ['sample.file.txt','sample.txt','sample2.txt','sample3.txt','sample4.txt'];
		extension = 'txt';
		let callback = (err, data) => {
			global.console.log(data);
			expect(global.console.log).toHaveBeenCalledWith(inpArr);
			done();
		};
		printConsole(inpPath, extension, callback);
	});
    
    
    
	test('Testing for directory with 0 matching files', (done) => {
		inpPath = '/Users/abhilashnambissan/learnyounode';
		extension = 'png';
		let callback = (err, data) => {
			global.console.log(data);
			expect(global.console.log).toHaveBeenCalledWith([]);
			done();
		};
		printConsole(inpPath, extension, callback);
	});
});

