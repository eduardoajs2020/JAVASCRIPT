class Conta {

    constructor() {
        this.saldo = 0;
    }

    deposito(valor) {
        this.saldo += valor;
        console.log(`Depósito de ${valor} realizado. Saldo atual: ${this.saldo}`);
    }

    saque(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de ${valor} realizado. Saldo atual: ${this.saldo}`);
        } else {
            console.log("Saldo insuficiente.");
        }
    }

    consultarSaldo() {
        console.log(`Saldo atual: ${this.saldo}`);
    }
}

const minhaConta = new Conta();

minhaConta.deposito(100);
minhaConta.saque(20);
minhaConta.consultarSaldo();
minhaConta.saque(50);
minhaConta.consultarSaldo();
minhaConta.deposito(200);
minhaConta.consultarSaldo();