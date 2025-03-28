const Penjumlahan = require("./implementasi-generic-method");
const SimpleDataBase = require("./implementasi-generic-class");

const nim = "2211104090";  
const lastDigit = parseInt(nim[nim.length - 1]); 

const name = "Allaya Daffa Zhillal"; 
console.log(`Nama saya: ${name}`);

let angka1, angka2, angka3;
if (lastDigit === 1 || lastDigit === 2) {
    angka1 = parseFloat("22");
    angka2 = parseFloat("11");
    angka3 = parseFloat("10");
} else if (lastDigit === 3 || lastDigit === 4 || lastDigit === 5) {
    angka1 = Number("22");
    angka2 = Number("11");
    angka3 = Number("10");
} else if (lastDigit === 6 || lastDigit === 7 || lastDigit === 8) {
    angka1 = parseInt("22");
    angka2 = parseInt("11");
    angka3 = parseInt("10");
} else {
    angka1 = BigInt("22");
    angka2 = BigInt("11");
    angka3 = BigInt("10");
}

const penjumlahan = new Penjumlahan();
const hasil = penjumlahan.JumlahTigaAngka(angka1, angka2, angka3);
console.log(`Hasil penjumlahan tiga angka adalah: ${hasil}`);

const database = new SimpleDataBase();
database.AddNewData(angka1);
database.AddNewData(angka2);
database.AddNewData(angka3);
database.PrintAllData();
