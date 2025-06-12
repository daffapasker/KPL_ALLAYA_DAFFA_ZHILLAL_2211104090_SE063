<div align="center">

**TUGAS JURNAL**  
**KONSTRUKSI PERANGKAT LUNAK**

**MODUL XII**  
**PERFORMANCE ANALYSIS UNIT TESTING & DEBUGGING**

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

MEMBUAT PROJECT GUI BARU
Buka IDE misalnya dengan Visual Studio
A. Misalnya menggunakan Visual Studio, buatlah project baru dengan nama modul12_NIM
B. Pastikan project yang dibuat dapat menggunakan GUI (misalnya tipe Windows Form pada
Visual Studio).

## B. Soal Nomor 2

MEMBUAT GUI SEDERHANA
Pada project yang telah dibuat sebelumnya:
A. Buatlah suatu Form atau tampilan GUI sederhana dengan dua buah textbox, satu button dan satu label untuk menampilkan output.
B. Tambahkan satu method dengan nama “CariNilaiPangkat(int a, int b)” yang menerima dua input dan mengembalikan nilai berupa hasil pangkat ab dengan melakukan iterasi (tanpa menggunakan library atau fungsi bawaan).
C. Pada method tersebut terdapat aturan sebagai berikut (berbeda dengan aturan pangkat normal):
i. Apabila input b adalah 0 maka nilai return selalu 1 (walapuun nilai a adalah 0)
ii. Apabila input b adalah bilangan negatif, maka nilai return adalah -1
iii. Apabila input b lebih dari 10 atau input a lebih dari 100 maka nilai return adalah -2
iv. Apabila hasil pangkat melebihi batas maksimal bilangan positif integer (misal dengan
checked pada C#) maka nilai return adalah -3
D. Pada tampilan GUI, pada saat tombol ditekan, maka label output akan menampilkan hasil pangkat dari pemanggilan fungsi “CariNilaiPangkat” dari dua input textbox.

## C. Soal Nomor 3

MELAKUKAN SOFTWARE PROFILING
Jalankan project yang dibuat sebelumnya dan jalankan profiling tools (misal dari visual studio, task manager atau sejenisnya):
A. Pada saat program berjalan, catat dan amati CPU usage dari aplikasi yang sedang berjalan tanpa melakukan input apapun.
B. Pada saat program berjalan, catat dan amati memory usage dari aplikasi yang sedang berjalan tanpa melakukan input apapun.
C. Tambahkan input “3” pada textbox pertama dan “19” pada textbox kedua, dan tekan tombol button dan catat dan amati memory usage dari aplikasi.
D. Laporkan apakah terdapat perubahan pada CPU usage dan memory (apabila tidak ada perubahan juga perlu dilaporkan di file docx).
E. Lakukan lagi experimen dengan input pertama yaitu “9” dan angka kedua yaitu “30”, laporkan apakah terdapat perubahan di CPU usage dan memory.

## D. Soal Nomor 4

MENAMBAHKAN UNIT TESTING
Di dalam project yang sama:
A. Buatlah kode unit test untuk menguji method “CariNilaiPangkat” yang dibuat sebelumnya.
B. Pastikan kode unit test tersebut memiliki branch coverage yang baik untuk method “CariNilaiPangkat”.
C. Jalankan kode unit test yang dibuat dan lampirkan hasil unit testing yang dilakukan.

**Input**

- index.html

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Modul12_2211104075</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <style>
        body {
          font-family: "Inter", sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          background-color: #f3f4f6;
        }

        .container {
          background: white;
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 400px;
        }

        h2 {
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
          color: #111827;
          text-align: center;
        }

        input[type="number"] {
          width: 100%;
          padding: 0.75rem;
          margin-bottom: 1rem;
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
          font-size: 1rem;
        }

        button {
          width: 100%;
          padding: 0.75rem;
          background-color: #2563eb;
          color: white;
          font-weight: 600;
          font-size: 1rem;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        button:hover {
          background-color: #1e40af;
        }

        p#outputLabel {
          margin-top: 1rem;
          font-size: 1rem;
          color: #374151;
          text-align: center;
        }

        @media (max-width: 480px) {
          .container {
            padding: 1.5rem;
            border-radius: 0.75rem;
          }

          h2 {
            font-size: 1.25rem;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>Hitung Pangkat</h2>
        <input type="number" id="inputA" placeholder="Nilai a" />
        <input type="number" id="inputB" placeholder="Nilai b" />
        <button onclick="hitung()">Hitung Pangkat</button>
        <p id="outputLabel">Hasil:</p>
      </div>

      <script src="script.js"></script>
    </body>
  </html>
  ```

- script.js

  ```js
  function CariNilaiPangkat(a, b) {
    if (b === 0) return 1;
    if (b < 0) return -1;
    if (b > 10 || a > 100) return -2;

    let result = 1;
    try {
      for (let i = 0; i < b; i++) {
        result = checkOverflow(result * a);
      }
    } catch {
      return -3;
    }
    return result;
  }

  function checkOverflow(num) {
    if (num > Number.MAX_SAFE_INTEGER) throw new Error("Overflow");
    return num;
  }

  function hitung() {
    const a = parseInt(document.getElementById("inputA").value);
    const b = parseInt(document.getElementById("inputB").value);
    const hasil = CariNilaiPangkat(a, b);
    document.getElementById("outputLabel").innerText = `Hasil: ${hasil}`;
  }
  ```

- pangkat.js

  ```js
  function CariNilaiPangkat(a, b) {
    if (b === 0) return 1;
    if (b < 0) return -1;
    if (b > 10 || a > 100) return -2;

    let result = 1;
    try {
      for (let i = 0; i < b; i++) {
        result = checkOverflow(result * a);
      }
    } catch {
      return -3;
    }
    return result;
  }
  function checkOverflow(num) {
    if (num > Number.MAX_SAFE_INTEGER) throw new Error("Overflow");
    return num;
  }
  module.exports = { CariNilaiPangkat };
  ```

- test/pangkat.test.js

  ```js
  const { CariNilaiPangkat } = require("../pangkat");

  test("pangkat biasa", () => {
    expect(CariNilaiPangkat(2, 3)).toBe(8);
  });

  test("pangkat 0", () => {
    expect(CariNilaiPangkat(5, 0)).toBe(1);
    expect(CariNilaiPangkat(0, 0)).toBe(1);
  });

  test("bilangan negatif", () => {
    expect(CariNilaiPangkat(3, -2)).toBe(-1);
  });

  test("batas input", () => {
    expect(CariNilaiPangkat(101, 2)).toBe(-2);
    expect(CariNilaiPangkat(2, 11)).toBe(-2);
  });

  test("overflow", () => {
    expect(CariNilaiPangkat(100, 10)).toBe(-3);
  });
  ```

**Output**

- Soal 1 & 2
  ![Image](https://github.com/user-attachments/assets/043a7814-2402-48ed-9e6d-9d1292c74783)

- Soal 3
  ![Image](https://github.com/user-attachments/assets/935cba30-5454-4826-9bc4-e5dfcd49dd7a)
  ![Image](https://github.com/user-attachments/assets/cbe06390-5c27-4352-b86b-f8f589cc12b8)

- Soal 4
  ![Image](https://github.com/user-attachments/assets/d70584f5-fd5f-4565-af39-511658aba06c)

---
