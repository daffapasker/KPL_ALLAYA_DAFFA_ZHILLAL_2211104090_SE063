// index.js
const DoorMachine = require('./doormachine');
const getKodePos = require('./kodepos');

const myDoor = new DoorMachine(); // Pintu awalnya terkunci

setTimeout(() => {
    myDoor.unlock(); // Buka pintu setelah 2 detik
}, 2000);

setTimeout(() => {
    myDoor.lock(); // Kunci kembali setelah 4 detik
}, 4000);

// Contoh penggunaan kodepos.js
console.log("Kode Pos Jakarta:", getKodePos("Jakarta"));
console.log("Kode Pos Surabaya:", getKodePos("Surabaya"));
console.log("Kode Pos Bali:", getKodePos("Bali")); // Tidak ditemukan
