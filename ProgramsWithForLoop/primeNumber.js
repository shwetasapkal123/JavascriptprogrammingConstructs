let prompt=require('prompt-sync')();
let startNum=parseInt(prompt("Enter number to check prime or not"));
count=0;
for(let i=2;i<=startNum;i++)
{
    if(startNum%i==0)
    {
        count+=1;
    }
}
if(count==1)
{
    console.log(startNum+" is Prime Number")
}
else
{
    console.log(startNum+" is not prime number");
}