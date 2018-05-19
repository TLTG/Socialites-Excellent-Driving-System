var db = require('./db');
var ModelModule = require('./model');
var table = "lesson";

var Lesson = Object.create(ModelModule);
Lesson.table = table;
Lesson.db = db;

//Business Logic Code:

module.exports = Lesson;