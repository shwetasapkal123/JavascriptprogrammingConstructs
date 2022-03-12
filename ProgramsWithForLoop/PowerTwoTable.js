let prompt = require('prompt-sync')();
let num=parseInt(prompt(console.log("Enter number upto which you want power of two: ")));
for(let i=0;i<=num;i++)
{
    let power=Math.pow(2,i);
    console.log("the power of 2^"+i+ " is= "+power);
}