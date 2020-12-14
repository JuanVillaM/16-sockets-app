var socket = io();

// Listen
socket.on('connect', function() {
    console.log('Connected to the Server');
});

// Listen
socket.on('disconnect', function() {
    console.log('Conecction losted');
});

// Send
socket.emit('sendMessage', {
    user: 'Juan',
    message: 'Hello'
}, function(resp) {
    console.log('Server response: ', resp);
});

// Listen
socket.on('sendMessage', function(message) {
    console.log(message);
});