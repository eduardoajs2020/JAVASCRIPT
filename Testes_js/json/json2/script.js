/*
Objetos JSON para string(json.stringify) e vice-versa(json.parse)
*/

let pessoa = {
    "nome": "Matheus",
    "idade": 28,
    "profissão": "programador",
    "hobbies": ["video game", "Leitura", "Correr"]
}

let pessoaTexto = JSON.stringify(pessoa);
console.log(pessoaTexto);

let pessoaJSON = JSON.parse(pessoaTexto);
console.log(pessoaJSON);

console.log(pessoaJSON.hobbies[0]);