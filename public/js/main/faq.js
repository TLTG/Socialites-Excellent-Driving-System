var faqID, faqQaID, selLbl, selQue, selAns;

function loadFaqLabel(){
    faq.getFaqLabelList(function(err, data){
        if(err){
            swal("Failed!", err.message, "error");
            console.log(err);
        }else{
            $('#faqLabelSel').html("");
            var dataLen = data.length;
            if(data.length!=0){
                data.forEach(e => {
                    var html = "<option value='"+ e.id +"'>"+ e.label +"</option>";
                    $('#faqLabelSel').append(html);
                });
                var x = $('#faqLabelSel').find("option:first-child").text();
                var y = $('#faqLabelSel').find("option:first-child").val();
                selLbl = x;
                faqID = y;
                $('.faqDisplaySpan').html(x);
                loadFaqList(y, x);
            } else{
                var html = "<option>---</option>";
                $('#faqLabelSel').append(html);
            }
            $("#faqLabelSel").change(function () {
                var text1 = $(this).find("option:selected").text();
                $('.faqDisplaySpan').html(text1);
                selLbl = text1;
                faqID = this.value;
                loadFaqList(this.value, text1);
            });
        }
    });
}

function loadFaqList(a, b){
    faqID = a;
    faq.getFaqList(function(err, data){
        if(err){
            swal("Failed!", err.message, "error");
            console.log(err);
        }else{
            $('.divFaq').html("");
            var x = 1;
            var dataLen = data.length;
            if(data.length!=0){
                $('.noFaqDiv').hide();
                data.forEach(e => {
                    var html = "<div class='card' style='background-color: khaki'>";
                    html += "<h5 class'questFaq' style='text-align: left'><span class='counterFaq'>"+ x +"</span>. <span class='question'>"+ e.question +"</span></h5>";
                    html += "<h5 class='divFaq1' style='text-align: left'>"+ e.answer +"</h5></div>";
                    x++;
                    $('.divFaq').append(html);
                });
            } else{
                $('.noFaqDiv').show();
            }
        }
    });
}