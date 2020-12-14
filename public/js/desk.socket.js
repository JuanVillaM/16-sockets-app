// Command for get connected
var socket = io();

var searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has('desk')) {
    window.location = 'index.html';
    throw new Error('Desk required, we need it.');
}

var desk = searchParams.get('desk');
var label = $('small');


console.log(desk);

$('h1').text('Desk: ' + desk);

$('button').on('click', function() {

    socket.emit('attendTicket', { desk: desk }, function(resp) {

        if (resp === 'There are not Tickets') {
            label.text(resp);
            return;
        }

        label.text('Ticket: ' + resp.number);

    });

});