const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create,
    show,
    delete: deleteOne,
    edit,
    // update,
   
}
// function update(req, res) {

// }


function edit(req, res) {
    Flight.findById(req.params.id, function(err, flight){
    res.render('/flights/edit', {flight})
    })
}

function deleteOne(req, res) {
    Flight.findByIdAndDelete(req.params.id, function(err, flight){
        res.redirect('/flights', {flight})
    })
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight){
        res.render('flights/show', {flight})
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