var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var crumbSchema = new Schema({
  "name": String,
  "latitude": Number,
  "longitude": Number
});

module.exports = mongoose.model('crumb', crumbSchema);