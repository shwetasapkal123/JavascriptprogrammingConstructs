let prompt=require('prompt-sync')();
heads=0;
tails=0;
while(heads<11 && tails<11)
{
    flipcoin=Math.floor(Math.random()*10)%2;
    if(flipcoin==0)
    heads++;
    else
    tails++;
}
console.log("heads are: "+heads);
console.log("tails: "+tails);
if(heads==11)
console.log("heads win");
if(tails==11)
console.log("tails win");