var router = require('express').Router();
var middleware = require('../../middleware/lib/grades');
var auth = require('../../middleware/authentication');

router.get('/student/:id/sum', middleware.getGradesSum);
router.get('/student/:id/lesson', middleware.getLessonEnrolled);
router.get('/student/:id/sched', middleware.addGradeModal);
router.route('/student/:id')
    .get(middleware.getGradesInst)
    .post(middleware.addGrade);
router.route('/student2/:id')
    .get(middleware.getGradesInst2);
router.route('/student/:id/eval')
    .get(middleware.getEvalStud)
router.route('/stud/:id')
    .get(middleware.getGradesStud)
router.route('/eval/:id')
    .get(middleware.getEvalInstPerc)
router.route('/eval/:id/month')
    .get(middleware.getEvalInstPercMonth)
router.route('/evalInst/:id')
    .get(middleware.getEvalInst)
router.route('/')
    .post(auth.auth, middleware.create)
    .get(middleware.get);
router.route('/:id')
    .put(middleware.update)
    .get(middleware.get)
    .delete(middleware.delete);
router.route('/:id/:field')
    .get(middleware.get)
    .put(middleware.update);

module.exports = router;