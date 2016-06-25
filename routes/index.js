var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NYT-React' });
});

router.get('/api/saved', function(req, res, next) {
  res.render('index', { title: 'NYT-React' });
});

router.post('/api/saved', function(req, res, next) {
  res.render('index', { title: 'NYT-React' });
});

router.delete('/api/saved', function(req, res, next) {
  res.render('index', { title: 'NYT-React' });
});

module.exports = router;
