export default {
  formatCurrencyBRL: function (num) {
      return num.toLocaleString("pt-BR", { style:"currency", currency:"BRL" });
  }
}
