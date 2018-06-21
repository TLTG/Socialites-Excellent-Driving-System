var db = require('./db');
var ModelModule = require('./model');
var table = "student";

var Student = {};
Student = Object.create(ModelModule);
Student.table = table;
Student.db = db;

var PreRegister = Object.create(ModelModule);
PreRegister.table = "preRegStudent";
PreRegister.db = db;

//Business Logic Code Below:
Student.getList = function(offset, limit, type, cb){
    var sql = "";
    if(type == 0){
        sql = "CALL getStudList(?,?)";
    }else{
        sql = "CALL getPastStud(?,?)";
    }
    db.get().query(sql, [offset, limit], function(err, result){
        if(err) return cb(err);
        cb(null, result[0]);
    });
}

Student.get = function (id, field, cb) {
    if (typeof field == "function") {
        cb = field;
        field = null;
    }
    var sql = "CALL getStud(?)";
    this.db.get().query(sql, [id], function (err, result) {
        if (err) return cb(null, null);
        if (field == null) {
            cb(null, result[0]);
        } else {
            cb(null, result[0][field]);
        }
    });
}

Student.updateInfo = function(id, data, cb){
    var userinfo = require('../model/userInfoModel');
    userinfo.update(id, data, null, cb);
} 

Student.preRegStud = function(data, cb){
    PreRegister.create(data, cb);
}

Student.preRegDel = function(id, cb){
    PreRegister.delete(id, "status", cb);
}

Student.preRegEdit = function(id, data, cb){
    PreRegister.update(id, data, null, cb);
}

Student.getPreRegList = function(offset, limit, cb){
    var sql = "SELECT * FROM " + PreRegister.table + " WHERE id > ? AND status > 0 ORDER BY id ASC LIMIT ?";
    db.get().query(sql, [offset, limit], function(err,result){
        if(err) return cb(err);
        cb(null, result);
    });
    //PreRegister.getList(offset, limit, cb);
}

var Enroll = {};
Enroll = Object.create(ModelModule);
Enroll.table = "course_enrolled";
Enroll.db = db;

Student.enrollCourse = function(data, cb){
    Enroll.create(data, cb);
};

Student.getStudentByID = function(accID, cb){
    var sql = "SELECT id FROM userinfo WHERE userAcc = ?";
    db.get().query(sql, [accID], function(err, result){
        if(err) return cb(err);
        if(result.length < 1) return cb(null, false);
        sql = "SELECT id FROM student WHERE userInfo = ?";
        db.get().query(sql,[result[0].id],function(err2, result2){
            if(err2) return cb(err2);
            cb(null, result2[0].id);            
        });
    });
};

module.exports = Student;