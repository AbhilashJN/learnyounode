function moduleRunner(pathName,extension){
    
    
	let filterModule = require('./modular2');




	filterModule(pathName,extension , (err,data)=>{

		if(err)
		{
			return err;
		}
		else
		{
			for(let i=0;i<data.length;i++)
			{
				console.log(data[i]);
			}
		}
	});

}


moduleRunner(process.argv[2],process.argv[3]);

module.exports = moduleRunner;