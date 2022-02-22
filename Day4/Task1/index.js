function result()
{
    var name = document.getElementById("name1").value;
    var mail = document.getElementById("email1").value;
    var detail = document.getElementById("text1").value;

    document.getElementById("resname").innerHTML = name;
    document.getElementById("resemail").innerHTML = mail;
    document.getElementById("restext").innerHTML = detail;
}