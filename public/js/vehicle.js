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