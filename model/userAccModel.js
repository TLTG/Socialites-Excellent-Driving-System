var db = require('./db');
var modelModule = require('./model');
var table = "useraccount";

var UserAccount = Object.create(modelModule);
UserAccount.table = table;
UserAccount.db = db;

//Business Logic Code:

UserAccount.login = function (data, cb) {
    var user = data.username;
    var pass = data.password;
    var sql = "SELECT id, accType FROM "+ table +" WHERE username = ? AND password = SHA1(?)";
    db.get().query(sql, [user, pass], function(err, result){
        if(err) return cb(err);
        cb(null, result[0]);
    });
}

UserAccount.changePass = function(id, pass, cb){
    var sql = "UPDATE `"+ table +"` SET password = SHA1(?) WHERE `id` = ?";
    db.get().query(sql, [pass, id], function(err, result){
        if(err) return cb(err);
        cb(null, result[0]);
    });
}

module.exports = UserAccount;