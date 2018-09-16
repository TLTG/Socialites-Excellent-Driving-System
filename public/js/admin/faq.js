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
            $('#faqTbl').html("");
            var x = 1;
            var dataLen = data.length;
            if(data.length!=0){
                $('.noFaqDiv').hide();
                data.forEach(e => {
                    var html = "<tr><td class='faqQue'>"+ e.question +"</td>";
                    html += "<td class='faqQue'>"+ e.answer +"</td>";
                    html += "<td><i class='icon icon-eye tiDef2' onclick='viewFaq("+ e.id +")' data-toggle='tooltip' data-placement='bottom' title='View FAQ Details'></i>";
                    html += "<i class='ti-pencil tiDef2' onclick='editFaq("+ e.id +")' data-toggle='tooltip' data-placement='bottom' title='Edit FAQ Details'></i>";
                    html += "<i class='ti-close tiDef2' onclick='remFaq("+ e.id +")' data-toggle='tooltip' data-placement='bottom' title='Remove/Delete FAQ'></i>";
                    html += "</td></tr>";
                    $('#faqTbl').append(html);
                });
            } else{
                $('.noFaqDiv').show();
            }
        }
    });
}

function addFaqLblModal(){
    $('#addFaqLbl').val("");
    $('#addLabelModal').modal('show');
}

function editFaqLblModal(){
    $('#editFaqLbl').val(selLbl);
    $('#editLabelModal').modal('show');
}

function addLabel(){
    var label = $('#addFaqLbl').val();
    if (label.replace(/ /g, '') == "") swal ("Oops!", "Please fill out required field.", "error");
    else{
        var _data = {
            label: label,
            status: 1,
        }
        faq.addFaqLabel(_data, function(err){
            if(err){
                swal("Failed!", err.message, "error");
                console.log(err);
            }else{
                $('#addLabelModal').modal("hide");
                swal ("Success!", "New FAQ label has been added!", "success");
                $(".preloader").fadeIn(); 
                loadFaqLabel();
                $(".preloader").fadeOut(); 
            }
        });
    }
}

function resetLabel(){
    $('#editFaqLbl').val(selLbl);
}

function editLabel(){
    var label = $('#editFaqLbl').val();
    if (label.replace(/ /g, '') == "") swal ("Oops!", "Please fill out required field.", "error");
    else{
        var _data = {
            label: label,
            status: 1,
        }
        faq.editFaqLabel(_data, function(err){
            if(err){
                swal("Failed!", err.message, "error");
                console.log(err);
            }else{
                $('#editLabelModal').modal("hide");
                swal ("Success!", "FAQ label has been updated!", "success");
                $(".preloader").fadeIn(); 
                loadFaqLabel();
                $(".preloader").fadeOut(); 
            }
        });
    }
}

function deleteFaqLblModal(){
    swal({
        title: "Warning!",
        text: "Are you sure you want to remove this FAQ label?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes",
        cancelButtonText: "Cancel",
        closeOnConfirm: false,
        closeOnCancel: true
    },
    function(isConfirm){
        if (isConfirm) {
            var _data = {
                label: "",
                status: 0,
            }
            faq.editFaqLabel(_data, function(err){
                if(err){
                    swal("Failed!", err.message, "error");
                    console.log(err);
                }else{
                    swal ("Success!", "FAQ label has been removed!", "success");
                    $(".preloader").fadeIn();  
                    loadFaqLabel();
                    $(".preloader").fadeOut();  
                }
            });
        }
    });
}

function resetFaq(){
    $('#editFaqQue').val(selQue);
    $('#editFaqAns').val(selAns);
}

function addFaqModal(){
    $('#addFaqQue').val("");
    $('#addFaqAns').val("");
    $('#addFaqModal').modal('show');
}

function addFaqQa(){
    var question = $('#addFaqQue').val();
    var answer = $('#addFaqAns').val();
    if (question.replace(/ /g, '') == "" || answer.replace(/ /g, '') == "") swal ("Oops!", "Please fill out required field.", "error");
    else{
        var _data = {
            faqLabelID: faqID,
            question: question,
            answer: answer,
            status: 1,
        }
        faq.addFaqQa(_data, function(err){
            if(err){
                swal("Failed!", err.message, "error");
                console.log(err);
            }else{
                $('#addFaqModal').modal("hide");
                swal ("Success!", "New FAQ has been added!", "success");
                $(".preloader").fadeIn(); 
                loadFaqLabel();
                $(".preloader").fadeOut(); 
            }
        });
    }
}

function viewFaq(a){
    faqQaID = a;
    faq.viewFaqQa(function(err, data){
        if(err){
            swal("Failed!", err.message, "error");
            console.log(err);
        }else{
            data.forEach(e => {
                selQue = e.question;
                selAns = e.answer;
                
                $('#viewFaqQue').val(selQue);
                $('#viewFaqAns').val(selAns);
            });
        }
    });
    $('#viewFaqModal').modal("show");
}

function resetFaqQa(){
    $('#editFaqQue').val(selQue);
    $('#editFaqAns').val(selAns);
}

function editFaq(a){
    faqQaID = a;
    faq.viewFaqQa(function(err, data){
        if(err){
            swal("Failed!", err.message, "error");
            console.log(err);
        }else{
            data.forEach(e => {
                selQue = e.question;
                selAns = e.answer;
                
                $('#editFaqQue').val(selQue);
                $('#editFaqAns').val(selAns);
            });
        }
    });
    $('#editFaqModal').modal("show");
}

function editFaqQa(){
    var question = $('#editFaqQue').val();
    var answer = $('#editFaqAns').val();
    if (question.replace(/ /g, '') == "" || answer.replace(/ /g, '') == "") swal ("Oops!", "Please fill out required field.", "error");
    else{
        var _data = {
            faqLabelID: faqID,
            question: question,
            answer: answer,
            status: 1,
        }
        faq.editFaqQa(_data, function(err){
            if(err){
                swal("Failed!", err.message, "error");
                console.log(err);
            }else{
                $('#editFaqModal').modal("hide");
                swal ("Success!", "FAQ details has been updated!", "success");
                $(".preloader").fadeIn(); 
                loadFaqLabel();
                $(".preloader").fadeOut(); 
            }
        });
    }
}

function remFaq(a){
    faqQaID = a;
    swal({
        title: "Warning!",
        text: "Are you sure you want to remove this FAQ?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes",
        cancelButtonText: "Cancel",
        closeOnConfirm: false,
        closeOnCancel: true
    },
    function(isConfirm){
        if (isConfirm) {
            var _data = {
                faqLabelID: faqID,
                question: selQue,
                answer: selAns,
                status: 0,
            }
            faq.editFaqQa(_data, function(err){
                if(err){
                    swal("Failed!", err.message, "error");
                    console.log(err);
                }else{
                    swal ("Success!", "FAQ details has been removed!", "success");
                    $(".preloader").fadeIn(); 
                    loadFaqLabel();
                    $(".preloader").fadeOut(); 
                }
            });
        }
    });
}