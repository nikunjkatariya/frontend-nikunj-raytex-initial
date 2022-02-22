function authentication()
{
    var mailid = document.getElementById("mail").value;
    var detail = document.getElementById("text").value;
    if(mailid=="")
    {
        alert("Provide Detials First!!");
    }
    else{
        console.log("Mail ID: "+mailid);
        console.log("Feedback: "+detail);
        alert("Data Submitted Successfully!!");
    }
}
var count=0;    
function view(x)
{
    switch (x) {
        case 1:
            console.log("Memory");
            document.getElementById("book1").innerHTML="Memory";
            alert("Memory");
            count++;
            document.getElementById("iconcount").innerHTML=count;
            break;
        case 2:
            console.log("Bettle Lee Crosby");
            document.getElementById("book2").innerHTML="Bettle Lee Crosby";
            alert("Bettle Lee Crosby");
            count++;
            document.getElementById("iconcount").innerHTML=count;
            break;
        case 3:
            console.log("Pieces of Light");
            document.getElementById("book3").innerHTML="Pieces of Light";
            alert("Pieces of Light");
            count++;
            document.getElementById("iconcount").innerHTML=count;
            break;
        case 4:
            console.log("The Dreaming Arts");
            document.getElementById("book4").innerHTML="The Dreaming Arts";
            alert("The Dreaming Arts");
            count++;
            document.getElementById("iconcount").innerHTML=count;
            break;
        case 5:
            console.log("The Treachery of Beautiful Things");
            document.getElementById("book5").innerHTML="The Treachery of Beautiful Things";
            alert("The Treachery of Beautiful Things");
            count++;
            document.getElementById("iconcount").innerHTML=count;
            break;
    }
}