class Compras {

    constructor() {
        this.itens = 0;
    }

    compras(valor) {
        this.itens += valor;
        console.log(`Compra de ${valor} realizada. Estoque: ${this.itens}`);
    }

    vendas(valor) {
        if (valor <= this.itens) {
            this.itens -= valor;
            console.log(`Venda de ${valor} realizada. Estoque atual: ${this.itens}`);
        } else {
            console.log("Itens insuficientes no estoque.");
        }
    }

    totalItens() {
        console.log(`Itens em estoque: ${this.itens}`);
    }
}

const minhaCompra = new Compras();

minhaCompra.compras(100);
minhaCompra.vendas(20);
minhaCompra.totalItens();
minhaCompra.vendas(50);
minhaCompra.totalItens();
minhaCompra.compras(200);
minhaCompra.totalItens();