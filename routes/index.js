var express = require('express');
var router = express.Router();

/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Simranjit Kaur', designation: 'Creative Head' });
});

/* GET Banner page. */
router.get('/banner', function(req, res, next) {
  res.render('banner', 
    { title: 'Simranjit Kaur', 
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
  res.render('services');
});

/* GET Contact Me page. */
router.get('/contact', function(req, res, next) {
  res.render('contact');
});

module.exports = router;