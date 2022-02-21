// HTML fomr that accept username and password.
//     on sumit, it allows you to login.

function authentication()
{
    var username= document.getElementById("username").value;
    var passwd = document.getElementById("passwd").value;
    
    if(username=="")
    {
        alert("Provide Username!");
    }
    else if(passwd=="")
    {
        alert("Provide Password!");
    }
    else{
        if(username=="admin123" && passwd=="admin123")
        {
            console.log("Success");
            alert("Login Successfully!");
        }
        else{
            console.log("Failed");
            alert("Please Provide Valid Credations!!")
        }
    }
}