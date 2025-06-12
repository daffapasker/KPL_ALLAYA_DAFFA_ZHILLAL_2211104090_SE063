function AkarPersamaanKuadrat([a, b, c]) {
  const D = b ** 2 - 4 * a * c;
  if (D < 0) {
    return [];
  } else if (D === 0) {
    const x = -b / (2 * a);
    return [x];
  } else {
    const x1 = (-b + Math.sqrt(D)) / (2 * a);
    const x2 = (-b - Math.sqrt(D)) / (2 * a);
    return [x1, x2];
  }
}

function HasilKuadrat([a, b]) {
  const koefX2 = a * a;
  const koefX = 2 * a * b;
  const konstanta = b * b;
  return [koefX2, koefX, konstanta];
}

module.exports = {
  AkarPersamaanKuadrat,
  HasilKuadrat,
};
