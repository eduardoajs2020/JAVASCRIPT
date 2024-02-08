/*
ARROW FUNCTION(funções anônimas com argumentos valor default)
*/


function repetirFrase(frase, n = 2) {
    
    for (let x = 1; x <= n; x++){
        
        console.log(frase + " " + x);
    }
}
repetirFrase("Testando", 5);
repetirFrase("Só duas vezes");

console.log("========================================================")

function potencia(base, exp = 2) {

    return Math.pow(base, exp);
}

console.log(potencia(2));
console.log(potencia(2,2));
console.log(potencia(2,3));
