const validaData = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

console.log(validaData.test("05/02/2000"));
console.log(validaData.test("5/2/2000"));
console.log(validaData.test("05-02-2000"));
console.log(validaData.test("05/02/00"));
console.log(validaData.test("12/12/1999"));
console.log(validaData.test("99/99/9999"));


