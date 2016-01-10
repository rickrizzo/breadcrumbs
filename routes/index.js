var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Breadcrumbs',
    ngapp: 'crumbModule',
    angular: '/scripts/angular/angular.min.js',
    scripts: ['javascripts/location.js', 'javascripts/map.js', 'controllers/mainController.js']
  });
});

module.exports = router;
