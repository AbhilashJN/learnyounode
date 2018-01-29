let readString = require('./asyncio');





describe('testing the readString function' , ()=> {

	test('Test file with 0 \n, should return 0' , (done)=>{
		function callback(err,data){
			if (err) throw err;
			data = data.split('\n');
			expect(data.length-1).toBe(0);
			done();
		} 
		readString('sample.txt',callback);
	});
    

	test('Test file with 1 \n, should return 1' , (done)=>{
		function callback(err,data){
			if (err) throw err;
			data = data.split('\n');
			expect(data.length-1).toBe(1);
			done();
		} 
		readString('sample2.txt',callback);

	});
    
	test('Test empty file should return 0' , (done)=>{
		function callback(err,data){
			if (err) throw err;
			data = data.split('\n');
			expect(data.length-1).toBe(0);
			done();
		} 
		readString('sample3.txt',callback);
	});
	test('Test file with 5 \n, should return 5' , (done)=>{

		function callback(err,data){
			if (err) throw err;
			data = data.split('\n');
			expect(data.length-1).toBe(5);
			done();
		} 
		readString('sample4.txt',callback);
	});
	test('Test filename which does not exist, should throw error' , (done)=>{

		function callback(err,data){
			console.log(err);
			expect(err.code).toEqual('ENOENT');
			done();
		} 
		readString('a.txt',callback);
	});

    
});