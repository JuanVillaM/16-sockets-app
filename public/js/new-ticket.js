// Command for get connected
var socket = io();
var label = $('#lblNewTicket');

socket.on('connect', function() {
    console.log('User connected');
});

socket.on('disconnect', function() {
    console.log('User disconnected');
});

socket.on('actualStatus', function(resp) {
    console.log(resp);
    label.text(resp.actual);
});

$('button').on('click', function() {
    socket.emit('nextTicket', null, function(nextTicket) {
        label.text(nextTicket);
    });
});