
function readString(filePath)
{

	let fs = require('fs');
	let readBuffer = fs.readFileSync(filePath);
	let bufStringArr  = readBuffer.toString().split('\n');
	console.log(bufStringArr);
	console.log(bufStringArr.length-1);

	return (bufStringArr.length-1);
}




//readString(process.argv[2]);

module.exports = readString;

