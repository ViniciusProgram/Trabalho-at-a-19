const prompt = require("prompt-sync")()

const valorAplicado = parseFloat(prompt("Digite o valor aplicado:"));
let taxaCorrecao;
if (valorAplicado <= 2000) {
    taxaCorrecao = 0.10;
} else if (valorAplicado <= 5000) {
    taxaCorrecao = 0.12;
} else {
    taxaCorrecao = 0.13;
}
console.log(`Taxa de correção: ${taxaCorrecao * 100}%`);