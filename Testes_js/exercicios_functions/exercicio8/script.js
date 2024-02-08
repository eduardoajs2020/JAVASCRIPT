/*
FUNCTION(função comprimento da palavra)
*/

function comprimentoPalavra(nome) {

    if (nome.length > 10) {

        console.log("Texto muito longo!");

    } else {

        console.log("Texto dentro do limite!");
        
    }

    console.log(nome.length);
}

comprimentoPalavra("paralelepipedo");
comprimentoPalavra("uno");
comprimentoPalavra("5");