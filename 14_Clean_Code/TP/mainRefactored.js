const { Subject, Observer } = require("./observerRefactored");

// Membuat subject
const berita = new Subject();

// Membuat observer
const user1 = new Observer("daffa");
const user2 = new Observer("Vaninside");

// Mendaftarkan observer
berita.attach(user1);
berita.attach(user2);

// Mengubah status
console.log("\nStatus awal:");
berita.setState("Berita Pagi");

// Menghapus observer dan ubah lagi
berita.detach(user1);

console.log("\nSetelah pengurangan observer:");
berita.setState("Berita Siang");
