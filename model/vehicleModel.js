var db = require('./db');
var modelModule = require('./model');
var Defect = require('./defectModel');
var table = "vehicle";

var Car = {};
Car = Object.create(modelModule);
Car.table = table;
Car.db = db;

//Custom Code:
Car.getDefect = Defect.getListByID;
Car.addDefect = function(data, cb){
    Defect.create(data, cb);
};
Car.delDefect = function(id, purgeFlag, cb){
    Defect.delete(id, purgeFlag, cb);
};

module.exports = Car;