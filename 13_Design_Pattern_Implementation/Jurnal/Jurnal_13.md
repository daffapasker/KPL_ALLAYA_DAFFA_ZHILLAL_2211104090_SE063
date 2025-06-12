<div align="center">

**TUGAS JURNAL**  
**KONSTRUKSI PERANGKAT LUNAK**

**MODUL XIII**  
**DESIGN PATTERN IMPLEMENTATION**

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

**Contoh kondisi penggunaan Singleton:**

1. Koneksi database yang hanya boleh satu instance agar hemat resource.
2. Logger sistem agar seluruh aplikasi mencatat log ke satu tempat yang sama.

## B. Soal Nomor 2

**Langkah implementasi Singleton:**

1. Buat class.
2. Buat private constructor.
3. Buat static method `getInstance()` untuk inisialisasi satu-satunya instance.

## C. Soal Nomor 3

**Kelebihan:**

- Menghemat resource.
- Konsisten (state global tetap sama).
- Mudah diakses.

**Kekurangan:**

- Sulit diuji (terutama pada unit test).
- Menyebabkan tight coupling.
- Tidak mendukung subclassing dengan baik.

## Input

- pusatDataSingleton.js

  ```js
  class PusatDataSingleton {
    constructor() {
      if (PusatDataSingleton._instance) {
        return PusatDataSingleton._instance;
      }
      this.dataTersimpan = [];
      PusatDataSingleton._instance = this;
    }

    static getDataSingleton() {
      if (!PusatDataSingleton._instance) {
        PusatDataSingleton._instance = new PusatDataSingleton();
      }
      return PusatDataSingleton._instance;
    }

    getSemuaData() {
      return this.dataTersimpan;
    }

    printSemuaData() {
      this.dataTersimpan.forEach((data, index) => {
        console.log(`${index + 1}. ${data}`);
      });
    }

    addSebuahData(input) {
      this.dataTersimpan.push(input);
    }

    hapusSebuahData(index) {
      if (index >= 0 && index < this.dataTersimpan.length) {
        this.dataTersimpan.splice(index, 1);
      } else {
        console.log("Index tidak valid.");
      }
    }
  }

  module.exports = PusatDataSingleton;
  ```

- main.js

  ```js
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
  ```
- package.json
  ```json
  {
  "name": "design-pattern-jurnal",
  "version": "1.0.0",
  "description": "Contoh implementasi design pattern singleton",
  "main": "main.js",
  "scripts": {
    "start": "node main.js",
    "test": "echo \"No test specified\" && exit 0"
  },
  "author": "Daffa Zhillal",
  "license": "ISC"
  }

  ```

## Output

![Image](https://github.com/user-attachments/assets/d7f3df4c-6298-4b72-9618-4fc8bc2670ae)

---
