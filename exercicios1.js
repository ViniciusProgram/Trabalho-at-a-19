const prompt = require("prompt-sync")()

num1 = 20;
if (num1 % 2 == 0 && num1 % 10 == 0) {
    console.log("O número é par e divisível por 10.");
} else {
    console.log("O número não é par e/ou não é divisível por 10.");
}