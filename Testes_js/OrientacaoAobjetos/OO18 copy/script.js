class EnderecoCliente {
    
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        
    }

    set novaRua(novaRua) {
        this.rua = novaRua;
    }

    
    set novoBairro(novoBairro) {
        this.bairro = novoBairro;
}
    

    set novaCidade(novaCidade) {
        this.cidade = novaCidade;
    }
    
    set novoEstado(novoEstado) {
        this.estado = novoEstado;
    }
}

let enderecoCliente = new EnderecoCliente("Rua 1", "Camargos", "São Paulo", "SP");

console.log(enderecoCliente);

enderecoCliente.novaRua = "Rua dos cachorros";
enderecoCliente.novoBairro = "Paraíso";
enderecoCliente.novaCidade = "Rio de Janeiro";
enderecoCliente.novoEstado = "RJ";

console.log(enderecoCliente);
document.write(enderecoCliente);