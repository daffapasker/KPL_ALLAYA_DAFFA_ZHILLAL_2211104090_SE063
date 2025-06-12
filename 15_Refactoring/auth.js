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
