function somaComDelay(a, b) {
  return new Promise(resolve => {
    setTimeout(function () {
      resolve(a + b);
    }, 2000);
  })
}


async function resSoma(a, b, c) {
  
  let x = somaComDelay(a, b);
  let y = c;

  return await x + await y;

}

resSoma(10, 20, 30).then(value => console.log(value));