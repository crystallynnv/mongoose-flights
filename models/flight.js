const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: {
  type: String,
  enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
  }, 
  arrival: {
  type: Date
  }
});

const flightSchema = new Schema({
    airline: {
        type: String,
        enum:['American', 'Southwest', 'United']
    },
    flightNo: {
      type: Number,
      min: 10,
      max: 9999,
      required: true
  },
  departs: {
      type: Date,
      default: function() {
          return new Date().getFullYear() + 1;
      }
  },
  airport: {
      type: String,
      enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
      default: 'DEN'
  },
  destinations: [destinationSchema],
  tickets: [{
      
  }]
})

module.exports = mongoose.model('Flight', flightSchema);