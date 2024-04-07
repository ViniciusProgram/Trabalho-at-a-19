const prompt = require("prompt-sync")()

const angulo1 = parseInt(prompt("Digite o primeiro ângulo:"));
const angulo2 = parseInt(prompt("Digite o segundo ângulo:"));
const angulo3 = parseInt(prompt("Digite o terceiro ângulo:"));
if (angulo1 === 90 || angulo2 === 90 || angulo3 === 90) {
    console.log("Triângulo Retângulo");
} else if (angulo1 > 90 || angulo2 > 90 || angulo3 > 90) {
    console.log("Triângulo Obtusângulo");
} else {
    console.log("Triângulo Acutângulo");
}