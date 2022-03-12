let prompt=require('prompt-sync')();
let num=parseInt(prompt("Enter number upto which you want Harmonic Number"));
let res=0;
for(let i=1;i<=num;i++)
{
     res=res+(1/i);
    console.log("Harmonic Number series is "+res);
}