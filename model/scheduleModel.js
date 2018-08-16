var db = require('./db');
var table = "schedule";

var businessHours = {
    opening: '9:00',
    closing: '5:30',
    break: [{start: '12:00', end: '1:30'}],
};

var Timeline = function(options){
    var self = this;

    var convertToTime = function(strtime){
        var time = strtime.split(':');
        return {hour:parseInt(time[0]), minute: parseInt(time[1])};
    };
    var addTime = function(time, duration){
        var minutes = time.minute + duration;
        var hour = parseInt(time.hour + (minutes / 60));
        return {hour: hour, minutes: (minutes % 60)};
    };
    var getTimeInMinute = function(time){
        var minute = (time.hour * 60);
        minute += time.minute;
        return minute;
    };

    var currentTime = '00:00';
    var totalMinute = 1440;
    var occupyTime = 0;
    var freeTime = 1440;
    var events = [];
    var start = options.start ? convertToTime(options.start) : convertToTime('00:00');
    var end = options.end ? convertToTime(options.end) : convertToTime('23:59');
    var breakTime = options.break ? options.break : [];

    this.reserveTime = function(startTime, duration){
        var _startTime = convertToTime(startTime);
        var _end = addTime(startTime,parseInt(duration));
        freeTime -= parseInt(duration);
        events.push({id: getTimeInMinute(convertToTime(currentTime)), start: _startTime, end: _end, duration: parseInt(duration)});
    };

    this.getFreeTime = function(duration){
        if(duration){
            return (freeTime >= duration ? freeTime : false);
        }else{
            return freeTime;
        }
    };
}

var Model = {}

Model.create = function (data = [], cb = (error=new Error, result=[])=>{}) {
    var sql = "INSERT INTO `schedule` (`date`, `time`, `hour`, `studentID`, `instructorID`, `branchID`) VALUES (?, ?, ?, ?, ?, ?);";
    db.get().query(sql, data, function(err, result){
        if(err) return cb(err);
        cb(null, true);
    });
}

Model.get = function (id, field, cd) {
    if (typeof field == "function") {
        cb = field;
        field = null;
    }
    var sql = "";
    if (field == null) {
        sql = "SELECT * FROM schedule WHERE id = ?";
    } else {
        field = field.replace(';', '');
        sql = "SELECT " + field + " as field FROM schedule WHERE id = ?";
    }
    db.get().query(sql, [id], function (err, result) {
        if (err) return cb(err);
        cb(null, field == null ? result[0] : result[0].field);
    });
}

Model.getAll = function(id, cb){
    var sql = "SELECT * FROM schedule WHERE id = ?";
    db.get().query(sql, [id], function (err, result) {
        if (err) return cb(err);
        cb(null, result[0]);
    });
}

Model.getList = function(offset, limit, cb){
    var sql = "SELECT * FROM schedule WHERE id < ? ORDER BY id DESC LIMIT ?";
    db.get().query(sql, [offset, limit], function(err, result){
        if(err) return cb(err);
        cb(null, result[0]);
    });
}

Model.update = function (id, param, field, cb) {
    if (typeof field == "function") {
        cb = field;
        field = null;
    }
    var sql = "";
    var data = param;
    if (field == null) {
        sql = "UPDATE `schedule` SET `date`= ?, `time`= ?, `hour`= ?, `studentID`= ?, `instructorID`= ?, `branchID`= ? WHERE `id`= ?";
        data.push(id);
    } else {
        field = field.replace(';', '');        
        sql = "UPDATE `schedule` SET " + field + " = ? WHERE `id` = ?";
        data = [param, id]
    }
    db.get().query(sql, data, function (err, result) {
        if (err) return cb(err);
        cb(null, true);
    });
}

Model.delete = function (id, cb) {
    //Still ondev
}

Model.getAvailable = function(id, cb){
    var sql = "SELECT * FROM "+ table +" WHERE studID = ? AND status = 1";
    db.get().query(sql, [id], function(err, result){
        if(err) return cb(err);
        cb(null, result);
    });
};

Model.getAssigned = function(id, cb){
    var sql = "SELECT * FROM "+ table +" WHERE studID = ? AND status > 1";
    db.get().query(sql, [id], function(err, result){
        if(err) return cb(err);
        cb(null, result);
    });
};

Model.removeSched = function(id, cb){
    var sql = "UPDATE " + table + " SET status = 1 WHERE id = ?";
    db.get().query(sql, [id], function(err){
        if(err) return cb(err);
        cb(null);
    });
};

Model.assignSched = function(id, cb){
    var sql = "UPDATE " + table + " SET status = 2 WHERE id = ?";
    db.get().query(sql, [id], function(err){
        if(err) return cb(err);
        cb(null);
    });
};

Model.autoAssignSched = function(studID){
    return new Promise((resolve, reject)=>{
        var days = ['','monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
        var nextWeek = Date.parse('next sunday');

        var studentData;

        var getStudent = new Promise((ok, not)=>{
            var studentModel = require('./studentModel');
            studentModel.getData(studID, function(err, student){
                if(err) return not(err);
                studentData = student;
                ok(true);
            });
        });

        var assignNextWeek = new Promise((ok,not)=>{
            var hours = parseInt(studentData.hours);
            var prefdays = JSON.parse(studentData.prefDays);
            var pos = 0;
            for(var x=0; x<hours; x++){
                if(prefdays[pos] <= 0){ //for security reason, preventing invalid data from crashing the system
                    prefdays[pos] = 1;
                }
                var nextDay = Date.parse('next ' + days[prefdays[pos]]);
                if(Date.compare(nextDay,nextWeek) >= 0){

                }
            }
        });

    });
};

Model.getSchedOnDay = function(branch, day){
    return new Promise((resolve, reject)=>{
        var sql = "SELECT id, date, time FROM " + table + " WHERE branch = ? AND status = 2 AND date = ? ORDER BY time ASC";
        db.get().query(sql, [branch, day.toString('yyyy-MM-dd')], function(err, result){
            if(err) return reject(err);
            resolve(result);
        });
    });
};

Model.getAvailableSchedOnDay = function(branch, weekday){
    return new Promise((resolve, reject)=>{
        var nextWeek = Date.parse('next sunday');
        var nextDay = Date.parse('next ' + weekday);
        if(Date.compare(nextDay, nextWeek) == -1){
            nextDay.addWeeks(1);
        }
        var getFreeOnDay = function(){
            Model.getSchedOnDay(branch, nextDay).then(function(schedules){
                var timeline = [];
                schedules.forEach((e,i)=>{
                    
                });
            }).catch(reject);
        }
    });
};

module.exports = Model;