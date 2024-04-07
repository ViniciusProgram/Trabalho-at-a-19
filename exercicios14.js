const prompt = require("prompt-sync")()

const dia = parseInt(prompt("Digite o dia:"));
const mes = parseInt(prompt("Digite o mês:"));
const ano = parseInt(prompt("Digite o ano:"));
let dataValida = true;
if (dia <= 0 || dia > 31 || mes <= 0 || mes > 12) {
    dataValida = false;
} else if ((mes === 2 && dia > 29) || ((mes === 4 || mes === 6 || mes === 9 || mes === 11) && dia > 30)) {
    dataValida = false;
}
if (dataValida) {
    console.log("Data válida");
} else {
    console.log("Data inválida");
}