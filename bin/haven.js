/* 
*   haven module, design to save the system from failing.
*   created by: CPRT
*/
var logger = require('./logger');

var haven = function(){
    this.cluster = require('cluster');
};

haven.prototype.start = function(cb){
    var self = this;
    
    process.on('uncaughtException', function(err){
        /* SYSTEM BACKUP PROCESS   */
        process.exit(1);
    });

    if(this.cluster.isMaster){
        this.cluster.fork();
        this.cluster.on('exit', function(child, code, signal){
            if(code != 2){
                logger.errLogger(new Error('Uncaught Exception Occur.').stack);
                console.log('[SERVER] System Crash Restarting...');
                self.cluster.fork();
            }
        });
    }
    if(this.cluster.isWorker){
        cb();
    }
};

module.exports = haven;