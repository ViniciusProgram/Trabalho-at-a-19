const prompt = require("prompt-sync")()

const lado1 = parseInt(prompt("Digite o primeiro lado do triângulo:"));
const lado2 = parseInt(prompt("Digite o segundo lado do triângulo:"));
const lado3 = parseInt(prompt("Digite o terceiro lado do triângulo:"));
if (lado1 === lado2 && lado2 === lado3) {
    console.log("Triângulo equilátero");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("Triângulo isósceles");
} else {
    console.log("Triângulo escaleno");
}