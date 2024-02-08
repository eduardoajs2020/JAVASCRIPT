/*
ARROW FUNCTION(funções anônimas com argumentos default)
*/


function nomeComIdade(nome, idade) {
    if (idade === undefined) {
        console.log("Seu nome é " + nome);
    } else {
        console.log("Seu nome é " + nome + " e você tem " + idade + " anos");
    }
}
nomeComIdade("João");
nomeComIdade("João", 42);

console.log("==================================================")

function soma(a, b) {
    if (a === undefined || b === undefined) {
        console.log("Esta função precisa ter os dois argumentos");
    } else {
        return a + b;
    }
}

console.log(soma(1));
console.log(soma(1, 2));


console.log("==================================================")


function saudacao(nome, idade) {
    if (idade === undefined) {
        console.log("Olá " + nome);
    } else {
        console.log("Olá " + nome + " você tem " + idade + " anos");
    }
}

saudacao("Eduardo");
saudacao("Eduardo", 44);