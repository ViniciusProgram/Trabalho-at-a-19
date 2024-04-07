const prompt = require("prompt-sync")()

const quantidadeLaranjas = parseInt(prompt("Digite a quantidade de laranjas compradas:"));
let valorTotal;
if (quantidadeLaranjas < 12) {
    valorTotal = quantidadeLaranjas * 0.40;
} else {
    valorTotal = quantidadeLaranjas * 0.28;
}
console.log(`Valor total da compra: R$ ${valorTotal.toFixed(2)}`);