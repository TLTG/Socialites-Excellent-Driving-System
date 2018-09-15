var faq = require('../../model/faqModel');

exports.create = function(req, res, next){
    if(res.locals.authenticated == 0) return next();

    var dataInput = JSON.parse(req.body.data);
    var data = [""];
    data.push(dataInput.label);
    data.push(dataInput.status);
    
    faq.addFaqLabel(data, function(err, result){
        if(err) return next(err);
        res.status(200).send({success: true, detail: "Success!"});
    });
}

exports.get = function(req, res, next){
    var query = req.query;
    var param = Object.keys(req.params).length ? req.params : null;
    if(param){
        if(Object.keys(query).length != 0){

        }else{
            var field = param.field == undefined ? null : param.field;
            var id = parseInt(param.id) == undefined ? 0 : param.id;
            faq.get(id, field, function(err, result){
                if(err) return next(err);
                res.status(200).send({success: true, data: result});  
            });
        }
    }else{
        var offset = query.offset == undefined ? 0 : parseInt(query.offset);
        var limit = query.limit == undefined ? 10 : parseInt(query.limit);
        faq.getList(offset, limit, function(err, result){
            if(err) return next(err);
            res.status(200).send({success: true, data: result});
        });
    }
}

exports.getFaqLabelList = function(req, res, next){
    if(res.locals.authenticated == 0) return next();
    faq.getFaqLabelList(req.params.id, function(err, result){
        if(err) return next(err);
        res.status(200).send({success: true, data: result});
    });
}

exports.getFaqList = function(req, res, next){
    if(res.locals.authenticated == 0) return next();
    faq.getFaqList(req.params.id, function(err, result){
        if(err) return next(err);
        res.status(200).send({success: true, data: result});
    });
}

exports.viewFaqQa = function(req, res, next){
    if(res.locals.authenticated == 0) return next();
    faq.viewFaqQa(req.params.id, function(err, result){
        if(err) return next(err);
        res.status(200).send({success: true, data: result});
    });
}

exports.update = function(req, res, next){
    if(res.locals.authenticated == 0) return next();

    var id = req.params.id;
    var field = req.params.field == undefined ? null : req.params.field.replace(';','');
    var dataIn = JSON.parse(req.body.data);
    
    var data = [];
    data.push(dataIn.faqLabelID);
    data.push(dataIn.question);
    data.push(dataIn.answer);
    data.push(dataIn.status);
    
    faq.update(id, dataIn.faqLabelID, "faqLabelID", function(er){
        if(er) return next(er);    
        faq.update(id, dataIn.question, "question", function(err){
            if(err) return next(err);    
            faq.update(id, dataIn.answer, "answer", function(errr){
                if(errr) return next(errr);    
                faq.update(id, dataIn.status, "status", function(errrr){
                    if(errrr) return next(errrr);    
                    res.status(200).send({success: true, detail: "Success!"});            
                }); 
            });  
        }); 
    });  
}

exports.editLabel = function(req, res, next){
    var id = req.params.id;
    var field = req.params.field == undefined ? null : req.params.field.replace(';','');
    var dataIn = JSON.parse(req.body.data);
    //VALIDATIONS
    var data = [];
    data["label"] = dataIn.label;
    data["status"] = dataIn.status;

    faq.editLabel(id, data, function(err, result){
        if(err) return next(err);
        res.status(200).send({success: true, detail: "Success!"});
    });
}


exports.addFaqQa = function(req, res, next){
    if(res.locals.authenticated == 0) return next();

    var dataInput = JSON.parse(req.body.data);
    var data = [""];
    data.push(dataInput.faqLabelID);
    data.push(dataInput.question);
    data.push(dataInput.answer);
    data.push(dataInput.status);
    
    faq.addFaqQa(data, function(err, result){
        if(err) return next(err);
        res.status(200).send({success: true, detail: "Success!"});
    });
}