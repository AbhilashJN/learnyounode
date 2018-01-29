let net = require('net');
let port = process.argv[2];

let server = net.createServer((socket)=>{
	let currDate = new Date();
	let formattedDate = '';
	formattedDate += currDate.getFullYear().toString();
	formattedDate += '-' +(currDate.getMonth() <9 ? '0'+(currDate.getMonth()+1) : (currDate.getMonth()+1).toString());
	formattedDate += '-' + (currDate.getDate() <10 ? '0'+currDate.getDate() : currDate.getDate().toString());
	formattedDate += ' ' + (currDate.getHours() <10 ? '0'+currDate.getHours() : currDate.getHours().toString());
	formattedDate += ':' + (currDate.getMinutes() <10 ? '0'+currDate.getMinutes() : currDate.getMinutes().toString());
	formattedDate += '\n';
	socket.write(formattedDate);
	socket.end();
    
});

server.listen(port);