import messageObject from './messageGenerator.js'; //nieuwe versie van importeren
import readline from "readline"; // Import de module readline, om gebruikers input te lezen.

//Random nummer genereren op basis van de lengte van de array
const randomNumberGenerator = (arr) => {
    let randomNum = Math.floor( Math.random() * arr.length)
return randomNum
}

//Hier gaan we een interface aanmaken. 
// Dit maakt het mogelijk om te luisteren naar input van de gebruiker.
// Dit stukje code is stadaard! Wordt altijd gebruikt. 
const userInputInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function vraagNaam() {
    return new Promise((resolve) => {
        userInputInterface.question("Wat is je naam? ", (naam) => {
            resolve(naam);
            userInputInterface.close();
        });
    });
}

async function main() {
    let userName = await vraagNaam();
    console.log(`Hallo, ${userName}`);
    console.log("Voor je komende triatlon zal ik je de volgende tips meegeven.")
    console.log("Zo wordt je triatlon zeker een succes!")
    console.log(`1: ${messageObject.zwemmen[randomNumberGenerator(messageObject.zwemmen)]}`);
    console.log(`2: ${messageObject.fietsen[randomNumberGenerator(messageObject.fietsen)]}`);
    console.log(`3: ${messageObject.lopen[randomNumberGenerator(messageObject.lopen)]}`);
    console.log(`Bonus: ${messageObject.wisselzone[randomNumberGenerator(messageObject.wisselzone)]}`);


} 

main();