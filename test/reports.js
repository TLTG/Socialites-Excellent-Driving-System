var expect = require('chai').expect;
var db = require('../model/db');
var report = require('../model/reportsModel');
require('datejs');

describe('Reports', function(){
    it('gets all tuition of all frequency', function(done){
        var query = {
            date: "oct 2018",
            freq: "3",
            branch: 1,
        };

        db.connect(db.MODE_PRODUCTION, function(err){
            if(err) return console.error(err, "what");
            
            report.tuition(query, function(err, result, data){
                if(err) return console.error(err);
                console.log(result.total);
            });
        });
    });
});
