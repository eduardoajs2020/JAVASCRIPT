//função sem argumentos
function imprimirNoConsole() {
    console.log("Olá Mundo!");
}

imprimirNoConsole();

//Função com argumentos
function imprimirUmNumero(num) {
    console.log("O número é: " + num)
}

imprimirUmNumero(10);
imprimirUmNumero(8);
imprimirUmNumero(5);
imprimirUmNumero(49);
imprimirUmNumero(19);

//Função anônima
const numeroAleatorio = function () {
    console.log(Math.random());
}
numeroAleatorio();
numeroAleatorio();
numeroAleatorio();
