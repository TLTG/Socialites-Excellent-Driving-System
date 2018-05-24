var db = require('./db');
var ModelModule = require('./model');
var table = "lesson";

var Lesson = {};
Lesson = Object.create(ModelModule);
Lesson.table = table;
Lesson.db = db;

var Course = {};
Course = Object.create(ModelModule);
Course.table = "course";
Course.db = db;

Lesson.addCourse = function(data, cb){
    Course.create(data, cb);
}

Lesson.editCourse = function(id, data, cb){
    Course.update(id, data, null, cb);
}

Lesson.delCourse = function(id, cb){
    Course.delete(id, "status", cb);
}

Lesson.getListCourse = function(o, l, cb){
    Course.getList(o, l, cb);
}

//Business Logic Code:

module.exports = Lesson;