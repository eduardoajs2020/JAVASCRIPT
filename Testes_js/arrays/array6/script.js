/*
ARRAY SHIFT(REMOVE O PRIMEIRO ELEMENTO DO ARRAY)
ARRAY PUSH(INSERE ELEMENTOS NA ULTIMA POSIÇÃO DO ARRAY)
*/

let carros = ["BMW", "Audi", "VW", "Fiat"];

let removerPrimeiroCarro = carros.shift();

console.log(removerPrimeiroCarro);
console.log(carros);

carros.unshift("Gurgel");

console.log(carros);
console.log(carros[0]);