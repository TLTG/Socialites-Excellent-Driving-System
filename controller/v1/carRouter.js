//Car Router
var router = require('express').Router();
//Car Middelware
var middleware = require('../../middleware/lib/car');

var auth = require('../../middleware/authentication');

router.route('/')
    .post(auth.auth, middleware.create)
    .get(middleware.get);
router.route('/:id')
    .put(auth.auth, middleware.update)
    .get(middleware.get)
    .delete(auth.auth, middleware.delete);
router.route('/:id/defect')
    .get(middleware.getDefect)
    .post(middleware.addDefect)
    .delete(middleware.delDefect);
router.route('/:id/:field')
    .get(middleware.get)
    .put(auth.auth, middleware.update);

module.exports = router;