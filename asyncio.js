
function readString(filePath,callback)
{
	
	let fs = require('fs');

	let bufStringArr = fs.readFile(filePath,'utf8' ,callback);
	
}


function callback(err, data){
		
	if (err) throw err;
	data = data.split('\n');
	console.log (data.length-1);
	return data.length-1;

}

//readString(process.argv[2],callback);



module.exports = readString;

