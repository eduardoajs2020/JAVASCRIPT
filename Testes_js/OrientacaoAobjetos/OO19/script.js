class Conta {
    
    constructor(saldoCorrente, saldoPoupanca, juros) {
        this.saldoCorrente = saldoCorrente;
        this.saldoPoupanca = saldoPoupanca;
        this.juros = juros;
    }

    deposito(valor) {
        this.saldoCorrente += valor;
    }

    saque(valor) {
        this.saldoCorrente -= valor
    }

    resgatePoup(valor) {
        this.saldoCorrente -= valor;
        this.saldoPoupanca += valor;
    }
    resgateCor(valor) {
        this.saldoPoupanca -= valor;
        this.saldoPoupanca += valor;
    }

    jurosDeAniversario() {
        let juros = (this.saldoPoupanca * this.juros) / 100;
        this.saldoPoupanca += juros;
    }
}

class ContaEspecial extends Conta{
    constructor(saldoCorrente, saldoPoupanca, juros) {
        super(saldoCorrente, saldoPoupanca, juros * 2);
}
}

let conta = new Conta(1000, 5000,1); 

console.log(conta);

conta.deposito(500);  

console.log(conta);

conta.saque(5000);  

console.log(conta);

conta.resgatePoup(3000);  

console.log(conta);

conta.jurosDeAniversario();  

console.log(conta);

document.write(conta)


let conta2 = new ContaEspecial(10000, 50000, 1);

console.log(conta2);

conta2.saque(5000);

console.log(conta2);

conta2.jurosDeAniversario();

console.log(conta2);

 

