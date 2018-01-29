
function readString(filePath)
{
	
	let fs = require('fs');

	let bufStringArr = fs.readFile(filePath,'utf8' ,(err, data) => {
		
		if (err) throw err;
		data = data.split('\n');
		console.log (data.length-1);
		done();
	
	});
	
}




readString(process.argv[2]);



module.exports = readString;

