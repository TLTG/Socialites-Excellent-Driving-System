$(function(){
    $('.tblReg tbody tr:first').addClass("highlightTr");
    $('.tblReg tbody tr').click(function () {
        var selected = $(this).hasClass("highlightTr");
        $('.tblReg tbody tr').removeClass("highlightTr");
        if (!selected)
            $(this).addClass("highlightTr");
    });
});

function viewRegForm(){
    $('#viewRegFormModal').modal('show');
}

function remRegForm(){ //Remove or reject registration form
    swal({
        title: "Warning!",
        text: "Are you sure you want to reject/remove this registration form?",
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
            $('#viewRegFormModal').modal('hide');
            swal("Success!", "Registration form is rejected.", "success");
            //DB: Remove registration function here
        }
    });
}

function saveEnrReg(){ //Save changes on View Registration Modal
    var check = checkEnrReg();
    if (check==0){
        swal("Oops!", "Please fill out all required fields.", "error");
    }
    else{
        swal({
            title: "Warning!",
            text: "Are you sure you want to save the changes?",
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
                swal("Changes have been saved!", "" ,"success");
                $('#viewRegFormModal').modal('hide');
            }
        });
    }
}

function appRegForm(){ //Approve Registration
    swal({
        title: "Warning!",
        text: "Are you sure you want to approve this registration form?",
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
            swal("Registration has been accepted", "" ,"success");
            $('#viewRegFormModal').modal('hide');
        }
    });
}

function checkEnrReg (){ //Checker of empty fields
    var a, b, c, d, e, f, g; //checker variables
    var fn = $('#enrRegFN').val();
    var mn = $('#enrRegMN').val();
    var sn = $('#enrRegSN').val();
    var bday = $('#enrRegBday').val();
    var bplace = $('#enrRegBplace').val();
    var add = $('#enrRegAddress').val();
    var occ = $('#enrRegOcc').val();
    var cont = $('#enrRegCont').val();
    var email = $('#enrRegEmail').val();
    var guard = $('#enrRegGuard').val();
    var gCont = $('#enrRegGuardCont').val();
    var civ = $('select[name="enrRegCivStatus"]').val();
    var crs = $('select[name="enrRegBranch"]').val();
    var branch = $('select[name="enrRegCivStatus"]').val();
    var sex = $('input[name="enrRegSex"]:checked').val();
    var nat = $('input[name="enrRegNat"]:checked').val();
    
    a = fn.replace(/\s+/g, '');
    b = sn.replace(/\s+/g, '');
    c = bplace.replace(/\s+/g, '');
    d = add.replace(/\s+/g, '');
    e = cont.replace(/\s+/g, '');
    f = guard.replace(/\s+/g, '');
    g = gCont.replace(/\s+/g, '');

    if (a=="" || b=="" || bday==""
        || c=="" || d=="" || e==""
        || f=="" || g=="" || civ=="civ0"){
            return "0";
            //DB: Add validation for course and branch here
        }
    else{
        return "1";
        // preRegData.info["fullname"] = fn + "_" + mn + "_" + sn;
        // preRegData.info["birthdate"] = bday;
        // preRegData.info["birthplace"] = bplace;
        // preRegData.info["address"] = add;
        // preRegData.info["telno"] = cont;
        // preRegData.info["occupation"] = occ;
        // preRegData.info["email"] = email;
        // preRegData.info["civilStatus"] = civ;
        // preRegData.info["sex"] = sex;
        // preRegData.info["nationality"] = nat;
        // preRegData.info["guardian"] = {
        //     name: guard,
        //     telno: gCont,
        // };
        // var age = parseInt(Date.parse("today").toString("yyyy")) - parseInt(Date.parse(preRegData.info.birthdate).toString("yyyy"));
        // $('.req').hide();
        // if(age < 17){
        //     swal("", "Sorry, only 17 years old and above are allowed to register.", "error");
        //     return "0";            
        // }else if(preRegData.info.nationality == "Non-Filipino"){
        //     $('.reqC').show();
        // }else if(age < 19 && age > 16){
        //     $('.reqA').show();
        // }else if(age > 19){
        //     $('.reqB').show();
        // }
        // return "1";
    } 
}