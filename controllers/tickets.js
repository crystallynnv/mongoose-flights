const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    add
}

function newTicket(req, res) {
        res.render('tickets/new', {id: req.params.id});
}


function add(req, res) {
    console.log(req.body);
    console.log("body!")
    req.body.flight = req.params.id;
    Ticket.create(req.body, function(err, ticket) {
        console.log(ticket);
        console.log('for ticket');
        res.redirect(`/flights/${req.params.id}`)
    })
}

// function create(req, res){
//     console.log(req.body);
//     const flight = new Flight(req.body);
//     flight.save(function(err){
//         if (err) return res.render('flights/new')
//         res.redirect('/flights');
//     })
// }

// function create(req, res) {
//     Flight.findById(req.params.id, function(err, flight) {
//         flight.destinations.push(req.body);
//         flight.save(function(err) {
//             res.redirect(`/flights/${flight._id}`)
//         })
//     });
// }