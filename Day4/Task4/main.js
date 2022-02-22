let count=0;
function savedata()
{
    count++;
    var name = document.getElementById("name").value;
    var mail = document.getElementById("mail").value;
    var cityid = document.getElementById("city1").value;
    var stateid = document.getElementById("state1").value;
    var table = document.getElementById("content");
    // alert("");
    if(isNaN(name)&&isNaN(mail)&&cityid!=0&&stateid!=0)
    {
        // alert("");
        var row = table.insertRow(count);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        
        var cityname,statename;

        cell1.innerHTML= count;
        cell2.innerHTML= name;
        cell3.innerHTML= mail;
        if(cityid==1)
            cityname="Surat";
        else if(cityid==2)
            cityname="Mumbai";
        else if(cityid==3)
            cityname="Ajmer";    
        cell4.innerHTML= cityname;
        if(stateid==1)
            statename="Gujarat";
        else if(stateid==2)
            statename="Maharshtra";
        else if(stateid==3)
            statename="Rajasthan";
        cell5.innerHTML= statename;
    }
    else{
        alert(" Provide All Credentials!!");
    }
}