function CariNilaiPangkat(a, b) {
  if (b === 0) return 1;
  if (b < 0) return -1;
  if (b > 10 || a > 100) return -2;

  let result = 1;
  try {
    for (let i = 0; i < b; i++) {
      result = checkOverflow(result * a);
    }
  } catch {
    return -3;
  }
  return result;
}

function checkOverflow(num) {
  if (num > Number.MAX_SAFE_INTEGER) throw new Error("Overflow");
  return num;
}

function hitung() {
  const a = parseInt(document.getElementById("inputA").value);
  const b = parseInt(document.getElementById("inputB").value);
  const hasil = CariNilaiPangkat(a, b);
  document.getElementById("outputLabel").innerText = `Hasil: ${hasil}`;
}
