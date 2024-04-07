const prompt = require("prompt-sync")()

const valores = [];
for (let i = 0; i < 5; i++) {
    valores.push(parseInt(prompt(`Digite o ${i+1}º valor:`))); }