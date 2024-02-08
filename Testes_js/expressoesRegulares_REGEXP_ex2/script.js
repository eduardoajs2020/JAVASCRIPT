const validarId = /\d+.+\d+.+\d+.+\d\b/; 

console.log(validarId.test("127.0.0.1"));
console.log(validarId.test("8.8.8.8"));
console.log(validarId.test("192.168.0"));
console.log(validarId.test("192.168.0"));
console.log(validarId.test("192"));
console.log(validarId.test("asasasa"));
console.log(validarId.test("123456789"));
console.log(validarId.test("1924.1648.04.62444"));

console.log("----------------------");


const validaIp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(validaIp.test("127.0.0.1"));
console.log(validaIp.test("8.8.8.8"));
console.log(validaIp.test("192.168.0"));
console.log(validaIp.test("192.168.0"));
console.log(validaIp.test("192"));
console.log(validaIp.test("asasasa"));
console.log(validaIp.test("123456789"));
console.log(validaIp.test("1924.1648.04.62444"));