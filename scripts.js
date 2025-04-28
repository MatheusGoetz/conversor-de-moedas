// Cotação de moedas do dia.
const USD = 5.69;
const EUR = 6.49;
const GBP = 7.58;

// Obtendo elementos de formulário
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description")


// Manipulando o input de valor para receber somente números
amount.addEventListener("input", (event) => {
  event.preventDefault();
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.raplace(hasCharactersRegex, "");
})

// Capturando o evento de submit (enviar) do formulário
form.onsubmit = (event) => {
  event.preventDefault();

  switch(currency.value){
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
  }
}

// Função para converter a moeda
function convertCurrency(amount, price, symbol){
  try {
    // Alterando descrição do valor da moeda.
    description.textContent = `${symbol} 1 = ${formateCurrencyBRL(price)}` 
    
    // Aplica a classe que exibe o footer para mostrar o resultado.
    footer.classList.add("show-result")

  } catch (error) {
    console.log(error)
    // Remove a classe do footer, removendo ele da tela.
    footer.classList.remove("show-result")
    alert("Não foi possivel converter. Tente novamente mais tarde!")
  }
}

// função para formatar moeda para BRL
function formateCurrencyBRL (value){
  return Number(value).toLocaleString("pt-BR",{
    style: "currency",
    currency: "BRL"
  })
}