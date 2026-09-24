const prompt = require('prompt-sync')();
const NR = prompt ("enter a number");

for (let i = 1 ; i <= 10 ; i++){ 
   let resiltat = NR * i
   console.log(`${NR}* ${i} = ${resiltat}`);
 
}

