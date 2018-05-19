var car = require('../../model/vehicleModel');

exports.create = function(req, res, next){
    if(res.locals.authenticated == 0) return next();
    //VALIDATIONS
    var dataInput = JSON.parse(req.body.data);
    var data = [null];
    data.push(dataInput.model);
    data.push(dataInput.brand);
    data.push(dataInput.transType);
    data.push(dataInput.plate);
    data.push(null);
    data.push(dataInput.offday);
    data.push(1);

    car.create(data, function(err, result){
        if(err) return next(err);
        res.status(200).send({success: true, detail: "Successfully Created!"});
    });
}

exports.get = function(req, res, next){
    var query = req.query;
    var param = Object.keys(req.params).length ? req.params : null;
    if(param){
        /* if(query){
        }else{ */
            var field = param.field == undefined ? null : param.field;
            car.get(param.id, field, function(err, result){
                if(err) return next(err);
                res.status(200).send({success: true, data: result});                
            });
        //}
    }else{
        var offset = query.offset == undefined ? 0 : parseInt(query.offset);
        var limit = query.limit == undefined ? 10 : parseInt(query.limit);
        car.getList(offset, limit, function(err, result){
            if(err) return next(err);
            res.status(200).send({success: true, data: result});
        });
    }
}

exports.update = function(req, res, next){
    if(res.locals.authenticated == 0) return next();    
    //VALIDATIONS
    var id = parseInt(req.params.id);
    var field = req.params.field == undefined ? null : req.params.field.replace(';','');
    var dataInput = JSON.parse(req.body.data);
    var data = dataInput;
    if(field == null){
        data = [];
        data.push(dataInput.model);
        data.push(dataInput.brand);
        data.push(dataInput.transType);
        data.push(dataInput.plate);
        data.push(dataInput.offday);
        data.push(1);
    }

    car.update(id, data, field, function(err, result){
        if(err) return next(err);
        res.status(200).send({success: true, detail: "Successfully Modify!"});
    });
}

exports.delete = function(req, res, next){
    if(res.locals.authenticated == 0) return next();    
    var id = parseInt(req.params.id);
    car.delete(id, "status", function(err, result){
        if(err) return next(err);
        res.status(200).send({success: true});
    });
}

exports.getDefect = function(req, res, next){
    if(res.locals.authenticated == 0) return next();
    var id = req.params.id;
    car.getDefect(id, function(err, _data){
        if(err) return next(err);
        res.status(200).send({success:true, data:_data});
    });
}