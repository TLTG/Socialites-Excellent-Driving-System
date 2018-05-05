$(function() {
    // $("#btnNewInstructor").on("click", function() {
    //     $('#newInstructor').modal('show');
    // });
});
$("#btnConfAddInstr").on("click", function() {
    var fn = $("#newInstFirstname").val();
    var ln = $("#newInstSurname").val();
    var bday = $("#newInstBday").val();
    var add = $("#newInstAddress").val();
    var phone = $("#newInstPhone").val();
    var email = $("#newInstEmail").val();
    if (fn == "" || fn.length == 0 || fn == null
        || ln == "" || ln.length == 0 || ln == null
        || bday == "" || bday.length == 0 || bday == null
        || add == "" || add.length == 0 || add == null
        || phone == "" || phone.length == 0 || phone == null
        || email == "" || email.length == 0 || email == null) {
            swal("Oops!", "Please fill out all required fields.", "error");
        }
});
$("#btnConfConfAI").on("click", function() {
    var pass = $("#confPass").val();
    if (pass == "" || pass.length == 0 || pass == null) {
            swal("Oops!", "Please fill out all required fields.", "error");
        }
    // else if {
    //     alert ('Conditions and validations here.'); //DB: Conditions and validations here.
    // }
    else{
        swal("Success!", "Instructor has been added to database!", "success");
        $('#newInstructor').modal("hide");
    }
});

