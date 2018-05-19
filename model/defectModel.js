var db = require('./db');
var ModelModule = require('./model');
var table = "defect";

var Defect = Object.create(ModelModule);
Defect.table = table;
Defect.db = db;

//
Defect.getListByID = function(id, cb){
    var sql = "SELECT * FROM " + table + " WHERE vehicle = ?";
    this.db.get().query(sql, [id], function(err, result){
        if(err) return cb(err);
        cb(null, result);
    });
}

module.exports = Defect;