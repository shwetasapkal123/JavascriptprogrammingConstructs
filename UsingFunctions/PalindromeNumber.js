let prompt=require('prompt-sync')();

function checkPalindrome() 
{
    var rem,temp,final=0;
    var number=Number;
    while(number>0)
    {
        rem=number%10;
        number=parseInt(number/10);
        final=final*10+rem;
    }
    if(final==Number)
    console.log(Number+" is Palindrome");
    else
    console.log(Number+ " is Not palimdrome");
}
 var Number=parseInt(prompt("Enter number to check palindrome or not"));
 checkPalindrome();
