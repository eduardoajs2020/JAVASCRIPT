function checarNumero(num) {
    let number = Number(num);
    if (Number.isNaN(number)) {
        console.log("Por favor, passe só os números para o programa");
    } else {
        return number;
    }
}

checarNumero(5);
checarNumero('pato');

let number = prompt("Digite um numero: ");

checarNumero(number);