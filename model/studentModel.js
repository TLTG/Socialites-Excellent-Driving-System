var db = require('./db');
var ModelModule = require('./model');
var table = "student";

var Student = Object.create(ModelModule);
Student.table = table;
Student.db = db;

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

module.exports = Student;