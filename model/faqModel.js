var db = require('./db');
var ModelModule = require('./model');
var table = "faq";

var Faq = {};
Faq = Object.create(ModelModule);
Faq.table = "faq";
Faq.db = db;

var FaqLabel = {};
FaqLabel = Object.create(ModelModule);
FaqLabel.table = "faqlabel";
FaqLabel.db = db;

//Business Logic Below:
Faq.addFaqLabel = function (data, cb){
    FaqLabel.create(data,cb);
}

Faq.addFaqQa = function (data, cb){
    Faq.create(data,cb);
}

Faq.getFaqLabelList = function(data, cb){
    var sql = "SELECT * FROM faqlabel WHERE status = 1 ORDER BY label";
    db.get().query(sql, function(err, result){
        if(err) return cb(err);
        if(result.length == 0) return cb(null, []);
        if(err) return cb(err);
        cb(null, result);
    });
}

Faq.getFaqList = function(faqID, cb){
    var sql = "SELECT * FROM faq WHERE status = 1 and faqLabelID = ? ORDER BY question";
    db.get().query(sql, [faqID], function(err, result){
        if(err) return cb(err);
        if(result.length == 0) return cb(null, []);
        if(err) return cb(err);
        cb(null, result);
    });
}

Faq.viewFaqQa = function(faqQaID, cb){
    var sql = "SELECT * FROM faq WHERE status = 1 AND id = ?";
    db.get().query(sql, [faqQaID], function(err, result){
        if(err) return cb(err);
        if(result.length == 0) return cb(null, []);
        if(err) return cb(err);
        cb(null, result);
    });
}

Faq.editLabel = function(id, data, cb){
    var sql = "UPDATE " + FaqLabel.table + " SET label = ?, status = ? WHERE id = ?";
    db.get().query(sql, [data.label, data.status, id], function(err, result){
        if(err) return cb(err);
        cb(null, true);
    });
}

module.exports = Faq;