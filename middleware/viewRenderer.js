/* 
    viewRenderer.js, dito lahat ng rendering ng ejs.
    note: always export middleware renderer.
*/

var auth = require('./authentication');

exports.admin = function (req, res, next){
    if (res.locals.authenticated == 1) {
        var user = auth.getUser(req.sessionID);
        getUserInfo(user, function(err, data){
            if(err) return next(err);
            if(req.xhr == true){
                res.status(200).send({sucess: true, detail: "Successfully Logged In!"});
            }else{
                res.render('admin/index', {info:data[0]});
            }
        });
    }else {
        res.render('admin/login');
    }
}

exports.user = function(req, res, next){
    var WebModel = require('../model/webModel');
    var Car = require('../model/vehicleModel');
    new WebModel().getLicenseApply(function(err, data){
        if(err) return next(err);
        Car.getListModel(function(errr,vehicle){
            if(errr) return next(errr);
            var login = res.locals.login ? res.locals.login : '';
            res.render('main/index',{title: 'Socialites Excellent Driving', login: login, license: data, car: vehicle});
        });
    });
}

exports.student = function(req, res, next){
    var WebModel = require('../model/webModel');
    var courses = require ('../model/lessonModel');
    var schedule = require('../model/scheduleModel');
    var grades = require ('../model/evaluationModel');
    // var ejs = require ('../bin/ejs');
    if(req.session.studID != -1){
        res.locals.title = 'Socialites Excellent Driving';
        res.locals.instID = req.session.studID;
        var getSched = new Promise((resolve, reject)=>{
            schedule.getAvailable(req.session.studID, function(err, sched){
                if(err) return reject(err);
                res.locals.schedule = sched;
                resolve(sched);
            });
        });
        var getLicense = new Promise((resolve, reject)=>{
            new WebModel().getLicenseApply(function(err, data){
                if(err) return reject(err);
                res.locals.license = data;
                resolve(data);
            });
        });
        var getCourse = new Promise((resolve, reject)=>{
            courses.getCourseEnrolled(req.session.studID, function(err, crs){
                if(err) return reject(err);
                res.locals.courses = crs;
                resolve(crs);
            });
        });
        var getGradesStudent = new Promise((resolve, reject)=>{
            grades.getGradesStudent(req.session.studID, function(err, crs){
                if(err) return reject(err);
                res.locals.gradesStud = crs;
                resolve(crs);
            });
        });
        var getInstructors = new Promise((resolve, reject)=>{
            grades.getAssignedInst(req.session.studID, function(err, inst){
                if(err) return reject(err);
                res.locals.instructors = inst;
                resolve(inst);
            });
        });
        var getEvalStud = new Promise((resolve, reject)=>{
            grades.getEvalStud(req.session.studID, function(err, eval){
                if(err) return reject(err);
                res.locals.evalStud = eval;
                resolve(eval);
            });
        });
        Promise.all([getSched, getLicense, getCourse, getGradesStudent, getInstructors, getEvalStud]).then((results)=>{
            res.render('student/index', res.locals);
        }).catch(next);
    }else{
        res.locals.login = 'loginStudent';
        exports.user(req,res,next);
    }
}

exports.instructor = function(req, res, next){
    var students = require ('../model/lessonModel');
    var schedule = require ('../model/scheduleModel');
    var grades = require ('../model/evaluationModel');
    if(req.session.instID != -1){
        res.locals.title = 'Socialites Excellent Driving';
        res.locals.instID = req.session.instID;
        var getStudents = new Promise((resolve, reject)=>{
            students.getHandledStudents(req.session.instID, function(err, stud){
                if(err) return reject(err);
                res.locals.students = stud;
                resolve(stud);
            });
        });
        var getEvalInst = new Promise((resolve, reject)=>{
            grades.getEvalInst(req.session.instID, function(err, evalI){
                if(err) return reject(err);
                res.locals.evaluationI = evalI;
                resolve(evalI);
            });
        });
        var getEvalInstNumber = new Promise((resolve, reject)=>{
            grades.getEvalInstNumber(req.session.instID, function(err, evalI){
                if(err) return reject(err);
                res.locals.evaluationINum = evalI;
                resolve(evalI);
            });
        });
        var getGradesInst = new Promise((resolve, reject)=>{
            grades.getGradesInst(req.session.instID, function(err, crs){
                if(err) return reject(err);
                res.locals.gradesInst = crs;
                resolve(crs);
            });
        });
        var getGradesSum = new Promise((resolve, reject)=>{
            grades.getGradesSum(req.session.instID, function(err, sum){
                if(err) return reject(err);
                res.locals.gradeSum = sum;
                resolve(sum);
            });
        });
        var getAvailableLessons = new Promise((resolve, reject)=>{
            students.getAvailableLessons(req.session.instID, function(err, lessonsAv){
                if(err) return reject(err);
                res.locals.avLess = lessonsAv;
                resolve(lessonsAv);
            });
        });
        Promise.all([getStudents, getEvalInst, getEvalInstNumber, getGradesInst, getGradesSum, getAvailableLessons]).then((results)=>{
            res.render('instructor/index', res.locals);
        }).catch(next);
    }else{
        res.locals.login = 'loginInst';
        exports.user(req,res,next);
    }
}

exports.branch = function(req, res, next){
    res.render('branch/index',{title: 'Socialites Excellent Driving'});
}

var getUserInfo = function(data, cb){ //REPAIR THIS WHOLE UNIT!!!! 
    var models = ['','adminModel', 'studentModel', 'instructorModel', 'branchModel'];
    var model = require('../model/' + models[data.accType]);
    model.getInfo(data.accID, function(err, result){
        if(err) return cb(err);
        cb(null, result);
    });
}

exports.error = function(req, res, next){
    res.render("admin/error-partials/error", res.locals.data);
}
/*  //SD: Ano ganap ba dito? Explain ko...
    
    Para magets mo i'll explain how middleware works.
    -Middleware functions are basically functions lang meron lang silang fancy name kasi...
        Ginagamit sila for processing request.
    -Middleware works like a pipe and request are water. Dadaan yung request sa mga middlewares,
    and middleware process it before going to next middleware.

    Soo ganito structure nya: 
        var middlerware = function(req, res, next){ 
            //Some processing here
        }
    Where: 
        req = request
        res = response
        next = function that calls the next middleware.
        
    Pagtapus kana sa processing ng request dun mo na gagamit si res,
    sa file na to, puro rendering lang ganap. soo mostly makikita mo: res.render(...);

    Soo for you makapagrender ng matinong page. may dalawang parameters si render();
    actually tatlo talaga kaso nevermind mo na yung isa, callback kasi yun.
    
        res.render(view,data);

    Where:
        view = path kay ejs. sample: 'admin/index' or 'main/index'
        data = data na iinclude mo sa pagrender ni ejs.

    P.S: di ko na i-eexplain fully sila request and response check mo nalang yung express API website
*/