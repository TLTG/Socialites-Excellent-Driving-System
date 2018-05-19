var db = require('./db');
var ModelModule = require('./model');
var table = "account";

var Account = Object.create(ModelModule);
Account.table = table;
Account.db = db;

//

module.exports = new Account(table, db);