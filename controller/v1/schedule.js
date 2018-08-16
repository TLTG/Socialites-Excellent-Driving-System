var router = require('express').Router();
var scheduler = require('../../middleware/lib/schedule');
var auth = require('../../middleware/authentication');

router.get('/calendar', scheduler.calendar);

router.route('/preference')
    .get(auth.studentAuth, scheduler.getPreference)
    .put(auth.studentAuth, scheduler.changePref);

router.route('/:id')
    .patch(scheduler.removeSchedFromCalendar)
    .put(scheduler.assignSched);

module.exports = router;