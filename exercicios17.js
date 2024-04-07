const prompt = require("prompt-sync")()

const mesNumerico = parseInt(prompt("Digite o número do mês:"));
let mesExtenso;
switch (mesNumerico) {
    case 1:
        mesExtenso = "janeiro";
        break;
    case 2:
        mesExtenso = "fevereiro";
        break;
    case 3:
        mesExtenso = "março";
        break;
    case 4:
        mesExtenso = "abril";
        break;
    case 5:
        mesExtenso = "maio";
        break;
    case 6:
        mesExtenso = "junho";
        break;
    case 7:
        mesExtenso = "julho";
        break;
    case 8:
        mesExtenso = "agosto";
        break;
    case 9:
        mesExtenso = "setembro";
        break;
    case 10:
        mesExtenso = "outubro";
        break;
    case 11:
        mesExtenso = "novembro";
        break;
    case 12:
        mesExtenso = "dezembro";
        break;
    default:
        mesExtenso = "mês inválido!";
}
console.log(`O mês correspondente é: ${mesExtenso}`);