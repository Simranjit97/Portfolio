/*
File name: Index.js 
Author's: Simranjit 
Web site name: https://rocky-waters-41514.herokuapp.com/
File description: Consists of all the routes for the portfolio assignment.
*/

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
  // console.log(req.route.path)
  if(req.route.path === '/about')
  res.render('about', { header: 1});
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  if(req.route.path === '/projects')
  res.render('projects', { header: 1 });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  if(req.route.path === '/services')
  res.render('services', { header: 1 });
});

/* GET Contact Me page. */
router.get('/contact', function(req, res, next) {
  if(req.route.path === '/contact')  
  res.render('contact', {header: 1});
});

module.exports = router;