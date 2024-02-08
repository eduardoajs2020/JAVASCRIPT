let onibus = {
    rodas: 8,
    limitePassageiros: 40,
    portas: 2
};

console.log(onibus.rodas);
delete onibus.rodas
console.log(onibus.limitePassageiros);
console.log(onibus.portas);
onibus.janelas = 20;//cria a propriedade dentro do objeto

console.log(onibus);
console.log(onibus.janelas);
