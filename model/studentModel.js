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
    PreRegister.getList(offset, limit, cb);
}

module.exports = Student;