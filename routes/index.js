var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  /// {descroption: 'This is the home page'}
  
  res.render('index', { title: 'Teste 1' });
});

module.exports = router;
