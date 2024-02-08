//Prototype é um fallback de outro objeto

const pessoa = {
    maos: 2,
    
}

console.log(pessoa);
console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) === Object.prototype);


console.log(pessoa.hasOwnProperty('maos'));

console.log('--------------------------------------------')

const pessoaNova = Object.create(pessoa);

console.log(pessoaNova.maos);

console.log(pessoaNova.hasOwnProperty('maos'));
console.log(Object.getPrototypeOf(pessoaNova) === pessoa);