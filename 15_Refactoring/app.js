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
