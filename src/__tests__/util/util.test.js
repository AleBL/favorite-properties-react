import util from "../../util/util"

describe("Util", () => {
  describe("formatCurrencyBRL", () => {
    const number = Math.random() * 10000;
    const formattedNumber = util.formatCurrencyBRL(number);

    it("Should return a String", () => {
      expect(formattedNumber).toEqual(expect.any(String));
    });

    it("There is 'R$' in formattedNumber", () => {
      expect(formattedNumber).toMatch("R$");
    });

    it("There is ',' in formattedNumber", () => {
      expect(formattedNumber).toMatch(/,/);
    });
  });

  describe("interval", () => {
    const numberMin = Math.random() * 10;
    const numberMax = (Math.random() * 1000) + numberMin;

    describe("without unit", () => {
      const intervalWithoutUnit = util.interval(numberMin, numberMax);

      it("Should return a String", () => {
        expect(intervalWithoutUnit).toEqual(expect.any(String));
      });
    });

    describe("with unit", () => {
      const unit = "kg";
      const intervalWithUnit = util.interval(numberMin, numberMax, unit);

      it("Should return a String", () => {
        expect(intervalWithUnit).toEqual(expect.any(String));
      });

      it("There is 'kg' in intervalWithUnit", () => {
        expect(intervalWithUnit).toMatch(unit);
      });
    });
  });
});
