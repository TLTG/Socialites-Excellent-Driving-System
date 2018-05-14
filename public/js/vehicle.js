var checkedValues, count;

$(function ()
{
    $("#editVehiPlate").hide();
    $("#editVehiCoding").hide();
    $("#editVehiInst").hide();
    $("#editVehiPlateM").hide();
    $("#editVehiCodingM").hide();
    $("#editVehiInstM").hide();
    $("#btnDoneEditVehi").hide();
    $("#btnCancEditVehi").hide();

    $("#vehiPlateM").show();
    $("#vehiInstM").show();
    $("#vehiCodingM").show();
    $("#vehiPlate").show();
    $("#vehiInst").show();
    $("#vehiCoding").show();
    $("#btnEditVehi").show();
});

function confDelVehicle ()
{
    swal({
        title: "Are you sure you want to delete this vehicle?",
        text: "This vehicle will be removed from the database.",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes",
        cancelButtonText: "Cancel",
        closeOnConfirm: false,
        closeOnCancel: false
    },
    function(isConfirm){
        if (isConfirm) {
            swal("Deleted!", "Vehicle has been successfully deleted!", "success");
            //DB: Deleting of vehicle function here
        }
        else {
            swal("Cancelled", "", "error");
        }
    });
}

function editVehicle (a)
{
    if (a=="a")
    {
        $("#vehiPlate").hide();
        $("#vehiInst").hide();
        $("#vehiCoding").hide();
        $("#editVehiPlate").show();
        $("#editVehiCoding").show();
        $("#editVehiInst").show();

        $("#btnEditVehi").hide();
        $("#btnAddDefVehi").show();
        $("#btnDoneEditVehi").show();
        $("#btnCancEditVehi").show();
    }
    else if (a=="m")
    {
        $("#vehiPlateM").hide();
        $("#vehiInstM").hide();
        $("#vehiCodingM").hide();
        $("#editVehiPlateM").show();
        $("#editVehiCodingM").show();
        $("#editVehiInstM").show();

        $("#btnEditVehiM").hide();
        $("#btnAddDefVehiM").show();
        $("#btnDoneEditVehiM").show();
        $("#btnCancEditVehiM").show();
    }
}

function doneEditVehi (a)
{
    swal({
        title: "Are you sure you want to save the changes?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes",
        cancelButtonText: "Cancel",
        closeOnConfirm: false,
        closeOnCancel: false
    },
    function(isConfirm){
        if (isConfirm) {
            if (a=="a")
            {
                $("#editVehiPlate").hide();
                $("#editVehiCoding").hide();
                $("#editVehiInst").hide();
                $("#btnDoneEditVehi").hide();
                $("#btnCancEditVehi").hide();
                $("#btnAddDefVehi").hide();

                $("#vehiPlate").show();
                $("#vehiInst").show();
                $("#vehiCoding").show();
                $("#btnEditVehi").show();
            }
            else if (a=="m")
            {
                $("#editVehiPlateM").hide();
                $("#editVehiCodingM").hide();
                $("#editVehiInstM").hide();
                $("#btnDoneEditVehiM").hide();
                $("#btnCancEditVehiM").hide();
                $("#btnAddDefVehiM").hide();

                $("#vehiPlateM").show();
                $("#vehiInstM").show();
                $("#vehiCodingM").show();
                $("#btnEditVehiM").show();
            }
            swal("Updated!", "Vehicle details has been successfully updated!", "success");
            //DB: Updating of vehicle function here
        }
        else {
            swal("Cancelled", "", "error");
        }
    });
}

function cancEditVehi (a)
{
    if (a=="a")
    {
        $("#editVehiPlate").hide();
        $("#editVehiCoding").hide();
        $("#editVehiInst").hide();
        $("#btnDoneEditVehi").hide();
        $("#btnCancEditVehi").hide();
        $("#btnAddDefVehi").hide();

        $("#vehiPlate").show();
        $("#vehiInst").show();
        $("#vehiCoding").show();
        $("#btnEditVehi").show();
    }
    else if (a=="m")
    {
        $("#editVehiPlateM").hide();
        $("#editVehiCodingM").hide();
        $("#editVehiInstM").hide();
        $("#btnDoneEditVehiM").hide();
        $("#btnCancEditVehiM").hide();
        $("#btnAddDefVehiM").hide();

        $("#vehiPlateM").show();
        $("#vehiInstM").show();
        $("#vehiCodingM").show();
        $("#btnEditVehiM").show();
    }
    //DB&SD: Cancel updating of vehicleA function here
}

$('#btnAddDefVehi').click(function () //resets add defect modal
{
    $(".defMod2").removeClass("activeDefMod");
    $(".defMod3").removeClass("activeDefMod");
    $(".defMod1").addClass("activeDefMod");

    $("#btnNextAddDef").show();
    $("#btnNextAddDef2").hide();
    $("#btnPrevAddDef").hide();
    $("#btnDoneAddDef").hide();
    $("#btnPrevAddDef2").hide();

    $(".divMod2").hide();
    $(".divMod3").hide();
    $(".divMod1").show();

    $('input:checkbox').prop('checked', false);
    count = 0;
    checkedValues = null;
    $('.damageTxtInput').val("");
});

function doneDefVehi ()
{
    //DB&SD: Done vehicleA defect function here
}


function cancDefVehi ()
{
    //DB&SD: Cancel vehicleA defect function here
}

function addDefVehi (a)
{
    if (a=="A")
    {
        
    }
    else{
        
    }
    $('#addNewDefectModal').modal('show');
    //DB: Add vehicle defect function here
}

function nextDef1 ()
{
    checkedValues = $('input[name="newDefPart"]:checked').map(function() {
        return this.value;
    }).get();
    count = $('input[name="newDefPart"]:checked').length;
    if (count==0)
    {
        swal("Oops!", "Please select at least one.", "error");
    }
    else
    {
        assignValuesDef2(checkedValues);
        $(".defMod1").removeClass("activeDefMod");
        $(".defMod3").removeClass("activeDefMod");
        $(".defMod2").addClass("activeDefMod");

        $("#btnNextAddDef").hide();
        $("#btnNextAddDef2").show();
        $("#btnPrevAddDef").show();

        $(".divMod1").hide();
        $(".divMod3").hide();
        $(".divMod2").show();
    }
}

var assignValuesDef2 = function (data)
{
    //count - variable kung ilan yung checked checkboxes (see line 214)
    //checkedValues - laman nito kung ano yung mga value ng checkboxes na selected (see line 211)
    var countI = count;
    var html = "";
    var render = function(){ 
        $('.formDefect').html(html);
    }
        data.forEach(element => {
        html += "<div class='row divDamage'>";
        html += "<div class='col-md-6 col-lg-6 col-xs-4 col-sm-4'>";
        html += "<h5 class='damagedPartTxt' id='defPart" + (countI-1) + "'>" + checkedValues[countI-1]; //nagbigay ako ng ID sa kada car part selected
        html +=  "<span class='asterisk'> *</span></h5></div>";
        html += "<div class='col-md-6 col-lg-6 col-xs-8 col-sm-8'>";
        html += "<input type='text' id='defTxt" + (countI-1) + "' class='flat damageTxtInput'></div>"; //nagbigay ako ng ID sa kada textfield per car part
        html += "</div>";
        countI--;
        if(countI == 0) render();   
    });
}

function nextDef2 ()
{
    var i;
    for (i=0; i<count; i++)
    {
        if ($('#defTxt'+i).val()=="")
        {
            swal("Oops!", "Please fill out all required fields.", "error");
            break;
        }
        else
        {
            if (i==(count-1))
            {
                assignValuesDef3(checkedValues);
                $(".defMod1").removeClass("activeDefMod");
                $(".defMod2").removeClass("activeDefMod");
                $(".defMod3").addClass("activeDefMod");
            
                $("#btnNextAddDef2").hide();
                $("#btnPrevAddDef").hide();
                $("#btnDoneAddDef").show();
                $("#btnPrevAddDef2").show();
            
                $(".divMod1").hide();
                $(".divMod2").hide();
                $(".divMod3").show();
            }
            else
            continue;
        }
    }
}

var assignValuesDef3 = function (data)
{
    //count - variable kung ilan yung checked checkboxes (see line 214)
    //checkedValues - laman nito kung ano yung mga value ng checkboxes na selected (see line 211)
    var countI = count;
    var html = "";
    var render = function(){ 
        $('.formSignif').html(html);
    }
        data.forEach(element => {
        html += "<div class='damageSignifDiv'>";
        html += "<center><h5 class='damagedPartTxt1'>" + checkedValues[countI-1] + "</h5>"; //di na ko nagbigay ng ID since meron na sa taas
        html += "<input type='radio' class='defRateRD defRate1' name='defRate" + (countI-1) + "' value='1' checked>";
        html += "<label class='defRateLbl' for='defRate1'>1</label>";
        html += "<input type='radio' class='defRateRD defRate2' name='defRate" + (countI-1) + "' value='2'>";
        html += "<label class='defRateLbl' for='defRate2'>2</label>";
        html += "<input type='radio' class='defRateRD defRate3' name='defRate" + (countI-1) + "' value='3'>";
        html += "<label class='defRateLbl' for='defRate3'>3</label>";
        html += "<input type='radio' class='defRateRD defRate4' name='defRate" + (countI-1) + "' value='4'>";
        html += "<label class='defRateLbl' for='defRate4'>4</label>";
        html += "<input type='radio' class='defRateRD defRate5' name='defRate" + (countI-1) + "' value='5'>";
        html += "<label class='defRateLbl' for='defRate5'>5</label>";
        html += "</center></div><br>";
        countI--;
        if(countI == 0) render();   
    });
}

function doneDef ()
{
    if (count>1)
    {
        swal("Success!", count + " defects have been added to vehicle details!", "success");
    }
    else
    {
        swal("Success!", "1 defect has been added to vehicle details!", "success");
    }
    $('#addNewDefectModal').modal('hide');
}

function prevDef1 ()
{
    $(".defMod2").removeClass("activeDefMod");
    $(".defMod3").removeClass("activeDefMod");
    $(".defMod1").addClass("activeDefMod");

    $("#btnNextAddDef2").hide();
    $("#btnPrevAddDef").hide();
    $("#btnNextAddDef").show();

    $(".divMod2").hide();
    $(".divMod3").hide();
    $(".divMod1").show();
}

function prevDef2 ()
{
    $(".defMod1").removeClass("activeDefMod");
    $(".defMod3").removeClass("activeDefMod");
    $(".defMod2").addClass("activeDefMod");
   
    $("#btnDoneAddDef").hide();
    $("#btnPrevAddDef2").hide();
    $("#btnNextAddDef2").show();
    $("#btnPrevAddDef").show();

    $(".divMod1").hide();
    $(".divMod3").hide();
    $(".divMod2").show();
}