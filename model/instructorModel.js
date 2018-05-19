var db = require('./db');
var ModelModule = require('./model');
var UserInfo = require('./userInfoModel');
var Vehicle = require('./vehicleModel').table;
var table = "instructor";

//Constructor
var Instructor = Object.create(ModelModule);
Instructor.table = table;
Instructor.db = db;

//Custom codes here: Instructor.prototype

//Override getList() function from parent model class.
Instructor.getList = function(offset, limit, cb){
    var sql = "CALL getInstList(?,?)";
    db.get().query(sql, [offset, limit], function(err, result){
        if(err) return cb(err);
        cb(null, result[0]);
    });
}

Instructor.getInfo = function(accID, cb){
    UserInfo.getInfo(accID, function(err, result){
        if(err) return cb(err);
        cb(null, result);
    });
}

Instructor.get = function (id, field, cb) {
    if (typeof field == "function") {
        cb = field;
        field = null;
    }
    var sql = "CALL getInst(?)";
    this.db.get().query(sql, [id], function (err, result) {
        if (err) return cb(err, null);
        if (field == null) {
            cb(null, result[0]);
        } else {
            if(result[0].length == 0){
                cb(null, []);
            }else{
                cb(null, result[0][0][field]);
            }
        }
    });
}

module.exports = Instructor; //Export model for middleware use.