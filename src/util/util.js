export default {
  formatCurrencyBRL: function (num) {
      return num.toLocaleString("pt-BR", { style:"currency", currency:"BRL" });
  },

  interval: function (num1, num2, unit = "") {
    if (num1 == num2){
      return num1 + unit;
    }

    return "Between " + (num1 + unit) + " and " + (num2 + unit);
  },

  mountArrayPages: function (currentPage, totalPages) {
    const arrayNumberPages = [...Array(totalPages).keys()];
    let arrayPages = [];

    //Remove Page Zero
    arrayNumberPages.shift();

    arrayNumberPages.map(pageNumber => {
      if (pageNumber === 1 || pageNumber === totalPages 
        || (pageNumber >= currentPage - 2 && pageNumber <= currentPage + 2)
        || (pageNumber >= totalPages - 2 && pageNumber <= totalPages + 2)) {

        arrayPages.push(pageNumber);
      }
    });

    return arrayPages;
  }
}
