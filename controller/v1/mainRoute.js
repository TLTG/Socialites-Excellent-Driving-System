/*
    mainRoute.js, eto yung main file to call for this version.
    sa admin api lahat ng admin related request(SECURED)    
    where sa public naman lahat ng public request(UNSECURED)
*/
var router = require('express').Router();

//Authentications and Error Handler
var auth = require('../../middleware/authentication');
var err = require('../../middleware/errorHandler');

///=======API routes=========///

//Car Route
var carRoute = require('./carRouter');
router.use('/car', carRoute);

var branchRoute = require('./branchRouter');
router.use('/branch', branchRoute);

var util = require('./utilRouter');
router.use('/util', util);

var web = require('./web');
router.use('/web', web);

var payment = require('./payments');
router.use('/payment', payment);

var schedule = require('./schedule');
router.use('/sched', schedule);

var grade = require('./gradesRoute');
router.use('/grade', grade);

var announce = require('./announcementRoute');
router.use('/announce', announce);

var faq = require('./faqRoute');
router.use('/faq', faq);

var report = require('./reportRouter');
router.use('/report', report);

var notif = require('./notification');
router.use('/notif', auth.auth, notif);

// All routes below are secured with authentication.
router.use(auth.auth, err.error401);

var cert = require('./certRouter');
router.use('/cert', cert);

//Student route
var studentRoute = require('./studentRouter');
router.use('/stud', studentRoute);

//Instructor route
var instructorRoute = require('./instructorRoute');
router.use('/instructor', instructorRoute);

module.exports = router;