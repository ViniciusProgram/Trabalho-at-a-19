const prompt = require("prompt-sync")()

const senha = parseInt(prompt("Digite a senha:"));
if (senha === 5479) {
    console.log("ACESSO PERMITIDO");
} else {
    console.log("ACESSO NEGADO");
}