var db = require('./db');
var ModelModule = require('./model');
var table = "account";
var paymentTable = "payment";
var generator = require('../bin/util/tokenGenerator');
var validation = require('../bin/util/validation');
var valid = new validation();

var Account = {};
Account = Object.create(ModelModule);
Account.table = table;
Account.db = db;

Account.getBalance = function(ORno){
    return new Promise(function(resolve, reject){
        var sql = "SELECT balance, transaction, data, price FROM "+ table +" WHERE ORno = ?";
        db.get().query(sql, [ORno], function(err, result){
            if(err) return reject(err);
            resolve(result[0]);
        });
    });
};

Account.addBill = function(transaction,transData, feeType, bill, cb){
    var randPost = generator.generateToken(9);
    var datePre = Date.parse("today").toString("yyMMdd");

    var data = [""];
    data.push(datePre+randPost);
    data.push(transaction);
    data.push(JSON.stringify(transData));
    data.push(feeType == "online" ? 2 : 1);
    data.push(bill);
    data.push(bill);

    valid.checkUndef(data, function(passed){
        if(passed){
            data.push(null);
            Account.create(data, function(err,result){
                if(err) return cb(err);
                cb(null,{id: result.insertId, ORid: datePre+randPost});
            });
        }else{
            cb(new Error("Invalid data"));
        }
    });
};

Account.addPayment = function(ORnum, amount, cb){
    this.getBalance(ORnum).catch(cb).then(function(transaction){
        if(parseFloat(transaction.balance) > 0){
            var balance = parseFloat(transaction.balance) - parseFloat(amount);
            var excess = 0;
            if(balance < 0){
                excess = (balance) * -1;
                balance = 0;
            }
            var data = [ORnum, transaction.balance, amount, balance];
            var sql = "INSERT INTO " + paymentTable + "(transactionID,bill,pay,balance) VALUES(?,?,?,?)";
            db.get().query(sql, data, function(err, result){
                if(err) return cb(err);
                if(balance != 0){
                    cb(null, {status: 2, detail:"Balance Left", balance: balance});
                }else{
                    cb(null, {status: 1, detail:"Paid", transactionID: result.insertId, excess: excess});
                }
                sql = "UPDATE " + table + " SET balance = ? WHERE ORno = ?";
                db.get().query(sql,[balance, ORnum], function(err){
                    if(err) return cb(err);
                });
            });
        }else{
            cb(null, {status: 0, detail: "No balance Left"});
        }
    });
};

Account.getEnrollBal = function(ORnum){
    return new Promise(function(resolve, reject){
        var sql = "SELECT balance, transaction, data, price FROM "+ table +" WHERE ORno = ?";
        db.get().query(sql, [ORnum], function(err, transaction){
            if(err) return reject(err);
            var course = require('./lessonModel');
            var transData = JSON.parse(transaction[0].data);
            var total = 0;
            var output = {
                course: [],
                total: 0,
                overall: 0,
            };
            var query = [];
            transData.enrolled.forEach((e,i)=>{
                var callback = new Promise((resolve1, reject1)=>{
                    course.getCourse(e.course, function(error, courseData){
                        if(error) return reject1(error);
                        output.course.push({id: e.course, special: e.special, price: courseData.amount, trans: courseData.carType, duration: courseData.days});
                        var amount = parseFloat(courseData.amount);
                        total += e.special ? (amount * 2) : amount;
                        resolve1();
                    });
                });
                query.push(callback);
                if(i == transData.enrolled.length-1){
                    Promise.all(query).catch(reject).then(function(){
                        output.overall = transaction[0].price;
                        output.total = total;
                        resolve(output);
                    });
                }
            });
        });
    });
};

Account.getTransactions = function(ORnum){
    return new Promise((resolve, reject)=>{
        var sql = "SELECT * FROM " + paymentTable + " WHERE transactionID = ? ORDER BY datePay DESC";
        db.get().query(sql, [ORnum], function(err, result){
            if(err) return reject(err);
            if(result.length == 0) return resolve(null);
            var accSummary = {
                transaction: [],
                balance: 0,
                bill: 0
            };
            accSummary.transaction = result;
            accSummary.balance = result[0].balance;
            resolve(accSummary);
        });
    });
};

Account.getStudentTransactions = function(studID, cb){
    var sql = "SELECT acc.* FROM enrollment en, account acc WHERE en.accountID = acc.ORno AND en.studID = ?";
    db.get().query(sql, [studID], function(err, result){
        if(err) return cb(err);
        cb(null, result)
    });
}

module.exports = Account;