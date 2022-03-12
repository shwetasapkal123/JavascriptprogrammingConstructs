let prompt = require('prompt-sync')();
let day = parseInt(prompt("Enter a day from march 20 to june 20 : "));
let month = prompt("Enter a month from march to june : ");
if (month == "MARCH" || month == "March" || month == "march") {
    if (day > 20) {
        console.log(true);
    } else
        console.log(false);
}
if (month == "APRIL" || month == "April" || month == "april") {
    if (day < 31 && day > 0) {
        console.log(true);
    } else
        console.log(false);
}
if (month == "MARCH" || month == "MARCH" || month == "MARCH") {
    if (day < 32 && day > 0) {
        console.log(true);
    } else
        console.log(false);
}
if (month == "June" || month == "JUNE" || month == "june") {
    if (day < 20) {
        console.log(true);
    } else
        console.log(false);
}
else
{
    console.log("Enter month between march and june");
}