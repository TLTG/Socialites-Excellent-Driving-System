var app = {
    start: function(){
        this.preference.getPreference('',function(){});
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
                            switch(element){
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
                                $('.prefDays').html(prefDays.join());
                            }
                        });
                    }
                },
            });
        },
    },
}