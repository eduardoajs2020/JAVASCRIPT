const validarMarca = /Marca: (Nike|Adidas|Puma|Asics)/; 

console.log(validarMarca.test("Marca: Nike"));
console.log(validarMarca.test("Marca: asd"));
console.log(validarMarca.test("Marca: "));
console.log(validarMarca.test("Nike"));
console.log(validarMarca.test("123123"));
console.log(validarMarca.test("Marca: Adidas"));




