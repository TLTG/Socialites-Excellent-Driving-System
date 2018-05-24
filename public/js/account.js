$(function(){
    clrSearchAccount();

});

function updateAcc(){
    $('#btnConfAddAccount').hide();
    $('#btnCancAddAccount').show();
    $('#btnConfResetAccount').show();
    $('#btnConfEditAccount').show();
    resetAccount();
    $('#updateAccModal').modal('show');
}

function clrSearchAccount(){
    $('#searchAccount').val("");
}

function confResetAccount(){
    //DB: Reset fields here
}

function confEditAccount(){
    var a, b, c;
    var un = $('#editUNAcc').val();
    var pw = $('#editPWAcc').val();
    var cpw = $('#editCPWAcc').val();

    a = un.replace(/\s+/g, '');
    b = pw.replace(/\s+/g, '');
    c = cpw.replace(/\s+/g, '');

    if (a=="" && b=="" && c==""){
        swal("Oops!", "Please fill out all required fields.", "error");
    }
    else{
        if (b!="" && c!=""){
            if (pw==cpw){
                swal({
                    title: "Warning!",
                    text: "Are you sure you want to save these changes?",
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
                        swal("Success!", "Account is updated successfully!", "success");
                        resetAccount();
                        //DB: Update account function here
                    }
                });
            }
            else{
                swal("Oops!", "Passwords do not match!", "error");
            }
        }
        else if (b=="" && c==""){
            swal({
                title: "Warning!",
                text: "Are you sure you want to save these changes?",
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
                    swal("Success!", "Account is updated successfully!", "success");
                    resetAccount();
                    //DB: Update account function here
                }
            });
        }
        else{
            swal("Oops!", "Please fill out all required fields.", "error");
        }
    }
}

function resetAccount(){
    $('#editUNAcc').val("");
    $('#editPWAcc').val("");
    $('#editCPWAcc').val("");
}

function deactAcc(){
    swal({
        title: "Warning!",
        text: "Are you sure you want to deactivate this account?",
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
            swal("Success!", "Account is now deactivated.", "success");
            resetAccount();
            //DB: Deactivate account function here
        }
    });
}