const { io } = require('../server');

io.on('connection', (cliente) => {
    console.log('User connected');

    cliente.emit('sendMessage', {
        user: 'Admin',
        message: 'Welcome'
    });

    // Listen client
    cliente.on('disconnect', () => {
        console.log('User disconnected');
    });

    // Listen client
    cliente.on('sendMessage', (data, callback) => {

        console.log(data);

        cliente.broadcast.emit('sendMessage', data);


        // if (message.user) {
        //     callback({
        //         resp: 'All Good'
        //     });
        // } else {
        //     callback({
        //         resp: 'All Bad'
        //     });
        // }

    });

});