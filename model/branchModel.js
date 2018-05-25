var db = require('./db');
var ModelModule = require('./model');
var table = "branch";

var Branch = {};
Branch = Object.create(ModelModule);
Branch.table = table;
Branch.db = db;

//Business Logic Code:
Branch.getList = function(offset, limit, cb){
    var sql = "SELECT * FROM "+ this.table +" WHERE id > ? AND purgeFlag = 1 ORDER BY id ASC LIMIT ?";
    this.db.get().query(sql, [offset, limit], function(err, result){
        if(err) return cb(err);
        cb(null, result);
    });
};

module.exports = Branch;