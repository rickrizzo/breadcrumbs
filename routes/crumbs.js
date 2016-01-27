var express = require('express');
var router = express.Router();
var crumbController = require('../controllers/crumbController');


// add crumb
router.post('/add', function(req, res, next) {
  crumbController.create(req, res);
});

// view crumbs
router.get('/', function(req, res, next) {
  crumbController.showAll(req, res);
});

// draw map
router.get('/map', function(req, res, next) {

});

module.exports = router;