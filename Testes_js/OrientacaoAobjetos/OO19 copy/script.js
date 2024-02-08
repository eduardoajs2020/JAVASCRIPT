class Carro {
    constructor(marca, cor, gasolinaRestante, gastoGasolina) {
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante;
        
    }

    abastecimento(gasolinaAbastecida) {
        this.gasolinaRestante += gasolinaAbastecida;
    }

    gastoGasolina(quilometros) {
        const consumo = quilometros / this.gastoGasolina;
        if (consumo <= this.gasolinaRestante) {
            this.gasolinaRestante -= consumo;
            console.log(`Consumed ${consumo.toFixed(2)} units of gas.`);
        } else {
            console.log("Not enough gas for the journey.");
        }
    }

    set novaMarca(novaMarca) {
        this.marca = novaMarca;
    }

    set novaCor(novaCor) {
        this.cor = novaCor;
    }
}

let carro = new Carro("BMW", "Azul", 50, 10);  // Gasoline: 50 units, Consumption: 10 units/km

console.log(carro);

carro.abastecimento(30);  // Add 30 units of gas

console.log(carro);

carro.gastoGasolina(100);  // Travel 100 km

console.log(carro);

carro.novaMarca = "Mercedes";  // Change the brand using the setter

console.log(carro);
