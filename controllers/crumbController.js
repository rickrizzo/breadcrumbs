var crumbModel = require('../models/crumbModel.js');

module.exports = {
  showAll: function(req, res) {
    crumbModel.find(function(err, crumbs) {
      if(err) {
        return res.json(500, {
          message: 'Error getting crumbs',
          error: err
        });
      }
      return res.json(crumbs)
    });
  },
  create: function(req, res) {
    var crumb = new crumbModel({
      trip : req.body.trip,
      latitude : req.body.lat,
      longitude : req.body.long
    });
    
    crumb.save(function(err, crumb) {
      if(err) {
        return res.json(500, {
          message: 'Error saving crumb',
          error: err
        });
      }
      return res.json({
        message: 'saved',
        _id: crumb._id
      });
    });
  }
};