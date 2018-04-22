var mysql = require('mysql');

var dbstate = {
  pool: null,
  mode: null,
}

var production_db = "", test_db = "";

exports.MODE_PRODUCTION = 'mode_production';
exports.MODE_TEST = 'mode_test';

exports.connect = function (mode,done){
  dbstate.pool = mysql.createPool({
    connection: 20,
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: mode === exports.MODE_PRODUCTION ? production_db : test_db
  });

  dbstate.mode = mode;

  dbstate.pool.getConnection(function(err, con){
    if(err) return done(err);
    con.release();
    done(null);
  }); 
}

exports.get = function() {
  return dbstate.pool;
}