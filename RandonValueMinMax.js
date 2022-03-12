let randomArrayNumber=new Array();
for (i=0;i<5;i++)
{
//returns random integer from 100 to 999
var res=Math.floor(Math.random()*899)+100;
console.log(res);
//var min=Math.min(res);
randomArrayNumber.push(res);
}
randomArrayNumber.sort();
console.log("Minumum value is "+randomArrayNumber[0]);
console.log("Maximum value is "+randomArrayNumber[4]);