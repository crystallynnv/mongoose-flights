const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    new: newFlight,
    create,
    show,
    delete: deleteOne,
    edit,
}


function edit(req, res) {
    Flight.findById(req.params.id, function(err, flight){
    res.render('flights/edit', {flight})
    })
}

function deleteOne(req, res) {
    Flight.findByIdAndDelete(req.params.id, function(err, flight){
        res.redirect('/flights/index', {flight})
    })
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight){
        Ticket.find({flight: flight._id}, function(err, tickets){
            res.render(`flights/show`, {flight, tickets})
        })
    });
}

function index(req, res){
    Flight.find({}, function(err, flights){
        if (err) return next(err);
        res.render('flights/index', {flights})
  });
}

function newFlight(req, res){
    res.render('flights/new');
}

function create(req, res){

    const flight = new Flight(req.body);
    flight.save(function(err){
        if (err) return res.render('/new')
        res.redirect('/');
    })
}