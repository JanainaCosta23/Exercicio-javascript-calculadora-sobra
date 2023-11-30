const prompt = require('prompt-sync')();

let valor1 = Number(prompt("Digite o primeiro valor:"));
let valor2 = Number(prompt("Digite o segundo valor:"));
let operador = prompt("Digite o operador:");
let resultado;
  

if (operador === "+") {
    resultado = valor1 + valor2;
    console.log("O resultado da Soma foi: ", resultado)
}

if (operador === "-") {
    resultado = valor1 - valor2;
    console.log("O resultado da subtração foi: ", resultado)
}

if (operador === "*") {
    resultado = valor1 * valor2;
    console.log("O resultado da Multiplicação foi: ", resultado)
}

if (operador === "/") {
    resultado = valor1 / valor2;
    console.log("O resultado da divisão foi: ", resultado)

    if (resultado % 1 !== 0) {
        console.log("Sobra da divisão: ", resultado % 1);
    }
} 