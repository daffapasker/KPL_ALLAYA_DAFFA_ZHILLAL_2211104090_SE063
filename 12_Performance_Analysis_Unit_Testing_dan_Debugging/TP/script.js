function CariTandaBilangan(a) {
  if (a < 0) return "Negatif";
  if (a > 0) return "Positif";
  return "Nol";
}

function cekTanda() {
  const a = parseInt(document.getElementById("inputA").value);
  const hasil = CariTandaBilangan(a);
  document.getElementById("output").innerText = "Output: " + hasil;
}
