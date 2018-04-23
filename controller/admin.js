var router = require('express').Router();

//Initial Authentication on admin side to make sure any request made is secured.
router.use(require('../middleware/authentication').auth);

//Routes here.
router.get('/', function(req, res, next){res.render('admin/index',{title: 'Hello world!'})});

module.exports = router;