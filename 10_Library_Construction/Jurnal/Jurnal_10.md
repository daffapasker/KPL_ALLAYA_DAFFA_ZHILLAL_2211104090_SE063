<div align="center">

**TUGAS JURNAL**  
**KONSTRUKSI PERANGKAT LUNAK**

**MODUL X**  
**LIBRARY CONSTRUCTION**

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
2024

</div>

---

# TUGAS JURNAL

## A. Soal Nomor 1

MEMBUAT PROJECT DAN CLASS LIBRARY
Buka IDE misalnya dengan Visual Studio
A. Misalnya menggunakan Visual Studio, buatlah solution baru dengan nama modul10_NIM yang berisi blank project.
B. Setelah itu, buatlah class library project di dalam solution tersebut. Langkah-langkah dengan Visual studio dapat dicek di link berikut: https://docs.microsoft.com/en-us/dotnet/core/tutorials/library-with-visual-studio?pivots=dotnet-6-0

## B. Soal Nomor 2

MEMBUAT LIBRARY MATEMATIKA
Buatlah suatu library bernama (namespace) MatematikaLibraries yang mempunyai beberapa
method sebagai berikut.
A. Mencari faktor persekutuan terbesar dari dua buah bilangan: int FPB(int input1, int input2)
Contoh pemanggilan:
FPB(60, 45)
Output: 15
B. Mencari kelipatan persekutuan terkecil dari dua buah bilangan: int KPK(int input1, int input2)
Contoh pemanggilan:
KPK(12, 8)
Output: 24
C. Mendapatkan hasil turunan dari persamaan sederhana: string Turunan(int[] persamaan)
Contohnya untuk persamaan x3 + 4x2 -12x+9 maka turunannya adalah 3x2 + 8x -12
Proses pemanggilan dari fungsi ini adalah sebagai berikut:
Turunan({1, 4, -12, 9})
Output: “3x2 + 8x - 12”
D. Mendapatkan hasil integral dari persamaan sederhana: string Integral(int[] persamaan)
Contohnya untuk persamaan 4x3 + 6x2 – 12x +9 maka hasilnya x4 + 2x3 – 6x2 + 9x + C
Proses pemanggilan dari fungsi ini adalah sebagai berikut:
Integral({4, 6, -12, 9})
Output: “x4 + 2x3 – 6x2 + 9x + C”

## C. Soal Nomor 3

MEMANGGIL LIBRARY DI FUNGSI UTAMA
Setelah library selesai dibuat:
A. Buatlah sebuah console application project baru yang memanggil semua fungsi di library MatematikaLibraries sebelumnya.
B. Catatan: pada pengerjaan modul ini diminta untuk memanfaatkan Class Library dan menambahkan library MatematikaLibraries. Misalnya dengan Visual Studio dapat dilakukan dengan cara menambahkannya di Project Reference (dependencies) untuk console project yang baru dibuat.

## Input

- matematikaLibraries.js

  ```js
  function FPB(a, b) {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return Math.abs(a);
  }

  function KPK(a, b) {
    return Math.abs(a * b) / FPB(a, b);
  }

  function Turunan(persamaan) {
    let hasil = [];
    for (let i = 0; i < persamaan.length - 1; i++) {
      let pangkat = persamaan.length - 1 - i;
      let koef = persamaan[i] * pangkat;
      if (koef === 0) continue;

      let simbol = koef > 0 && hasil.length > 0 ? " + " : koef < 0 ? " - " : "";
      let absKoef = Math.abs(koef);
      if (pangkat - 1 === 0) {
        hasil.push(`${simbol}${absKoef}`);
      } else if (pangkat - 1 === 1) {
        hasil.push(`${simbol}${absKoef}x`);
      } else {
        hasil.push(`${simbol}${absKoef}x${pangkat - 1}`);
      }
    }
    return hasil.join("");
  }

  function Integral(persamaan) {
    let hasil = [];
    for (let i = 0; i < persamaan.length; i++) {
      let pangkat = persamaan.length - i;
      let koef = persamaan[i] / pangkat;
      if (koef === 0) continue;

      let simbol = koef > 0 && hasil.length > 0 ? " + " : koef < 0 ? " - " : "";
      let absKoef = Math.abs(koef);
      if (pangkat === 1) {
        hasil.push(`${simbol}${absKoef}x`);
      } else {
        hasil.push(`${simbol}${absKoef}x${pangkat}`);
      }
    }
    hasil.push(" + C");
    return hasil.join("");
  }

  module.exports = {
    FPB,
    KPK,
    Turunan,
    Integral,
  };
  ```

- index.js

  ```js
  const mtk = require("./matematikaLibraries");

  console.log("FPB(60, 45) =", mtk.FPB(60, 45));
  console.log("KPK(12, 8) =", mtk.KPK(12, 8));

  console.log("Turunan([1, 4, -12, 9]) =", mtk.Turunan([1, 4, -12, 9]));

  console.log("Integral([4, 6, -12, 9]) =", mtk.Integral([4, 6, -12, 9]));
  ```

## Output

![Image](https://github.com/user-attachments/assets/b365a9cc-f990-4fce-b63a-ac5b32c299f5)

---
