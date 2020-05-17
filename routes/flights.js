var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

router.get('/', flightsCtrl.index);
router.get('/flights/new', flightsCtrl.new);
router.get('/flights/:id', flightsCtrl.show);
router.get('/flights/:id/edit', flightsCtrl.edit);
// router.put('/:id', flightsCtrl.update);
router.post('/flights', flightsCtrl.create);
router.delete('/flights/:id', flightsCtrl.delete);

module.exports = router;