var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var request = req.query;
  if (Object.keys(request).length) {
    // DO STUFF
    res.send(request);
  } else {
    res.send('see the documentation');
  }
});

module.exports = router;
