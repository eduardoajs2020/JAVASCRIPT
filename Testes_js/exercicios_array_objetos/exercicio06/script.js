/*
ARRAY includes(Verifica se o array tem um determinado elemento)

*/

let nomes = ["Carlos", "Eduardo", "Matheus", "José", "Pedro", "Lucas", "João"];

let numeros = [1, 2, 3, 4];

function tamanhoArray(arr) {
    if (arr.length >= 5) {
        console.log("Muitos elementos");
    }
    else {
        console.log("Poucos elementos");
    }
    
}

tamanhoArray(nomes);
tamanhoArray(numeros);

