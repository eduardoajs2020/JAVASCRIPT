class EnderecoCliente {
    
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.itens = [];
    }

    updateItem(newAddress) {
        if (newAddress.rua) {
            this.rua = newAddress.rua;
        }
        if (newAddress.bairro) {
            this.bairro = newAddress.bairro;
        }
        if (newAddress.cidade) {
            this.cidade = newAddress.cidade;
        }
        if (newAddress.estado) {
            this.estado = newAddress.estado;
        }
    }

    addItem(item) {
        this.itens.push(item);
    }

    removeItem(item) {
        const index = this.itens.findIndex(existingItem =>
            existingItem.rua === item.rua &&
            existingItem.bairro === item.bairro &&
            existingItem.cidade === item.cidade &&
            existingItem.estado === item.estado
        );

        if (index !== -1) {
            this.itens.splice(index, 1);
        }
    }
}

let enderecoCliente = new EnderecoCliente("Teleferico", "Agua Branca", "Contagem", "MG");

console.log(enderecoCliente);

enderecoCliente.addItem({
    rua: "Marte",
    bairro: "Ceramica",
    cidade: "Santa Luzia",
    estado: "SP"
});

console.log(enderecoCliente);

enderecoCliente.removeItem({
    rua: "Marte",
    bairro: "Ceramica",
    cidade: "Santa Luzia",
    estado: "SP"
});

console.log(enderecoCliente);


enderecoCliente.updateItem({
    rua: "Nova Rua",
    bairro: "Novo Bairro"
});

console.log(enderecoCliente);