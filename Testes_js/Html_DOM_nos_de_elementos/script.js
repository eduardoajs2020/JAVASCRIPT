let lista = document.createElement("ul");


for (let i = 0; i < 5; i++){
    let item = document.createElement("li");

    let texto = document.createTextNode("Texto lista " + i);

    lista.appendChild(item);

    lista.appendChild(texto);

}

let container = document.getElementById("container-principal");

container.appendChild(lista);

