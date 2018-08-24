var router = require('express').Router();
var scheduler = require('../../middleware/lib/schedule');
var auth = require('../../middleware/authentication');

router.get('/calendar', auth.auth, scheduler.calendar);

router.get('/inst', auth.auth, scheduler.getFreeInst);

router.get('/hours/:id', auth.studentAuth, scheduler.getStudHour);

router.route('/preference')
    .get(auth.studentAuth, scheduler.getPreference)
    .put(auth.studentAuth, scheduler.changePref);

router.route('/check')
    .get(auth.auth, scheduler.schedAvailability);

//router.get('/testAutoSched', scheduler.testAutoSched);

router.route('/')
    .get(scheduler.getSched)
    .put(auth.auth, scheduler.updateSchedule);

router.route('/:id')
    .patch(scheduler.removeSchedFromCalendar)
    .put(scheduler.assignSched);

module.exports = router;