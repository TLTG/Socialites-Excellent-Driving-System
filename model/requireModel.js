var db = require('./db');
var ModelModule = require('./model');
var table = "requirement";

var PaperRequirement = Object.create(ModelModule);
PaperRequirement.table = table;
PaperRequirement.db = db;

//Business Logic Code:

module.exports = PaperRequirement;