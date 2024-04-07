const prompt = require("prompt-sync")()

const prova1 = parseFloat(prompt("Digite a nota da Prova 1:"));
const prova2 = parseFloat(prompt("Digite a nota da Prova 2:"));
const trabalho1 = parseFloat(prompt("Digite a nota do Trabalho 1:"));
const trabalho2 = parseFloat(prompt("Digite a nota do Trabalho 2:"));
const media = (prova1 + prova2 + trabalho1 + trabalho2) / 4;
if (media >= 7.0) {
    console.log("Aprovado");
} else if (media >= 4.0) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}