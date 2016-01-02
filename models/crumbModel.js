var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var crumbSchema = new Schema({
  "latitude": Number,
  "longitude": Number,
});

module.exports = mongoose.model('crumb', crumbSchema);