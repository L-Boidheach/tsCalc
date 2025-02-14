"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// \  | ||
const readline_sync_1 = require("readline-sync");
function main() {
    const primeiraString = (0, readline_sync_1.question)('enter a number:\n');
    const operador = (0, readline_sync_1.question)('Qual o operador:\n');
    const segundaString = (0, readline_sync_1.question)('Qual o segundo numero:\n');
    const valido = enNumero(primeiraString) && enOperado(operador) && enNumero(segundaString);
    if (valido) {
        const num1 = parseInt(primeiraString);
        const num2 = parseInt(segundaString);
        const resultado = calcular(num1, operador, num2);
        console.log(resultado);
    }
    else {
        console.log('Entrada invalida');
        main();
    }
}
function calcular(num1, operador, num2) {
    switch (operador) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
    }
}
function enOperado(operador) {
    switch (operador) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
function enNumero(str) {
    const talvezNum = parseInt(str);
    const eNum = !isNaN(talvezNum);
    return eNum;
}
main();
