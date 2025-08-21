let readline = require('readline-sync');
let numero1 = readline.questionInt('digite o primeiro numero: ')
let numero2 = readline.questionInt('digite o segundo numero: ')
let operador = readline.question('digite a operação (+,-,*,/): ')
switch(operador) {
    case "+":
console.log(`resultado: ${numero1+numero2}`)
break
case "-":
    console.log(`resultado: ${numero1-numero2}`)
    break
    case "*":
        console.log(`resultado: ${numero1*numero2}`)
        break
        case "/":
            console.log(`resultado: ${numero1/numero2}`)
            break
default:
    console.log('operador inválido')
    break

}