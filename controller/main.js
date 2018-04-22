var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){res.send('Hello, You\'re in the main')});

module.exports = router;