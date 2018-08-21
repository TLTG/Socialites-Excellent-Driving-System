var app = {
    start: function(){
        this.preference.getPreference('',function(){});
        this.paymentAccount.getPayment(function(err, data){
            if(err) throw new Error('Null result');
            $('#accountTable').html('');
            data.forEach((e,i)=>{
                var html = "<tr>";
                html += "<td>"+ Date.parse(e.date).toString('MM/dd/yyyy') +"</td>";
                html += "<td>"+ e.transaction +"</td>";
                html += "<td>"+ parseFloat(e.price).formatMoney(2) +"</td>";
                html += "<td>"+ (parseFloat(e.price) - parseFloat(e.balance)).formatMoney(2) +"</td>";
                html += "<td>"+ parseFloat(e.balance).formatMoney(2) +"</td>";
                html += "</tr>";
                $('#accountTable').append(html);
            });
        });
    },
    preference: {
        getPreference: function(target,cb){
            $.ajax({
                type: "GET",
                url: "/api/v1/sched/preference",
                success: function(res){
                    if(res.success){
                        $('.prefVehi').html(res.data.car.name);
                        $('.prefVehi').attr('data-id', res.data.car.id);
                        $('.prefDays').attr('data-days', res.data.days);
                        var prefDays = [];
                        var days = JSON.parse(res.data.days);
                        days.forEach((element,i) => {
                            switch(parseInt(element)){
                                case 1 : {
                                    prefDays.push("MON");
                                    break;
                                }
                                case 2 : {
                                    prefDays.push("TUE");
                                    break;
                                }
                                case 3 : {
                                    prefDays.push("WED");
                                    break;
                                }
                                case 4 : {
                                    prefDays.push("THU");
                                    break;
                                }
                                case 5 : {
                                    prefDays.push("FRI");
                                    break;
                                }
                                case 6 : {
                                    prefDays.push("SAT");
                                    break;
                                }
                                case 7 : {
                                    prefDays.push("SUN");
                                    break;
                                }
                            }
                            if(i == days.length-1){
                                //console.log(prefDays);
                                $('.prefDays').html(prefDays.join());
                            }
                        });
                        $('.prefVehi').html(res.data.car.brand.toUpperCase());
                    }
                },
            });
        },
        updatePreference: function(_days, _car, cb){
            $.ajax({
                type: "PUT",
                url: "api/v1/sched/preference",
                data: {days: JSON.stringify(_days), car: _car},
                success: (res)=>{
                    if(res.success){
                        cb(null, res.detail);
                    }else{
                        cb(new Error(res.detail));
                    }
                },
                error: (xhr)=>{
                    cb(new Error(xhr.status + ": " + xhr.statusText));
                },
            });
        },
    },
    paymentAccount: {
        getPayment: function(cb){
            $.get('/api/v1/stud/payment/sessionID', function(res){
                if(res.success){
                    cb(null, res.data);
                }else{
                    cb(new Error(res.detail));
                }
            });
        },  
    },
    scheduler: {
        checkIfAvailable: function(date, time, cb){
            var branchID = $('.venueSchedToday').data('id') || 1;
            $.ajax({
                type: "GET",
                url: "api/v1/sched/check",
                data: {date: date, branch: branchID, time: time},
                success: (res)=>{
                    if(res.success){
                        cb(null, res.status);
                    }else{
                        cb(new Error(res.detail));
                    }
                },
                err: (xhr)=>{
                    cb(new Error(xhr.status + ": " + xhr.statusText));
                }
            });
        },
        updateSchedule: function(schedules, cb){
            var branchID = $('.venueSchedToday').data('id') || 1;
            $.ajax({
                type: "PUT",
                url: "api/v1/sched",
                data: {
                    events: JSON.stringify(schedules),
                    branch: branchID,
                },
                success: function(res){
                    if(res.success){
                        cb(null, res.data);
                    }else{
                        cb(new Error(res.detail));
                    }
                },
                error: function(xhr){
                    cb(new Error(xhr.status + ": " + xhr.statusText));
                }
            });
        },
    },
}