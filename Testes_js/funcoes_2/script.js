function multiplicarTresNumeros(x, y, z) {
    return x * y * z;
}

console.log(multiplicarTresNumeros(5, 4, 3));

const mult = multiplicarTresNumeros(5, 4, 8);

console.log("O valor de mult é: " + mult);


function podeDirigir(idade, cnh) {
    if (idade >= 18 && cnh == true) {
        console.log("Pode Dirigir");
    }
    else {
        console.log("Não pode Dirigir");
    }
}

console.log(podeDirigir(19,true));
console.log(podeDirigir(25, true));
console.log(podeDirigir(44,0));
console.log(podeDirigir(19,1));
console.log(podeDirigir(17, false));
console.log(podeDirigir(42, false));


/*
Escopos de variáveis:

var = usada para escopo geral
let = usada para escopo global
const = usada para escopo local

*/