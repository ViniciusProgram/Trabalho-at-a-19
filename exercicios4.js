const prompt = require("prompt-sync")()

const nome = prompt("Digite o nome:");
const altura = parseFloat(prompt("Digite a altura (em metros):"));
const peso = parseFloat(prompt("Digite o peso (em Kg):"));
const pesoIdeal = peso / (altura * altura);
let faixa;
if (pesoIdeal < 18.5) {
    faixa = "abaixo do peso";
} else if (pesoIdeal < 24.9) {
    faixa = "peso normal";
} else if (pesoIdeal < 29.9) {
    faixa = "sobrepeso";
} else if (pesoIdeal < 34.9) {
    faixa = "obesidade grau 1";
} else if (pesoIdeal < 39.9) {
    faixa = "obesidade grau 2";
} else {
    faixa = "obesidade grau 3";
}
console.log(`Nome: ${nome}`);
console.log(`Faixa de peso: ${faixa}`);