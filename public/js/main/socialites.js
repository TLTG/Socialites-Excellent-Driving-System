/** 
 * Course Module 
 * Create by CPRT  
*/
var priceSpecial;
var course = {
    selectedType: 0,
    types: ["m","a","s"],
    api: 'api/v1/web/course/',
    data: {
        m:[],
        a:[],
        s:[],
    },
    getData: function(cb){
        var self = this;
        var onFail = function(detail){
            var err = new Error(detail);
            cb(err);
        };
        return $.get(this.api + "?type=" + this.types[this.selectedType], function(res){
            if(res.success){
                self.data[self.types[self.selectedType]] = res.data;
                self.renderTbl();
                cb(null);
            }else{
                onFail(res.detail);
            };
        }).fail(function(xhr){
            onFail("Error: " + xhr.status + "\n" + xhr.statusText);
        });
    },
    renderTbl: function(){
        var self = this;
        var data = this.data[this.types[this.selectedType]];
        var table = this.types[this.selectedType];
        $('#course_' + table).html("");
        data.forEach(function(elem, index){
            var html = "<tr>";
            html += "<td>"+ self.generateID(elem.courseID, self.types[self.selectedType])+ (elem.days>=20?"**":elem.days>=15?"*":"") +"</td>";
            html += "<td>"+ elem.days +"</td>";
            html += "<td>"+ self.generateHour(elem.hour) +"/day</td>";
            html += "<td>₱"+ parseFloat(elem.price).formatMoney(0) +"</td>";
            html += "<td><a href='#' onclick='cart.addToCart("+ elem.courseID +")' class='btn btn-lg btnCstm addToCart cart_"+ elem.courseID +"'>ENROLL</a></td>";
            html += "</tr>";
            $('#course_' + table).append(html);
        });
        cart.checkCart();
    },
    generateID: function(id, type){
        var pad = "000";
        return "CRS-"+type.toUpperCase()+(pad.substr(0, pad.length - (id+"").length)+id);
    },
    generateHour: function(minutes){
        var hour = parseInt(minutes/60);
        var min = minutes%60;
        return hour + (hour>1?" hours":" hour") + (min!=0?" and "+ min + " minutes":"");
    },
    getLocalData: function(id){
        var cat = Object.keys(this.data);
        for(var x=0; x<cat.length; x++){
            var items = this.data[cat[x]];
            for(var y=0; y<items.length; y++){
                if(items[y].courseID==id){
                    return items[y];
                };
            };
        };
    },
    loadAll: function(cb){
        var self = this;
        this.selectedType = 0;
        this.getData(function(){
            self.selectedType = 1;
            self.getData(function(){
                self.selectedType = 2;
                self.getData(function(){
                    cb();
                });
            });
        });
    },
};

var cart = {
    container: [],
    addToCart: function(id){
        var self = this;
        if(this.container.indexOf(id) == -1){
            this.container.push(id);
            this.updateCart(function(err){
                if(err){
                    self.container.pop();
                    return;
                }
                $('.cart_'+id).attr('disabled', 'true');
                cartClick();
            });
        }
    },
    delToCart: function(index){
        var self = this;
        var current = this.container.concat([]);
        this.container.splice(index,1);
        this.updateCart(function(err){
            if(err){
                self.container = current.concat([]);
                return;
            }
            self.renderTbl();
        });
    },
    loadCart: function(){
        var self = this;
        var api = "api/v1/web/cart";
        return $.get(api, function(res){
            if(res.success){
                self.container = res.data;
            }else{
                console.error(res.detail);   
            }
        }).fail(function(xhr){
            console.error(new Error(xhr.status + ":" + xhr.statusText));
        });
    },
    updateCart: function(cb){
        var self = this;
        return $.ajax({
            type: "PUT",
            url: "api/v1/web/cart",
            data: {data: JSON.stringify(self.container)},
            success: (res)=>{
                if(res.success){
                    cb(null);
                }else{
                    cb(new Error(res.detail));
                }
            },
        }).fail(xhr=>{
            var err = new Error(xhr.status + ":" + xhr.statusText);
            console.error(err);
            cb(err);
        });
    },
    checkCart: function(){
        var self = this;
        var items = $('.addToCart');
        this.container.forEach(x=>{
            $('.cart_'+x).attr('disabled','true');
        });
        $('.addToCart').on('click', function(e){
            e.preventDefault();
        });
    },
    renderTbl: function(){
        $('#cartTbl').html("");
        $('#cartCtr').html(this.container.length);
        if ($('#cartCtr').html()==0){
            $('.cartList').hide();
            $('.selectBranch').hide();
            $('.btnEnroll').hide();
            $('.aAddCart2').show();
            $('.aAddCart1').hide();
            $('.noSelCrsDiv').show();
        }else{
            $('.cartList').show();
            $('.selectBranch').show();
            $('.btnEnroll').show();
            $('.aAddCart1').show();
            $('.aAddCart2').hide();
            $('.noSelCrsDiv').hide();
        }
        var priceData;
        this.container.forEach((x,index)=>{
            // priceData=parseFloat(data.price).formatMoney(0);
            var data = course.getLocalData(x);
            priceSpecial = data.price;
            var html = "<tr>";
            html += "<td>";
            html += "<span class='cartCrs'>" + course.generateID(data.courseID, data.transmission) + "</span><br>";
            html += "</td>";
            html += "<td>"+ data.days * parseInt(data.hour/60) +"</td>";
            html += "<td><span class='cartFree'>"+ (data.days>=20?"2":data.days>=15?"1":"None") +"</span></td>";
            html += "<td>₱<span class='cartPrice cartPrice_"+ data.courseID +"'>"+ parseFloat(data.price).formatMoney(0) +"</span></td>";
            html += "<td><input type='checkbox' data-price='" + data.price + "' value="+ data.courseID +" id='special"+ data.courseID +"' name='specialCrs'> Yes</td>"; //DB: Added special course checkbox
            html += "<td><a href='#' title='Remove' onclick='cart.delToCart("+ index +")'><i class='icon icon-trash2 iconTrash'></i></a></td>";
            html += "</tr>";
            $('#cartTbl').append(html);
        });
        $('.iconTrash').on('click', function(e){
            e.preventDefault();
        });
        var pickup;        
        $('input[name=specialCrs]').change(function(){
            var id = $(this).val();
            var newPrice = $(this).data('price');
            if (this.checked){
                newPrice *= 2;
                $('.divPickup').show();
                $('#enrPickup').val("");
                pickup=1;
            }
            else{
                $('.divPickup').hide();
                $('#enrPickup').val("");
                pickup=2;
            } //DB: Price must be doubled when checkbox is clicked
            $('.cartPrice_' + id).html(parseFloat(newPrice).formatMoney(0));
        });
    },
};

var branch = {
    api:"api/v1/web/branch",
    data: [],
    getData: function(){
        var self = this;
        return $.get(self.api, function(res){
            if(res.success){
                self.data = res.data;
                self.renderTbl();
            }
        }).fail(xhr=>{
            console.error(new Error(xhr.status+":"+xhr.statusText));
        });
    },
    renderTbl: function(){
        if(this.data.length>0){
            //$('#branchTbl').html("");
            $('.branchList').html("");
            this.data.forEach((elem,index)=>{
                var options = "<option value="+ elem.branchID +">"+ "SED-"+ elem.branchName.toUpperCase() +"</option>";
                var html = "<tr>";
                html += "</tr>";
                $('.branchList').append(options);
                //$('#branchTbl').append(html);
            });
        }
    },
};

var lesson = {
    data: [],
    api: 'api/v1/util/lesson',
    getData: function(){
        var self = this;
        return $.get(this.api+"/?offset=0&limit=100",function(res){
            if(res.success){
                self.data = res.data;
                self.renderTbl();
            }else{
                console.error(res.detail);
            }
        }).fail(xhr=>{
            console.error(xhr.status+":"+res.statusText);
        });
    },
    renderTbl: function(){
        $('#lesDef').html("");
        $('#lesCus').html("");
        this.data.forEach(elem=>{
            var html = "";
            var html2 = "";
            html += "<tr><td>"+ elem.title +"</td></tr>";
            html2 += "<tr><td><input type='checkbox' name='includeLes' value='"+ elem.id +"' checked></td><td>"+ elem.title +"</td></tr>";
            $('#lesDef').append(html);
            $('#lesCus').append(html2);
        });
    },
};

var enrollment = {
    data: {},
    enroll: function(info, course, branch, payment, apply, special,transaction,_vehicle,_schedule){
        this.data.info = info;
        this.data.course = course;
        this.data.branch = branch;
        this.data.payment = payment;
        this.data.applyLicense = apply;
        this.data.special = special;
        this.data.transaction = transaction;
        this.data.preference = {vehicle: _vehicle, schedule: _schedule};
        return this;
    },
    enrollWithAcc:function(accID, course, lesson, branch, payment, special){
        this.data.account = accID;
        this.data.course = course;
        this.data.lesson = lesson;
        this.data.branch = branch;
        this.data.payment = payment;
        this.data.special = special;
        return this;
    },
    submit: function(cb){
        var data = this.data;
        return $.post('api/v1/web/enroll', {data: JSON.stringify(data)}, function(res){
            if(res.success){
                cb(null,res.invoice, res.name);
            }else{
                cb(new Error("Invalid Account Type!"));
            }
        }).fail(xhr=>{
            cb(xhr.status+":"+xhr.statusText);
        });
    },
};

var account = {
    checkAuth: function(cb){
        return $.get('/login',function(res){
            if(res.success){
                cb(null);
            }else{
                cb(true);
            }
        }).fail(xhr=>{
            console.error("Error");
        });
    },
    signin:function(user,pass,cb){
        return $.post('/login', {user:user,pass:pass},function(res){
            if(res.success){
                cb(null,res.accID);
            }else{
                cb(new Error(res.detail));
            }
        }).fail(xhr=>{
            cb(new Error(xhr.status+":"+xhr.statusText));
        });
    },
};

var announcement = {
    selected: -1,
    offset: 0,
    limit: 20,
    currPage: 0,
    pages: [],
    getAnnouncementListWeb: function(cb){
        var req = $.get('api/v1/announce/web', function(response){
            if(response.success == false){
                console.log(response.detail);
                cb(new Error(response.detail));
            }else{
                cb(null, response.data);
            }
        }).fail(function(request){
            console.log(request.status + ": " + request.statusText);
            cb(new Error("Error: On displaying list of announcements"));
        });
    }
};

var faq = {
    selected: -1,
    offset: 0,
    limit: 20,
    currPage: 0,
    pages: [],
    getFaqLabelList: function(cb){
        var req = $.get('api/v1/faq/list/label', function(response){
            if(response.success == false){
                console.log(response.detail);
                cb(new Error(response.detail));
            }else{
                cb(null, response.data);
            }
        }).fail(function(request){
            console.log(request.status + ": " + request.statusText);
            cb(new Error("Error: On displaying list of FAQ labels"));
        });
    },
    getFaqList: function(cb){
        var req = $.get('api/v1/faq/list/' + faqID, function(response){
            if(response.success == false){
                console.log(response.detail);
                cb(new Error(response.detail));
            }else{
                cb(null, response.data);
            }
        }).fail(function(request){
            console.log(request.status + ": " + request.statusText);
            cb(new Error("Error: On displaying list of FAQ under this label"));
        });
    },
}

var display = {
    selected: -1,
    offset: 0,
    limit: 20,
    currPage: 0,
    pages: [],
    getTotEnrollees: function(cb){
        $.ajax({
            type: "GET",
            url: 'api/v1/web/display/totEnroll',
            data: {year: yearNow},
            success: (res)=>{
                if(res.success){
                    cb(null, res.data);
                }else{
                    cb(new Error(res.detail));
                }
            },
            error: xhr=>cb(new Error(xhr.status+": "+xhr.statusText)),
        });
    },
    getTotStud: function(cb){
        var req = $.get('api/v1/web/display/totStud', function(response){
            if(response.success == false){
                console.log(response.detail);
                cb(new Error(response.detail));
            }else{
                cb(null, response.data);
            }
        }).fail(function(request){
            console.log(request.status + ": " + request.statusText);
            cb(new Error("Error: On displaying total number of current students"));
        });
    },
}

var payment = {
    send: function(form, cb){
        var data = new FormData(form);
        $.ajax({
            type: "POST",
            url: "api/v1/web/bankPayment",
            data: data,
            processData: false,
            contentType: false,
            success: res=>{
                if(res.success){
                    cb(null, "Done");
                }else{
                    cb(new Error(res.detail));
                }
            },
            error: xhr=>{
                cb(new Error(xhr.status + ": " + xhr.statusText));
            }
        });
    }
}