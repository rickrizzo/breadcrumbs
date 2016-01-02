var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Breadcrumbs', scripts: ['javascripts/location.js']});
});

module.exports = router;
