const PusatDataSingleton = require("./pusatDataSingleton");

const data1 = PusatDataSingleton.getDataSingleton();
const data2 = PusatDataSingleton.getDataSingleton();

data1.addSebuahData("Allaya Daffa Zhillal");
data1.addSebuahData("daffapasker");
data1.addSebuahData("Vaninside (Asprak)");
data1.addSebuahData("rizqiiirz (Asprak)");

console.log("\nData dari data2:");
data2.printSemuaData();

data2.hapusSebuahData(2);

console.log("\nData dari data1 setelah penghapusan:");
data1.printSemuaData();

console.log(`\nJumlah data di data1: ${data1.getSemuaData().length}`);
console.log(`Jumlah data di data2: ${data2.getSemuaData().length}`);
