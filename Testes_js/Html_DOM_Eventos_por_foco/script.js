let input = document.querySelector("#input1");

input.addEventListener("focus", function () {
    console.log("Entrou no Input");
});


input.addEventListener("blur", function () {
  console.log("Saiu do Input");
});