function FPB(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return Math.abs(a);
}

function KPK(a, b) {
  return Math.abs(a * b) / FPB(a, b);
}

function Turunan(persamaan) {
  let hasil = [];
  for (let i = 0; i < persamaan.length - 1; i++) {
    let pangkat = persamaan.length - 1 - i;
    let koef = persamaan[i] * pangkat;
    if (koef === 0) continue;

    let simbol = koef > 0 && hasil.length > 0 ? " + " : koef < 0 ? " - " : "";
    let absKoef = Math.abs(koef);
    if (pangkat - 1 === 0) {
      hasil.push(`${simbol}${absKoef}`);
    } else if (pangkat - 1 === 1) {
      hasil.push(`${simbol}${absKoef}x`);
    } else {
      hasil.push(`${simbol}${absKoef}x${pangkat - 1}`);
    }
  }
  return hasil.join("");
}

function Integral(persamaan) {
  let hasil = [];
  for (let i = 0; i < persamaan.length; i++) {
    let pangkat = persamaan.length - i;
    let koef = persamaan[i] / pangkat;
    if (koef === 0) continue;

    let simbol = koef > 0 && hasil.length > 0 ? " + " : koef < 0 ? " - " : "";
    let absKoef = Math.abs(koef);
    if (pangkat === 1) {
      hasil.push(`${simbol}${absKoef}x`);
    } else {
      hasil.push(`${simbol}${absKoef}x${pangkat}`);
    }
  }
  hasil.push(" + C");
  return hasil.join("");
}

module.exports = {
  FPB,
  KPK,
  Turunan,
  Integral,
};
