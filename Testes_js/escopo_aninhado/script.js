/*
Escopos de variáveis:

var = usada para escopo geral
let = usada para escopo global
const = usada para escopo local

*/

let a = 10;

function multiplicar(x, y) {
    
    let a = x * y;

    if (a > 10) {

        let a = 0;

        a++;

        console.log(a);
    }
    console.log(a);
}

console.log(a);

multiplicar(3, 7);