/*
Metodo string join(Junta elementos em um array e em uma frase, por meio de um separador)
*/

let frase = "Testando o metodo split";

let palavras = frase.split(" ");

let fraseMontada = palavras.join('@');

console.log(fraseMontada);

console.log(palavras.join(" "));