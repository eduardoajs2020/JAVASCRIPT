function saudacao(nome) {
    if (typeof nome != 'string') {
        throw new Error("O parâmetro nome precisa ser string");
    } else {
        console.log(`Ola ${nome},`);
    }
}

saudacao("Matheus");
saudacao(5);

console.log("teste");
