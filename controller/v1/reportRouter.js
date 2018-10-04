var router = require('express').Router();
var middleware = require('../../middleware/lib/reports');
var auth = require('../../middleware/authentication');


router.get('/student', middleware.getStud); //Enrollees, Transferees, Enrolled, Performance Evaluation

router.get('/tuition', middleware.tuition);
router.get('/license', middleware.license);
router.get('/certificate', middleware.certificate);

module.exports = router;