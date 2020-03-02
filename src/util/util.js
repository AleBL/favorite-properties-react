export default {
  formatCurrencyBRL: function (num) {
      return num.toLocaleString("pt-BR", { style:"currency", currency:"BRL" });
  },

  interval: function (num1, num2, unit = "") {
    if (num1 == num2){
      return num1 + unit;
    }

    return "Between " + (num1 + unit) + " and " + (num2 + unit);
  }
}
