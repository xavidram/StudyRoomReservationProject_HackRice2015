var express = require('express'),
app = express(),
server = require('http').createServer(app),
io = require('socket.io').listen(server);
var SerialPort = require("serialport").SerialPort;

var hasStarted = false;

server.listen(3333);

//if i were to receive data

io.sockets.on('connection', function(socket) {
	if (!hasStarted) {
		serialListener(socket);
	}
});

function serialListener(socket) {
	var serialport = new SerialPort("COM3");
	hasStarted = true;
	serialport.on('open', function(){
	console.log('Serial Port Opend');
	serialport.on('data', function(data){
      console.log(data[0]);
	  
	  if (data[0] == 0) {
		  socket.emit('status-changed', "Reserve Now");
	  } else {
		  socket.emit('status-changed', "Occupied");
	  }
  });
});
}