const prompt = require("prompt-sync")()

const numeros = [];
for (let i = 0; i < 3; i++) {
    numeros.push(parseInt(prompt(`Digite o ${i+1}º número:`)));
}
numeros.sort((a, b) => a - b);
console.log("Números em ordem crescente:");
console.log(numeros);
