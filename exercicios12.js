const prompt = require("prompt-sync")()

const numLados = parseInt(prompt("Digite o número de lados do polígono:"));
if (numLados === 3) {
    console.log("TRIÂNGULO");
    const medidaLado = parseFloat(prompt("Digite a medida do lado (em cm):"));
    const areaTriangulo = (Math.sqrt(3) / 4) * (medidaLado * medidaLado);
    console.log(`Área do triângulo: ${areaTriangulo} cm²`);
} else if (numLados === 4) {
    console.log("QUADRADO");
    const medidaLado = parseFloat(prompt("Digite a medida do lado (em cm):"));
    const areaQuadrado = medidaLado * medidaLado;
    console.log(`Área do quadrado: ${areaQuadrado} cm²`);
} else if (numLados === 5) {
    console.log("PENTÁGONO");
} else if (numLados < 3) {
    console.log("NÃO É UM POLÍGONO");
}