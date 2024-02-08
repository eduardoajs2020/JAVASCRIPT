/*
Escopos de variáveis:

var = usada para escopo geral
let = usada para escopo global
const = usada para escopo local

*/

let y = 10;

function imprimir() {
    let y = 150;
    console.log(y);

}
imprimir();

console.log(y);
