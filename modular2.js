
function filterExtensions(pathName , extension , callback)
{

	let fs = require('fs');

	fs.readdir(pathName , (err,names)=>{
        
		if(err)
		{
			return callback(err,null);
		}

		let filteredArr = names.filter( (name)=>{

			let fileName = name.split('.');
			let ext = fileName[fileName.length-1];
			
			return (ext===extension) && fileName.length>1;

		});
        
		callback(null,filteredArr);

	});
    
}

module.exports = filterExtensions;


