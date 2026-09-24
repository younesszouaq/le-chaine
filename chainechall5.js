const prompt = require("prompt-sync")();

const chaine = prompt("Entrez une chaîne de caractères :");

const inverse = chaine.split("").reverse().join("");

console.log("La chaîne inversée est : " + inverse);
