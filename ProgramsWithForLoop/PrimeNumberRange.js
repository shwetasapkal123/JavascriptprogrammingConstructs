let prompt=require('prompt-sync')();
let startNum=parseInt(prompt("Enter starting number to find the prime number between that range"));
let endNum=parseInt(prompt("Enter ending number to find the prime number between that range"));
//printing all prime numbers in the given range
for(let i=startNum;i<=endNum;i++)
{
    count=0;
    for(j=0;j<=i;j++)
    {
        if(i%j==0)
        {
            count+=1;
        }
    }
    if(count==2)
    {
        console.log(i);
    }
}