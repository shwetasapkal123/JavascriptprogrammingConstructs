let prompt=require('prompt-sync')();
let num=parseInt(prompt("Enter number to find factorial"));
fact=1
for(i=1;i<=num;i++)
{
    fact=fact*i;
}
console.log("factorial of "+ num +" is "+fact);