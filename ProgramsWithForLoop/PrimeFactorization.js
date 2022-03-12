let prompt=require('prompt-sync')();
let numFact = parseInt(prompt("Enter a number : "));
for (let i = 2; i*i <= numFact; i++) {
    while (numFact % i == 0) {
        console.log("factor = " + numFact);
        numFact = numFact / i;
        console.log("Prime Factor is " + i);
    }
}
if (numFact > 1)
    console.log("Prime Factor is " + numFact);
