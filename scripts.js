const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");

// Manipulando o input de valor para receber somente números
amount.addEventListener("input", (event) => {
  event.preventDefault();
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.raplace(hasCharactersRegex, "");
})

// Capturando o evento de submit (enviar) do formulário
form.onsubmit = (event) => {
  event.preventDefault();

  
}