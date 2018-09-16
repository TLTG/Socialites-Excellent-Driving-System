var router = require('express').Router();
var middleware = require('../../middleware/lib/faq');
var auth = require('../../middleware/authentication');

router.route('/list/label')
    .get(middleware.getFaqLabelList);
router.route('/list/:id')
    .get(middleware.getFaqList);
router.route('/view/:id')
    .get(middleware.viewFaqQa);
router.route('/qa')
    .post(auth.auth, middleware.addFaqQa);
router.route('/qa/:id')
    .put(middleware.update);
router.route('/label/:id')
    .put(middleware.editLabel);
router.route('/')
    .post(auth.auth, middleware.create);

module.exports = router;