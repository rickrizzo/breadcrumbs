var crumbModel = require('../models/crumbModel.js');

module.exports = {
  showAll: function(req, res) {
    crumbModel.find(function(err, crumbs) {
      if(err) {
        return res.status(500).json({
          message: 'Error getting crumbs',
          error: err
        });
      }
      return res.json(crumbs)
    });
  },
  create: function(req, res) {
    var crumb = new crumbModel({
      name : req.body.name,
      latitude : req.body.lat,
      longitude : req.body.long
    });
    
    crumb.save(function(err, crumb) {
      if(err) {
        return res.status(500).json({
          message: 'Error saving crumb',
          error: err
        });
      }
      return res.json({
        message: 'saved',
        _id: crumb._id
      });
    });
  },
  delete: function(req, res) {
    crumbModel.remove({
      _id : req.params.crumb_id
    }, function(err, crumb) {
      if(err) {
        return res.status(500).json({
          message: 'Error deleting crumb',
          error: err
        });
      }
      return res.json(crumbs);
    });
  },
  deleteAll: function(req, res) {
    crumbModel.remove( function(err, removed) {
      if(err) {
        return res.status(500).json({
          message: 'Error deleting all crumbs',
          error: err
        });
      }
      return res.status(200).json({
        message: 'All Entries Deleted',
        count: removed
      });
    });
  }
};