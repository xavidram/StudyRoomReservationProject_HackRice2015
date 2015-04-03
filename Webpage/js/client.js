jQuery(function($) {
	var socket = io.connect('http://localhost:3333');
	var $status = $('#status-label');
	
	socket.on('status-changed', function(data) {
		console.log(data);
		$status.html(data);
	});
});