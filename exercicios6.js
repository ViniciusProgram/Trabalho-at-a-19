const prompt = require("prompt-sync")()

const salarioAtual = parseFloat(prompt("Digite o salário atual:"));
let novoSalario;
if (salarioAtual <= 1320) {
    novoSalario = salarioAtual * 1.11; // 11% de aumento
} else if (salarioAtual <= 3000) {
    novoSalario = salarioAtual * 1.09; // 9% de aumento
} else if (salarioAtual <= 7000) {
    novoSalario = salarioAtual * 1.06; // 6% de aumento
} else {
    novoSalario = salarioAtual * 1.01; // 1% de aumento
}
console.log(`Novo salário: ${novoSalario}`);