//Cria um objeto Javacript
let objtoJS   = {agencia: "5678-9", tipo: "física", nome: "Maria José", numero: "222.222-22"};

//Converte o objeto Javascript em texto JSON
let textoJson = JSON.stringify(objtoJS);

//Redireciona a página para o endereço especificado, passando, via GET, o texto JSON
window.location = "processa/json/?conta=" + textoJson;