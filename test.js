const prompt = require('prompt-sync');


let age = Number(prompt("enter your age:"))  

let money = Number(prompt("enter your money"))

if (age >= 18 && money >= 100){
    console.log("access graanted")
}

else{
    console.log("access denied")
}