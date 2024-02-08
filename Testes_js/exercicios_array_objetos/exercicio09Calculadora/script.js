//Objeto com calculos

const calculadora = {

    soma: function (a, b){
        return a + b;
    },
    subtracao: function (a, b) {
        return a - b;
    },
    multiplicacao: function (a, b) {
        return a * b;
    },
    divisao: function (a, b) {
        return a / b;
    }
}

console.log(calculadora.soma(25, 12));
console.log(calculadora.subtracao(32, 5));
console.log(calculadora.multiplicacao(13, 2));
console.log(calculadora.divisao(51, 2));