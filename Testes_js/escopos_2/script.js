/*
Escopos de variáveis:

var = usada para escopo geral
let = usada para escopo global
const = usada para escopo local

*/

let x = 10;

if (x > 5) {
    let x = 20;
    x++;
    console.log(x);
}

console.log(x);