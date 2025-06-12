const PusatDataSingleton = require("./pusatDataSingletonRefactored");

// Inisialisasi dua variabel singleton
const data1 = PusatDataSingleton.getInstance();
const data2 = PusatDataSingleton.getInstance();

// Tambahkan data
data1.addData("Allaya Daffa Zhillal");
data1.addData("Vaninside");
data1.addData("rizqiiirz");

// Cetak data dari data2
console.log("\n== Data Awal ==");
data2.printAllData();

// Hapus salah satu data
data2.removeData(1);

// Cetak ulang dari data1
console.log("\n== Setelah Penghapusan ==");
data1.printAllData();

// Cek jumlah data
console.log(`\nJumlah data di data1: ${data1.getAllData().length}`);
console.log(`Jumlah data di data2: ${data2.getAllData().length}`);
