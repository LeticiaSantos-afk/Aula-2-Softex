//Laço com Condição (for)

//Crie um array chamado numeros com pelo menos 10 números, misturando pares e ímpares (ex: [7, 12, 5, 20, 15, 8, 3, 22, 11, 4]).
let numeros = [10,11,12,13,14,15,16,17,18,19];

//Usando o laço de repetição for, percorra o array.
for(let i=0; i<numeros.length; i++){
    console.log(numeros[i]);
}

//Dentro do laço, use uma estrutura if para verificar se o número atual é par
//Se o número for par, imprima-o no console.

for(let i=0; i<numeros.length; i++){
    if(numeros[i]%2 ===0){
        console.log(`numeros ${numeros[i]}é par`);
            }

}