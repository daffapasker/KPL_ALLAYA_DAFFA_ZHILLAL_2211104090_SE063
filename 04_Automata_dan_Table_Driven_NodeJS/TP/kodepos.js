// kodepos.js
const kodePos = {
    "Jakarta": 10110,
    "Bandung": 40111,
    "Surabaya": 60293
};

function getKodePos(kota) {
    return kodePos[kota] || "Kode pos tidak ditemukan";
}

module.exports = getKodePos;
