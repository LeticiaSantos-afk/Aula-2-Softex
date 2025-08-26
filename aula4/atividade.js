const readline = require("readline-sync");
let ano = readline.question("Em que ano você nasceu? ");

let idade = 2025-ano;
console.log(`Você tem ${idade }anos`);

if (idade >=18) {
    console.log("você é maior de idade");
} else { 
console.log("Você é menor de idade");
}

