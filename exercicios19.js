const prompt = require("prompt-sync")()

const prova1 = parseInt(prompt("Digite a nota da Prova 1:"));
const prova2 = parseInt(prompt("Digite a nota da Prova 2:"));
const trabalho1 = parseInt(prompt("Digite a nota do Trabalho 1:"));
const trabalho2 = parseInt(prompt("Digite a nota do Trabalho 2:"));
const trabalho3 = parseInt(prompt("Digite a nota do Trabalho 3:"));
const trabalho4 = parseInt(prompt("Digite a nota do Trabalho 4:"));

const mediaProvas = (prova1 + prova2) / 2;
const mediaTrabalhos = (trabalho1 + trabalho2 + trabalho3 + trabalho4) / 4;
const mediaFinal = (mediaProvas + mediaTrabalhos) / 2;

if (mediaFinal >= 7.0) {
    console.log("Aprovado");
} else if (mediaFinal >= 4.0) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}