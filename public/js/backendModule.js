/* 
    car object module, laman nito lahat nang simple table rendering, data, and server communicating functions,
*/
var car = {
    selectedCar: -1,
    offset: 0,
    limit: 10,
    currPage: 0,
    pages: [],
    renderATable: function(data){
        var html = "";
        var dayToday = Date.parse("today").toString('ddd');
        var dayName = ["","Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
        for(var x=0; x < data.length; x++){
            if(data[x].status != 0){
                html += "<tr class='carTblA' onclick='viewCarProfile("+ data[x].id +")'>";
                html += "<td>" + data[x].id + "</td>";
                html += "<td>" + data[x].brand + "</td>";
                html += "<td>" + data[x].model + "</td>";
                html += "<td>" + (dayName[data[x].offday] == dayToday ? "<span class='text-danger'>Coding</span>" : (data[x].status == 2 ? "<span class='text-warning'>In Use</span>" : "<span class='text-success'>Available</span>")) + "</td>";
                html += "</html>";
            }
        }
        $('#carTableA').html(html);
    },
    getATableData: function(cb){
        $.get('api/v1/car?offset=' + this.offset + '&limit=' + this.limit + '&tran=A', function(response){
            if(response.success){
                var data = response.data;
                addPage(data);
            }else{
                console.log("Error: getting data from server.");
            }
        }).fail(request=>{
            console.log(request.status + ": " + request.statusText);
        });
        var addPage = (page)=>{
            this.pages.push(page);
            this.renderATable(page);
            this.offset = page[page.length-1].id;
            cb();
        }
    },
    addCar: function(_data, cb){
        var req = $.post('api/v1/car', {data: JSON.stringify(_data)}, function(response){
            if(response.success == false){
                console.log("Error: On adding new vehicle.");
                cb(new Error("Error: On adding new vehicle."));
            }else{
                cb(null);
            }
        }).fail(function(request){
            console.log(request.status + ": " + request.statusText);
            cb(new Error("Error: On adding new vehicle."));
        });
    },
    getData: function(id, cb){
        var data = this.pages[this.currPage];
        data.forEach(x=>{
            if(x.id == id){
                var next = function(){
                    if(x.driverName){
                        return cb(null, x);
                    }else{
                        car.getInstName(x.driver, function(err, name){
                            if(err) return cb(err);
                            x.driverName = name;
                            cb(null, x);
                        });
                    }
                }
                if(x.defect){
                    next();
                }else{
                    this.getDefectData(id, function(err, defects){
                        if(err) return cb(err);
                        x.defect = defects;
                        next();
                    });
                } 
            }
        });
    },
    getDefectData: function(id, cb){
        $.get('api/v1/car/' + id + '/defect', function(response){
            if(response.success){
                cb(null, response.data);
            }else{
                cb(new Error("Error: getting data from server."));
            }
        });
    },
    getInstName: function(id,cb){
        $.get('api/v1/instructor/'+id+'/fullname', function(response){
            if(response.success){
                cb(null, response.data);
            }else{
                cb(new Error("Error: getting data from server."));
            }
        });
    },
    update: function(){},
    delete: function(id, cb){
        var onSuccess = function(response){
            if(response.success){
                cb(null, true);
            }else{
                onFail(response.detail);
            }
        };
        var onFail = function(err){
            cb(new Error('Error: performing action.'));
        };
        $.ajax({
            type: "DELETE",
            url: 'api/v1/car/' + id,
            success: onSuccess,
            error: onFail
        });
    },
    addDefect: function(data, cb){
        $.post('api/v1/car/'+car.selectedCar+'/defect', {data: JSON.stringify(data)}, function(response){
            if(response.success){
                cb(null, true);
            }else{
                cb(new Error("Error: can't perform request."));
            }
        }).fail(function(err){
            cb(new Error("Error: can't perform request."));            
        });
    },
    delDefect: function(id, cb){
        var onSuccess = function(response){
            if(response.success){
                cb(null, true);
            }else{
                onFail(error);
            }
        };
        var onFail = function(error){
            cb(error);
        }
        $.ajax({
            type: "DELETE",
            data: {data: id},
            url: 'api/v1/car/'+ this.selectedCar + '/defect',
            success: onSuccess,
            error: onFail
        });
    },
}
/* 
*   paul-made module design to query request one at a time, to prevent server congestion.
*/
var queryer = {
    arrData: [],
    nextData: 0,
    err: null,
    actionPerform: (data, callback)=>{},
    done: (error, done)=>{},    
    next: function(){
        var self = this;
        if(this.err) return this.finish();
        if(this.nextData >= this.arrData.length) return this.finish();
        else this.action(this.arrData[this.nextData], function(ok, not){
            if(not) return self.abort(not);
            else {
                self.nextData++;
                self.next();
            }
        });
    },
    action: function(data, cb){
        this.actionPerform(data, function(err, result){
            if(err) cb(null, err);
            cb(true, null);
        });
    },
    start: function(action, data, cb){
        this.actionPerform = action;
        this.arrData = data;
        this.done = cb;
        this.next();
    },
    finish: function(){
        if(this.err) return this.done(this.err);
        this.done(null, true);
    },
    abort: function(reason){
        this.err = reason;
    }
}