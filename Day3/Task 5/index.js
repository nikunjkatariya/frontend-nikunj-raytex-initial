//JS to Calculate Age

function calculate()
{
    var userinput = document.getElementById("dob").value;
    var dob = new Date(userinput);
    // document.getElementById("result").innerHTML=dob;
    var date = new Date();
    console.log(date.getFullYear());
    document.getElementById("result").innerHTML="Age : "+Math.abs(date.getFullYear()- dob.getFullYear())+" Year";
}