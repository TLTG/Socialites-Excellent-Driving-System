var expect = require('chai').expect;
require('datejs');
var scheduleModel = require('../model/scheduleModel');
var db = require('../model/db')

describe('Automatic Scheduling', function(){
    it('Get Available Schedule on Specific Day', function(done){
        db.connect(db.MODE_PRODUCTION,(err)=>{});
        var branch = 5;
        var day = 'monday';
        scheduleModel.getAvailableSchedOnDay(branch, day).then(function(result){
            console.log(result,"Date");
            expect(result).not.null;
            done();
        }).catch(function(error){
            expect(error).throws('unhandledrejection');
            done();
        });
    });
});