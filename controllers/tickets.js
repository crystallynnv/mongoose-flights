const Flight = require('../models/flight');
// const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    // create
}

function newTicket(req, res) {
    res.render('tickets/new');
}

// function create(req, res) {
//     Ticket.
// }