function checknumber()
{
    var numberone = document.getElementById("readnum").value;
    console.log(numberone);
    var flag=true;
    if(numberone > 0){
        if(numberone==1){
            document.getElementById("status").innerHTML="Number is Composite";
        }
        else
        {
            for(var i=2;i<numberone;i++)
            {
                if(numberone%i==0)
                {
                    flag=false;
                    break;
                }
            }
            if(flag){
                document.getElementById("status").innerHTML="Number is Prime";
            }
            else{
                document.getElementById("status").innerHTML="Number is Not Prime";
            }
        }   
    }
    else
    {
        document.getElementById("status").innerHTML="Provide Correct Number";
    }
}