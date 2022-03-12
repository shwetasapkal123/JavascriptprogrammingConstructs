let prompt = require(`prompt-sync`)({ sigint: true });

//Function to convert degree to farheinite
function degreesInCelciusToFarheinite() {
    let celcius = parseFloat(prompt("Enter the temprature in celcius : "));
    let farheinite = parseFloat((celcius * 9 / 5) + 32).toFixed(2);
    console.log("Celsius to Fahrenheit :  : " + farheinite + " F");
}
//Function to convert farheinite to degree
function farheiniteToDegreeInCelcius() {
    let farheinite = parseFloat(prompt("Enter the temprature in farhenite : "));
    let celcius = parseFloat((farheinite - 32) * 5 / 9).toFixed(2);
    console.log("Fahrenheit to Celsius : " + celcius + " C");
}

option=parseInt(prompt(console.log("Choose an option:1.Degree celsius to Faraninite\t2.farheinite to degree celsius")));
switch(option)
{
    case 1:degreesInCelciusToFarheinite();break;
    case 2: farheiniteToDegreeInCelcius();break;
    default:console.log("wrong option choosed");
}