var router = require('express').Router();

//Initial Authentication on admin side to make sure any request made is secured.
router.use(require('../middleware/authentication').auth);

//Routes here.
router.get('/', function(req, res, next){res.send('Hello, You\'re in the admin')});

module.exports = router;