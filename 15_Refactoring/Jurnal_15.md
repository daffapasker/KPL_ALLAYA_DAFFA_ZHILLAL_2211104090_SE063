<div align="center">

**TUGAS JURNAL**  
**KONSTRUKSI PERANGKAT LUNAK**

**MODUL XV**  
**REFACTORING**

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

**Fitur Aplikasi**

1. Registrasi dan login user berbasis CLI
2. Data disimpan di file `users.json`
3. Validasi input:
   - Username hanya huruf ASCII
   - Password 8-20 karakter, wajib angka dan karakter spesial
   - Password tidak boleh mengandung username
4. Password hashing menggunakan SHA256

## B. Soal Nomor 2

**(Sisipkan screenshot hasil run dan isi `users.json`)**

## Input

- auth.js

  ```js
  const fs = require("fs");
  const crypto = require("crypto");

  const userFile = "users.json";

  // Validasi input username dan password
  function validateInput(username, password) {
    const asciiOnly = /^[a-zA-Z]+$/;
    const passwordRule = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,20}$/;

    if (!asciiOnly.test(username)) {
      throw new Error("Username hanya boleh berisi huruf alfabet ASCII.");
    }
    if (!passwordRule.test(password)) {
      throw new Error(
        "Password harus 8-20 karakter, mengandung angka dan karakter spesial."
      );
    }
    if (password.toLowerCase().includes(username.toLowerCase())) {
      throw new Error("Password tidak boleh mengandung bagian dari username.");
    }
  }

  // Hash password menggunakan SHA256
  function hashPassword(password) {
    return crypto.createHash("sha256").update(password).digest("hex");
  }

  // Simpan user
  function registerUser(username, password) {
    validateInput(username, password);
    const users = loadUsers();
    const exists = users.find((u) => u.username === username);
    if (exists) throw new Error("Username sudah terdaftar.");

    const user = { username, password: hashPassword(password) };
    users.push(user);
    fs.writeFileSync(userFile, JSON.stringify(users, null, 2));
    console.log("Registrasi berhasil.");
  }

  // Login user
  function loginUser(username, password) {
    const users = loadUsers();
    const hashed = hashPassword(password);
    const user = users.find(
      (u) => u.username === username && u.password === hashed
    );
    if (user) {
      console.log("Login berhasil.");
    } else {
      console.log("Login gagal. Username atau password salah.");
    }
  }

  // Load user dari file
  function loadUsers() {
    if (!fs.existsSync(userFile)) return [];
    const data = fs.readFileSync(userFile);
    return JSON.parse(data);
  }

  module.exports = { registerUser, loginUser };
  ```

- app.js

  ```js
  const readline = require("readline");
  const { registerUser, loginUser } = require("./auth");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function showMenu() {
    console.log("\n=== APLIKASI LOGIN ===");
    console.log("1. Registrasi");
    console.log("2. Login");
    console.log("3. Keluar");
    rl.question("Pilih menu: ", handleMenu);
  }

  function handleMenu(choice) {
    switch (choice) {
      case "1":
        rl.question("Username: ", (username) => {
          rl.question("Password: ", (password) => {
            try {
              registerUser(username, password);
            } catch (err) {
              console.error("Error:", err.message);
            }
            showMenu();
          });
        });
        break;
      case "2":
        rl.question("Username: ", (username) => {
          rl.question("Password: ", (password) => {
            try {
              loginUser(username, password);
            } catch (err) {
              console.error("Error:", err.message);
            }
            showMenu();
          });
        });
        break;
      case "3":
        rl.close();
        break;
      default:
        console.log("Pilihan tidak valid.");
        showMenu();
    }
  }

  showMenu();
  ```

- users.json
  ```json
  [
  {
    "username": "daffa",
    "password": "85a517f0e64bc022d51d1e8fe4dd009152cabf3feaf53b0667e4746bc61a2f73"
  }
  ]
  ```
- package.json
  ```json
  {
    "name": "login-app",
    "version": "1.0.0",
    "description": "Aplikasi Login sederhana dengan Node.js",
    "main": "main.js",
    "type": "commonjs",
    "scripts": {
      "start": "node main.js"
    },
    "author": "Daffa",
    "license": "ISC"
  }
  ```

## Output

![Image](https://github.com/user-attachments/assets/1f245dbb-3066-41e9-aa80-9c33c063034d)

---
