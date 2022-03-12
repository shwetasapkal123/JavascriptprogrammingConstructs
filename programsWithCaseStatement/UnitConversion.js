let prompt = require('prompt-sync')();
let option=parseInt(prompt(console.log("Choose an option:1.Feet to Inch\t2.Feet to Meter\t3.Inch to feet\t4.meter to feet")));
switch(option)
{
    case 1:
        let num=parseInt(prompt(console.log("Enter the number")));
        let res=num*12;
        console.log("Feet to inch is "+res + " inch");
        break;
        case 2:
             let num1=parseInt(prompt(console.log("Enter the number")));
             meter= num1*0.305;
             console.log("Feet to meter conversion is: "+meter+" m");
             break;
             case 3:
                 let num2=parseInt(prompt(console.log("Enter the number")));
                 feet=num2*0.084;
                 console.log("Inch to feet conversion is: "+feet+"foot");
                 break;
                 case 4:
                     let num3=parseInt(prompt(console.log("Enter the number")));
                     mfeet=num3*3.28;
                     console.log("Meter to feet conversion is: "+mfeet+" foot");
                     break;
                     default:
                         console.log("Enter valid option");
                         break;
}