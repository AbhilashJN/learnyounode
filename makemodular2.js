let filterModule = require('./makemodular');

let printConsole = (pathName, extension, callback) => {
    
	//pathName = process.argv[2];
	//extension = process.argv[3];
    
    
	filterModule(pathName, extension, (err, data) => {
		if (err) {
			
			callback(err,null);
			return;
		} 
        
		else {
            
			
			//data.forEach(name => console.log(name));
			callback(null, data);
		}
	});
};

module.exports = printConsole;



//printConsole();