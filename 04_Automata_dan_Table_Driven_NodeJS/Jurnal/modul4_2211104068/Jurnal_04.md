<div align="center">

**TUGAS JURNAL**  
**KONSTRUKSI PERANGKAT LUNAK**

**MODUL IV**  
**AUTOMATA & TABLE-DRIVEN CONSTRUCTION**

![logo tel-u](https://github.com/user-attachments/assets/3a44181d-9c92-47f6-8cf0-87755117fd99)

Disusun Oleh :

**ALLAYA DAFFA ZHILLAL (2211104090)**  
**SE06-03**

Asisten Praktikum :  
Vaninside
rizqiiirz

Dosen Pengampu :  <br>
riyandwwi

PROGRAM STUDI S1 REKAYASA PERANGKAT LUNAK  
FAKULTAS DIREKTORAT KAMPUS PURWOKERTO  
TELKOM UNIVERSITY PURWOKERTO  
2024

</div>

---

# TUGAS JURNAL

## SOAL 1
MENAMBAHKAN KODE DENGAN TEKNIK TABLE-DRIVEN Dari project yang sudah dibuat sebelumnya:
Dari project yang sudah dibuat sebelumnya:</p>
A. Buatlah sebuah class bernama “KodeBuah”. </p>
B. Pada class tersebut, tambahkan sebuah method dengan nama “getKodeBuah” yang mengembalikan kode buah dari tabel yang diberikan di bawah ini. </p>
C. Setelah method ditambahkan, panggil method tersebut pada class utama/main. </p>

---
**kodebuah.js**
```
class KodeBuah {
    constructor() {
      this.kodeBuahTable = {
        Apel: "A00",
        Aprikot: "B00",
        Alpukat: "C00",
        Pisang: "D00",
        Paprika: "E00",
        Blackberry: "F00",
        Ceri: "H00",
        Kelapa: "I00",
        Jagung: "J00",
        Kurma: "K00",
        Durian: "L00",
        Anggur: "M00",
        Melon: "N00",
        Semangka: "O00",
      };
    }
  
    getKodeBuah(buah) {
      return this.kodeBuahTable[buah] || "Buah tidak ditemukan";
    }
  }
  
  module.exports = KodeBuah;
```
**Penjelasan kodebuah.js** <br>
Fungsi: Menyediakan daftar kode untuk berbagai jenis buah.
1. Cara Kerja:
- Kelas KodeBuah memiliki tabel kodeBuahTable yang berisi nama buah dan kode uniknya.
- Method getKodeBuah(buah) mengembalikan kode buah berdasarkan input nama buah.
- Jika buah tidak ditemukan, akan menampilkan pesan "Buah tidak ditemukan".
2. Kegunaan:
- Digunakan untuk mengonversi nama buah menjadi kode unik. </p>

**index.js**
```
const KodeBuah = require("./kodebuah");
const PosisiKarakterGame = require("./posisikaraktergame");

const kodeBuah = new KodeBuah();
console.log("Kode Buah Apel: " + kodeBuah.getKodeBuah("Apel"));
console.log("Kode Buah Pisang: " + kodeBuah.getKodeBuah("Pisang"));

const posisiKarakter = new PosisiKarakterGame(123456);
posisiKarakter.simulateKeyPress("S");
posisiKarakter.simulateKeyPress("W");

console.log("Posisi karakter: " + posisiKarakter.getState());
```
---
## SOAL 2
MENAMBAHKAN KODE DENGAN TEKNIK STATE-BASED CONSTRUCTION Pada folder project yang sama:</p>
A. Buatlah sebuah class bernama “PosisiKarakterGame”</p>
B. Tambahkan implementasi yang menerapkan kasus di bawah ini menggunakan teknik state-based construction (asumsikan state awal adalah berdiri):</p>
C. Berikan implementasi tambahkan berdasarkan hasil mod dari NIM</p>
D. Berikan implementasi tambahkan berdasarkan hasil mod dari NIM</p>

1. NIM % 3 == 0:

- Pada saat TombolS ditekan, maka akan ada output “tombol arah bawah ditekan”
- Pada saat TombolW ditekan, maka akan ada output “tombola rah atas ditekan”

2. NIM % 3 == 1:

- Pada saat state berubah ke “Berdiri”, akan ada output “posisi standby”
- Pada saat state berubah ke “Tengkurap”, akan ada output “posisi istirahat”

3. NIM % 3 == 2:

- Pada saat state berubah dari “Terbang” ke “Jongkok”, ada output “posisi landing”
- Pada saat state berubah dari “Berdiri” ke “Terbang”, ada output “posisi take off”

E. Tambahkan kode implementasi yang memanggil/mensimulasi perubahan state di class utama atau
method main:

1. Pastikan semua perubahan state disimulasikan
2. Pastikan semua ouput yang ada di bagian C dapat dihasilkan pada saat run
---
**posisikaraktergame.js**
```
class PosisiKarakterGame {
    constructor(NIM) {
      this.NIM = NIM;
      this.state = "Berdiri";
    }
  
    changeState(newState) {
      this.state = newState;
    }
  
    simulateKeyPress(key) {
      if (this.NIM % 3 === 0) {
        if (key === "S") {
          console.log("Tombol arah bawah ditekan");
        } else if (key === "W") {
          console.log("Tombol arah atas ditekan");
        }
      } else if (this.NIM % 3 === 1) {
        if (this.state === "Berdiri") {
          console.log("Posisi standby");
        } else if (this.state === "Tengkurap") {
          console.log("Posisi istirahat");
        }
      } else if (this.NIM % 3 === 2) {
        if (this.state === "Terbang") {
          console.log("Posisi take off");
        } else if (this.state === "Jongkok") {
          console.log("Posisi landing");
        }
      }
    }
  
    getState() {
      return this.state;
    }
  }
  
  module.exports = PosisiKarakterGame;
```
**penjelasan posisikaraktergame.js** <br>
Fungsi: Mengelola posisi atau status karakter dalam game berdasarkan angka NIM (Nomor Induk Mahasiswa).
1. Cara Kerja:
- Kelas PosisiKarakterGame menerima NIM sebagai parameter.
- simulateKeyPress(key) mengubah perilaku karakter berdasarkan kondisi NIM % 3.
- getState() mengembalikan status karakter saat ini.
2. Kegunaan:
- Mensimulasikan perubahan posisi karakter berdasarkan input tombol dan nilai NIM. </p>

**index.js**
```
const KodeBuah = require("./kodebuah");
const PosisiKarakterGame = require("./posisikaraktergame");

const kodeBuah = new KodeBuah();
console.log("Kode Buah Apel: " + kodeBuah.getKodeBuah("Apel"));
console.log("Kode Buah Pisang: " + kodeBuah.getKodeBuah("Pisang"));

const posisiKarakter = new PosisiKarakterGame(123456);
posisiKarakter.simulateKeyPress("S");
posisiKarakter.simulateKeyPress("W");

console.log("Posisi karakter: " + posisiKarakter.getState());
```
**Penjelasan index.js** <br>
Fungsi: File utama yang mengimpor dan menjalankan fungsi dari kodebuah.js dan posisikaraktergame.js.
1. Cara Kerja:
- Membuat instance KodeBuah dan mencetak kode buah "Apel" dan "Pisang".
- Membuat instance PosisiKarakterGame dengan NIM 123456.
- Mensimulasikan input tombol "S" dan "W" lalu mencetak posisi karakter.
2. Kegunaan:
- Menghubungkan dan mengeksekusi fitur dari dua file lainnya. </p>

**OUTPUT**
![Image](https://github.com/user-attachments/assets/16c6ee7a-34da-4dc6-9489-b9e82e6c17f6)
