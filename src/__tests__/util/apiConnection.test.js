 import requestPage from "../../util/apiConnection"

describe("Api Connection", () => {
  describe("requestPage", () => {
    let buildings, page, total_pages;

    beforeAll(async () => 
      await requestPage()
      .then(function (result) {
        buildings = result.buildings;
        page = result.page;
        total_pages = result.total_pages;
      })
      .catch(function (err) {
        console.log("Erro");
        console.log(err);
      })
    );

    it("Should return a Array of Buildings", async () => {
      expect(Array.isArray(buildings)).toBeTruthy();
    });

    it("Should return the First Page", async () => {
      expect(page).toEqual(1);

    });

    it("Should return the Total Number of Pages", async () => {
      expect(total_pages).toEqual(expect.any(Number));
    });
  });
});
