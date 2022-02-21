var name="Nikunj"; //String Type

var number=987;  //Number Type
var bool=true; //Boolean
var number2= 287;

var name=6458;

function addition()
{
    var sum = number + number2;
    var mul = number * number2;
    document.getElementById("newone").innerHTML = name;
    document.getElementById("sum").innerHTML=sum;
    console.log(sum);
    document.getElementById("mul").innerHTML=mul;
    console.log(mul);
}

//ES6 let
let fname="thomas";
const details = {name:"NK", age:23, detail : function() {return "Name: "+this.name + " Age: " +this.age} };
//display Object by this keyword
function displayobject()
{
    document.getElementById("valobject").innerHTML=details.detail();
    // "Name: "+this.details.name + " Age: " +this.details.age;
}

var number = document.getElementById("numa").value;

//take input from form tags
function evenoddfunction(){

    if(number%2==0){
        console.log("Even");
        document.getElementById("checknumber").innerHTML="Even";
    }
    else
    {
        console.log("Odd");
        document.getElementById("checknumber").innerHTML="Odd";
    }
}

//Array
var number = [1,2,3,4,5,6,7];

//Date Function

var date = new Date();
console.log(date);