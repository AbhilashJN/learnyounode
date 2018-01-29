let fs = require('fs');
let path = require('path');

let filterExtension = (pathName, extension, callback) => {
	fs.readdir(pathName, (error, names) => {
        
		if (error) {
			return callback(error);
		}
        
        
		let filteredNames = names.filter(filename => path.extname(filename) === '.'+extension);
        
		return callback(null, filteredNames);
	});
};

module.exports = filterExtension;