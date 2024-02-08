/*
FUNCTION(função calcula cnh)
*/

function podeDirigir(idade) {
    if (idade < 18){
        console.log("Ainda não pode dirigir!");
    } else {
        console.log("Já pode dirigir!");
    }
}
podeDirigir(18);
podeDirigir(40);
podeDirigir(9);
podeDirigir(17);