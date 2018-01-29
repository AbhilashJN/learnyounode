
function filterExtensions(pathName , extension,callback)
{

	let fs = require('fs');

	fs.readdir(pathName , (err,names)=>{
		if(err)
		{	callback(err,null);
			return;
		}
		

		let filteredArr = names.filter( (name)=>{

			let fileName = name.split('.');
			let ext = fileName[fileName.length-1];
			
			return (ext===extension)&& fileName.length>1;

		});
		callback(null,filteredArr);
		
		// for(let i=0;i<filteredArr.length;i++)
		// {
		// 	console.log(filteredArr[i]);
		// }

	});
    
}

module.exports = filterExtensions;

//filterExtensions(process.argv[2],process.argv[3]);

