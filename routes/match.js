var express = require('express');
var router = express.Router();

router.get('/new', function(req, res) {
  res.render('match/new');
});

module.exports = router;