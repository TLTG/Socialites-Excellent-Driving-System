var student = require('../../model/studentModel');

exports.create = function(req, res, next){
    var data = req.body["data[]"];
    //VALIDATIONS 
    data.unshift(null);
    student.create(data,function(err, result){
        if(err) return next(err);
        res.status(200).send({detail: "Successfully Added!"});
    });
}

exports.get = function(req, res, next){
    if(res.locals.authenticated == 0) return next();    
    var query = Object.keys(req.query).length ? req.query : {};
    var param = Object.keys(req.params).length ? req.params : null;
    if(param){
        /* if(query != {}){
            res.status(403).send({}); // delete this after implementation
        }else{ */
            var field = (param.field == undefined ? null : param.field);
            student.get(param.id, field, function(err, result){
                if(err) return next(err);
                res.status(200).send({success: true, data: result});                
            });
        //}
    }else{
        var offset = query.offset == undefined ? 0 : parseInt(query.offset);
        var limit = query.limit == undefined ? 10 : parseInt(query.limit);
        var type = query.filter == undefined ? 0 : parseInt(query.filter);
        student.getList(offset, limit, type, function(err, result){
            if(err) return next(err);
            res.status(200).send({success: true, data: result});
        });
    }
}

exports.update = function(req, res, next){
    var id = req.params.id;
    var data = req.params.data;
    var field = req.params.field;
    
    if(field == undefined){
        student.update(id, data, function(err, result){
            if(err) return next(new Error(err));
            res.status(200).send({detail: "Successfully Added!"});
        });
    }else{
        field = field.replace(';', '');        
        student.update(id, data, field, function(err, result){
            if(err) return next(new Error(err));
            res.status(200).send({detail: "Successfully Added!"});
        });
    }
}

exports.updateAll = function(req, res, next){
    var data = [];
    //VALIDATIONS
    
    student.updateAll(data, function(err, result){
       if(err) return next(new Error(err));
       res.status(200).send({detail: "Successfullly Updated!"}); 
    });
}

exports.del = function(req, res, next){
    if(res.locals.authenticated == 0) return next();    
    var id = req.params.id;
    student.delete(id, "status", function(err){
        if(err) return next(err);
        res.status(200).send({success: true, detail:"Successfully Deactivate!"});
    });
}

exports.delAll = function(req, res, next){}

exports.preReg = function(req, res, next){
    var data = [null];
    data.push(req.body.data);
    data.push(null);
    data.push(1);
    student.preRegStud(data, function(err, done){
        if(err) return next(err);
        res.status(200).send({success: true, detail: "Successfully Added!"});
    });
}