const KodeBuah = require("./kodebuah");
const PosisiKarakterGame = require("./posisikaraktergame");

const kodeBuah = new KodeBuah();
console.log("Kode Buah Apel: " + kodeBuah.getKodeBuah("Apel"));
console.log("Kode Buah Pisang: " + kodeBuah.getKodeBuah("Pisang"));

const posisiKarakter = new PosisiKarakterGame(123456);
posisiKarakter.simulateKeyPress("S");
posisiKarakter.simulateKeyPress("W");

console.log("Posisi karakter: " + posisiKarakter.getState());
