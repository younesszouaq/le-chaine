const prompt = require ("prompt-sync")();


const chaine1 = prompt("Entrez la première chaîne :");
const chaine2 = prompt("Entrez la deuxième chaîne :");

if (chaine1 === chaine2) {
    console.log("Les chaînes sont égales.");
} else {
    console.log("Les chaînes sont différentes.");
}
