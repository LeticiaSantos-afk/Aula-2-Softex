//Exercício 3: Laço de Repetição (for) 
//Crie um array chamado animais com cinco nomes de animais.

let animais = ['cachorro', 'gato', 'jacaré', 'cobra', 'capivara'];

//Usando o laço de repetição for tradicional, percorra o array e, para cada animal, imprima a seguinte frase no console: "O animal na posição [índice] é [nome do animal]".
for(let i=0; i<animais.length; i++) {  
console.log(`o animal na posição ${i} é ${animais[i]}`)
}