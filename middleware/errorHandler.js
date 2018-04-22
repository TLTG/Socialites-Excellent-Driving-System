exports.error500 = function(err, req, res, next){
    console.error("[SEVER] Error occur. Check error.log for information.");
    errorLog(err.stack);
    if(req.method == "POST"){
        return res.status(500).send({error: 500, detail: "Internal Server Error, Sorry for inconvience we'll fix it soon."});
    }else{
        return res.status(500).send("<h1>Internal Server Error, Sorry for inconvience we'll fix it soon.</h1>");
    }
}

exports.error404 = function(req, res, next) {
    if(req.method == "POST"){
        return res.status(404).send({error: 404, detail: '404 Page not found.'});
    }else{
        return res.status(404).send('<h1>404 Page not found.</h1>');
    }
}

var errorLog = function(err){
    var fs = require('fs');
    fs.appendFile('./error.log', "\n\n***\n" + err + "\n***", function(err){
    });
}

// I suggest doing a View for this errors, para di mukhang plain and halatang error. :D