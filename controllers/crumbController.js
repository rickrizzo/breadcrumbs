var crumbModel = require('../models/crumbModel.js');

module.exports = {
  create: function(req, res) {
    var crumb = new crumbModel({
      latitude : req.body.lat,
      longitude : req.body.long
    });
    
    crumb.save(function(err, crumb) {
      if(err) {
        return res.json(500, {
          message: 'Error saving car',
          error: err
        });
      }
      return res.json({
        message: 'saved',
        _id: car._id
      });
    });
  }
};