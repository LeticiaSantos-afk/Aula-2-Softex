//Usando laços de repetição aninhados (um laço for dentro de outro), crie um programa que imprima as tabuadas de multiplicação do número 2 até o número 9.

const { i, total } = require("./exercicio1");

let tabuadas = [2,3,4,5,6,7,8,9];
for (let i=0; i<tabuadas.length; i++){
let numero = tabuadas[i];

for (let k= 1; k<=10; k++){
console.log(`${numero} x ${k} = ${numero*k}`);

}
}

//O programa deve imprimir cada tabuada em uma linha separada, começando de [número] x 1 até [número] x 10.

tabuadas = [2,3,4,5,6,7,8,9];
for (let i=0; i<tabuadas.length; i++){
    let numero = tabuadas[i]
let linha = `tabuada do ${numero}:`;

for (let k = 1; k <= 10; k++) {
    linha += `${numero} x ${k} = ${numero*k}`;
if(k<10) linha += "|";

 }
console.log(linha);
};for (let i = 0; i < produtos.length; i++) {
    total += produtos[i].preco;
}

