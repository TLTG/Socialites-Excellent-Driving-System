$(function(){
    resetEnrollment();

    $('input:radio[name="enrReqT"]').change(
    function(){
        if ($(this).is(':checked') && $(this).val() == 'reqT1') {
            resetReqB();
            resetReqC();
            $('.reqB').hide();
            $('.reqC').hide();
            $('.reqA').show();
        }
        else if ($(this).is(':checked') && $(this).val() == 'reqT2') {
            resetReqA();
            resetReqC();
            $('.reqA').hide();
            $('.reqC').hide();
            $('.reqB').show();
        }
        else if ($(this).is(':checked') && $(this).val() == 'reqT3') {
            resetReqA();
            resetReqB();
            $('.reqA').hide();
            $('.reqB').hide();
            $('.reqC').show();
        }
    });
});

function resetEnrollment(){
    resetReqA();
    resetReqB();
    resetReqC();
    $('#enrFN').val("");
    $('#enrMN').val("");
    $('#enrSN').val("");
    $('#enrBday').val("");
    $('#enrBplace').val("");
    $('#enrAddress').val("");
    $('#enrOcc').val("");
    $('#enrCont').val("");
    $('#enrEmail').val("");
    $('#enrGuard').val("");
    $('#enrGuardCont').val("");
    $('select[name="enrCivStatus"]').val(civ0);
    document.getElementById("enrSex1").checked = true;
    document.getElementById("enrSex2").checked = false;
    document.getElementById("enrReqT2").checked = false;
    document.getElementById("enrReqT3").checked = false;
    document.getElementById("enrReqT1").checked = true;
}

function resetReqA(){
    document.getElementById("rA1").checked = false;
    document.getElementById("rA2").checked = false;
    document.getElementById("rA3").checked = false;
}


function resetReqB(){
    document.getElementById("rB1").checked = false;
    document.getElementById("rB2").checked = false;
    document.getElementById("rB3").checked = false;
}


function resetReqC(){
    document.getElementById("rC1").checked = false;
    document.getElementById("rC2").checked = false;
    document.getElementById("rC3").checked = false;
}