// \  | ||
import { question } from "readline-sync";

type Operador = '+' | '-' | '*' | '/';

function main(): void{
    const primeiraString: string = question('enter a number:\n');
    const operador: string = question('Qual o operador:\n');
    const segundaString: string = question('Qual o segundo numero:\n');

    const valido: boolean = enNumero(primeiraString) && enOperado(operador) && enNumero(segundaString)

    if(valido){
        const num1: number = parseInt(primeiraString);
        const num2: number = parseInt(segundaString);
        const resultado = calcular(num1, operador as Operador, num2)
        console.log(resultado)
    } else {
        console.log('Entrada invalida');
        main();
    }
}

function calcular(num1: number, operador: Operador, num2: number){
    switch(operador){
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

function enOperado(operador: string): boolean{
    
    switch(operador){
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}

function enNumero(str: string): boolean{
    const talvezNum = parseInt(str);
    const eNum: boolean = !isNaN(talvezNum);
    return eNum;
}

main();