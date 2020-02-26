const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create,
    show
}

function show(req, res) {
    Flight.findById(req.params,id, function(err, flight){
        res.render('flights/index')
    });
}

function index(req, res){
    Flight.find({}, function(err, flights){
        if (err) return next(err);
        res.render('flights/index', {flights})
  });
}

function newFlight(req, res){
    res.render('flights/new')
}

function create(req, res){
    console.log(req.body);
    const flight = new Flight(req.body);
    flight.save(function(err){
        if (err) return res.render('flights/new')
        res.redirect('/flights');
    })
}