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
    $('#enrReqP9').val("");
    $('select[name="enrCivStatus"]').val('civ0');
    document.getElementById("enrSex1").checked = true;
    document.getElementById("enrSex2").checked = false;
    $("#enrReqT1").prop("checked", true);
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

function enrollStud(){
    var isCheck1 = checkEnr1();
    var isCheck2 = checkEnr2();
    var isCheck3 = checkEnr3();
}

function checkEnr1 (){
    var fn = $('#enrFN').val();
    var sn = $('#enrSN').val();
    var bday = $('#enrBday').val();
    var bplace = $('#enrBplace').val();
    var add = $('#enrAddress').val();
    var cont = $('#enrCont').val();
    var email = $('#enrEmail').val();
    var guard = $('#enrGuard').val();
    var gCont = $('#enrGuardCont').val();
    var civ = $('select[name="enrCivStatus"]').val();

    fn = fn.replace(/\s+/g, '');
    sn = sn.replace(/\s+/g, '');
    bplace = bplace.replace(/\s+/g, '');
    add = add.replace(/\s+/g, '');
    cont = cont.replace(/\s+/g, '');
    email = email.replace(/\s+/g, '');
    guard = guard.replace(/\s+/g, '');
    gCont = gCont.replace(/\s+/g, '');

    if (fn=="" || sn==""
        || bplace=="" || add=="" || cont==""
        || email=="" || guard=="" || gCont==""){
            return 1;
        }
    else return 0;
}