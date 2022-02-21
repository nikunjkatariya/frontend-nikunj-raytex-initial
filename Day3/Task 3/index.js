//Print Fibbonacci Series

function printseries()
{
    var readvalue = document.getElementById("readvalue").value;

    var num1=0,num2=1,sum=num1+num2;
    console.log(num1);
    console.log(num2);
    while(sum<readvalue)
    {    
        console.log(sum);
        num1=num2;
        num2=sum;
        sum = num1 + num2;
        // result = output.concat(" ",sum);
    }   
    // document.getElementById("result").innerHTML= result; 
}