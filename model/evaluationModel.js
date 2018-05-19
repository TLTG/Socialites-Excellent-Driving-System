var db = require('./db');
var ModelModule = require('./model');
var table = "evaluation";

var Evaluation = Object.create(ModelModule);
Evaluation.table = table;
Evaluation.db = db;

//Business Logic Below:

module.exports = Evaluation;