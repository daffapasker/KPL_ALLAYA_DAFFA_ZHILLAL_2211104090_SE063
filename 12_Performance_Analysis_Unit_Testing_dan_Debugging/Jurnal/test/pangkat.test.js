const { CariNilaiPangkat } = require("../pangkat");

test("pangkat biasa", () => {
  expect(CariNilaiPangkat(2, 3)).toBe(8);
});

test("pangkat 0", () => {
  expect(CariNilaiPangkat(5, 0)).toBe(1);
  expect(CariNilaiPangkat(0, 0)).toBe(1);
});

test("bilangan negatif", () => {
  expect(CariNilaiPangkat(3, -2)).toBe(-1);
});

test("batas input", () => {
  expect(CariNilaiPangkat(101, 2)).toBe(-2);
  expect(CariNilaiPangkat(2, 11)).toBe(-2);
});

test("overflow", () => {
  expect(CariNilaiPangkat(100, 10)).toBe(-3);
});
