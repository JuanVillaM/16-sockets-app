const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control');

const ticketControl = new TicketControl();

io.on('connection', (client) => {
    client.on('nextTicket', (data, callback) => {
        let next = ticketControl.nextTicket();
        console.log(next);
        callback(next);
    });

    client.emit('actualStatus', {
        actual: ticketControl.getLastTicket(),
        last4: ticketControl.getLast4()
    });

    client.on('attendTicket', (data, callback) => {
        if (!data.desk) {
            return callback({
                err: true,
                message: 'Desk is required'
            });
        }

        let attendTicket = ticketControl.attendTicket(data.desk);

        callback(attendTicket);

        client.broadcast.emit('last4', {
            last4: ticketControl.getLast4()
        });
    });

});