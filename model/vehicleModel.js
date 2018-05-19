var db = require('./db');
var modelModule = require('./model');
var Defect = require('./defectModel');
var table = "vehicle";

var Car = Object.create(modelModule);
Car.table = table;
Car.db = db;

//Custom Code:
Car.getDefect = Defect.getListByID;
Car.addDefect = Defect.create;
Car.editDefect = Defect.update;
Car.delDefect = Defect.delete;

module.exports = Car;