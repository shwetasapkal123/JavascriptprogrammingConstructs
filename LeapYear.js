let prompt = require('prompt-sync')();
let year=parseInt(prompt("Enter year: "));
if(year.toString().length==4)
{
    if(year%4==0 || year%400==0)
    {
        console.log( year +" is Leap year");
    }
    else
    {
        console.log( year +" is not Leap year");
    }
}
else
{
    console.log("Enter 4 digit year");
}