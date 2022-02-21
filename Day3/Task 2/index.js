// Write JS function to count the number of Characters

function wordcount(){
    var name= document.getElementById("readval").value;
    var count = 0;
    console.log(name.length);
    for(var i=0;i<name.length;i++)
    {
        count++;
    }
    document.getElementById("result").innerHTML=" Number of Characters are : " + count;
}