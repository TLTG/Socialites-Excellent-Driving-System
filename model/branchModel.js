var db = require('./db');
var ModelModule = require('./model');
var table = "branch";

var Branch = Object.create(ModelModule);
Branch.table = table;
Branch.db = db;

//Business Logic Code:

module.exports = Branch;