var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Portfolio' });
});

/* GET test page. */
router.get('/banner', function(req, res, next) {
  res.render('banner', 
    { title: 'Sourabh Dudakiya', 
      designation: 'Creative Head'
  } );
});

/* GET About Me page. */
router.get('/about', function(req, res, next) {
  res.render('about');
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects');
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.send('Services Page');
});

/* GET Contact Me page. */
router.get('/contactme', function(req, res, next) {
  res.send('Contact Me Page');
});

module.exports = router;
