let prompt=require('prompt-sync')();
let num=parseInt(prompt("Enter number: "));
let resOfPow = 0;
i = 0;
while (i <= num) {
if (resOfPow < 256) {
    resOfPow = parseInt(Math.pow(2, i));
    console.log("The Power Of 2 ^ " + i + " is : " + resOfPow);
    i++;
} else {
    break;
}
}