<div align="center">

**TUGAS JURNAL**  
**KONSTRUKSI PERANGKAT LUNAK**

**MODUL XIV**  
**CLEAN CODE**

![logo tel-u](https://github.com/user-attachments/assets/3a44181d-9c92-47f6-8cf0-87755117fd99)

Disusun Oleh :

**Allaya Daffa Zhillal (2211104090)**  
**SE06-03**

Asisten Praktikum :  
Vaninside  
rizqiiirz

Dosen Pengampu :  
riyandwwi

PROGRAM STUDI S1 REKAYASA PERANGKAT LUNAK  
FAKULTAS DIREKTORAT KAMPUS PURWOKERTO  
TELKOM UNIVERSITY PURWOKERTO  
2025

</div>

---

# TUGAS JURNAL

## A. Soal Nomor 1

**Project dari modul sebelumnya telah direfaktor dengan memperhatikan:**

- Penamaan variabel (`camelCase`)
- Penulisan method konsisten
- Spasi antar blok & indentasi rapi
- Komentar jelas pada tiap fungsi

## B. Soal Nomor 2

**(Sertakan screenshot sebelum & sesudah refactoring)**

## C. Soal Nomor 3

**Contoh perubahan signifikan:**

- `AddSebuahData` diubah menjadi `addData`
- Ditambahkan komentar untuk semua method
- Penulisan blok `if/else`, loop, dan deklarasi konsisten

## Input

- pusatDataSingletonRefactored.js

  ```js
  /**
   * Singleton class yang menyimpan data global aplikasi
   */
  class PusatDataSingleton {
    constructor() {
      if (PusatDataSingleton._instance) {
        return PusatDataSingleton._instance;
      }

      this.storedData = [];
      PusatDataSingleton._instance = this;
    }

    /**
     * Mengembalikan instance singleton
     * @returns {PusatDataSingleton}
     */
    static getInstance() {
      if (!PusatDataSingleton._instance) {
        PusatDataSingleton._instance = new PusatDataSingleton();
      }
      return PusatDataSingleton._instance;
    }

    /**
     * Mengembalikan seluruh data
     * @returns {string[]}
     */
    getAllData() {
      return this.storedData;
    }

    /**
     * Menampilkan semua data ke console
     */
    printAllData() {
      this.storedData.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
      });
    }

    /**
     * Menambahkan sebuah data ke dalam list
     * @param {string} input
     */
    addData(input) {
      this.storedData.push(input);
    }

    /**
     * Menghapus data berdasarkan index
     * @param {number} index
     */
    removeData(index) {
      if (index >= 0 && index < this.storedData.length) {
        this.storedData.splice(index, 1);
      } else {
        console.log("Index tidak valid.");
      }
    }
  }

  module.exports = PusatDataSingleton;
  ```

- mainRefactored.js

  ```js
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

  ```
- package.json
```json
{
  "name": "kpl_project",
  "version": "1.0.0",
  "description": "Project KPL - Design Pattern Implementation",
  "main": "main.js",
  "type": "commonjs",
  "scripts": {
    "start": "node main.js",
    "test": "jest"
  },
  "author": "Daffa",
  "license": "ISC",
  "devDependencies": {
    "jest": "^29.0.0"
  }
}

```

## Output

![Image](https://github.com/user-attachments/assets/8ba99929-43ee-40d4-9056-6cd80426465e)

---
