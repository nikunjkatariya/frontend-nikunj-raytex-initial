function setter(status){
    var curadd = document.getElementById("tempadd").value;
    var pincode = document.getElementById("pincode1").value;
    var state = document.getElementById("state1").value;

    // alert(status.checked);
    if(status.checked)
    {
        document.getElementById("peradd").value=curadd;
        document.getElementById("pincode2").value=pincode;
        document.getElementById("state2").value=state;
        document.getElementById("peradd").disabled=true;
        document.getElementById("pincode2").disabled=true;
        document.getElementById("state2").disabled=true;
    }
}