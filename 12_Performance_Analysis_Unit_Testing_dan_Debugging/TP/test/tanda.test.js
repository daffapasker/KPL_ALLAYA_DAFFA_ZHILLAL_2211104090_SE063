const { CariTandaBilangan } = require("../tanda");

test("bilangan negatif", () => {
  expect(CariTandaBilangan(-5)).toBe("Negatif");
});

test("bilangan positif", () => {
  expect(CariTandaBilangan(8)).toBe("Positif");
});

test("bilangan nol", () => {
  expect(CariTandaBilangan(0)).toBe("Nol");
});
