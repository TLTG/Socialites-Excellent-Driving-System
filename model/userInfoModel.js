var db = require("./db");
var ModelModule = require("./model");
var table = "userinfo";

var UserInfo = Object.create(ModelModule);
UserInfo.table = table;
UserInfo.db = db;

//Module related functionality:
UserInfo.getInfo = function(accID, cb){
    var sql = "SELECT * FROM " + this.table + " WHERE userAcc = ?";
    db.get().query(sql, [accID], function(err, result){
        if(err) return cb(err);
        cb(null, result);
    });
}

module.exports = UserInfo;