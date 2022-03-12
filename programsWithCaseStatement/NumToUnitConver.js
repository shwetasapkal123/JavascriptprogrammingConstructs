let prompt = require('prompt-sync')();
let num=parseInt(prompt("Enter the number in the multiple of ten(like 1, 10,100,...): "));
switch(num)
{
    case 1:console.log("Unit");break;
    case 10:console.log("Ten");break;
    case 100:console.log("Hundred");break;
    case 1000:console.log("One Thousand");break;
    case 10000:console.log("Lakh");break;
    default:console.log("Enter in the multiple of ten start from 1");break;
}