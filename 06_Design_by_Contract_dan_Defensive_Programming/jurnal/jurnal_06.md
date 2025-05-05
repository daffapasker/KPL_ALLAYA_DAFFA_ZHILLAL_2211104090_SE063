<div align="center">

**TUGAS JURNAL**  
**KONSTRUKSI PERANGKAT LUNAK**

**MODUL VI**  
**DESIGN BY CONTRACT & DEFENSIVE PROGRAMING**

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

MENAMBAHKAN KODE AWAL SAYATUBEVIDEO
Buatlah dua file class baru yang berisi detail sebagai berikut:
A. Class bernama “SayaTubeUser” dan “SayaTubeVideo”.
B. Struktur dari class tersebut dapat dilihat pada gambar di bawah ini:
C. Konstruktor pada kelas “SayaTubeVideo” menerima dua parameter yaitu judul video. Pada saat
objek dibuat, nilai “id” akan di-generate secara random sepanjang 5 digit (bisa coba gunakan class
Random bawaan bahasa pemrograman yang digunakan) dan nilai “playCount” akan diisi dengan 0.
D. Pada class “SayaTubeVideo”, tambahkan sebuah method dengan nama “IncreasePlayCount” yang
menerima jumlah angka yang akan ditambahkan ke “playCount”.
E. Class “SayaTubeVideo” juga mempunyai method “PrintVideoDetails” yang melakukan print baik
dari id, title dan playCount dengan format bebas.
F. Konstruktor kelas “SayaTubeUser” mirip dengan kelas “SayaTubeVideo”, bedanya adalah property
Username dan list kosong dari uploadedVideos.
G. Pada kelas “SayaTubeUser”, terdapat method GetTotalVideoPlayCount() yang mengembalikan
jumlah playCount dari semua video yang ada di list uploadedVideos. Selain itu, juga terdapat
method AddVideo yang dapat menambahkan elemen baru ke list uploadedVideos.
H. Method terakhir di kelas tersebut adalah PrintAllVideoPlaycount() yang melakukan print terhadap
semua judul video yang ditambahkan dengan format:
“User: <username>”
“Video 1 judul: <judul_video1>”
“Video 2 judul: <judul_video2>”
dst.
I. Panggil semua method yang dibuat dari kedua kelas pada fungsi/method utama dengan membuat.
Gunakan nama panggilan praktikan untuk username dan judul video dengan format “Review Film
<judul_film> oleh <nama_praktikan>”. Tambahkan minimal 10 judul film yang menurut praktikan
bagus untuk ditonton.

**Input**

- sayaTubeVideo

  ```js
  const crypto = require("crypto");

    class SayaTubeVideo {
      constructor(title) {
        try {
          if (title == null) throw new Error("Judul tidak boleh null.");
          if (typeof title !== "string")
            throw new Error("Judul harus berupa string.");
          if (title.length > 200) throw new Error("Judul maksimal 200 karakter.");

          this.id = crypto.randomInt(10000, 99999);
          this.title = title;
          this.playCount = 0;
        } catch (error) {
          console.error(`[ERROR Constructor] ${error.message}`);
        }
      }

      increasePlayCount(count, override = false) {
        try {
          if (typeof count !== "number")
            throw new Error("Input harus berupa angka.");
          if (count < 0) throw new Error("Play count tidak boleh negatif.");
          if (!override && count > 25000000)
            throw new Error("Penambahan play count maksimal 25.000.000.");

          if (this.playCount + count > Number.MAX_SAFE_INTEGER) {
            throw new Error("Play count melebihi batas maksimum integer aman.");
          }

          this.playCount += count;
        } catch (error) {
          console.error(`[ERROR increasePlayCount] ${error.message}`);
        }
      }

      printVideoDetails() {
        console.log(`ID: ${this.id}`);
        console.log(`Title: ${this.title}`);
        console.log(`Play Count: ${this.playCount}`);
      }
    }

    module.exports = SayaTubeVideo;
  ```

- sayaTubeUser

  ```js
  class SayaTubeUser {
    constructor(username) {
      try {
        if (username == null) throw new Error("Username tidak boleh null.");
        if (typeof username !== "string")
          throw new Error("Username harus berupa string.");
        if (username.length > 100)
          throw new Error("Username maksimal 100 karakter.");
  
        this.username = username;
        this.uploadedVideos = [];
      } catch (error) {
        console.error(`[ERROR Constructor] ${error.message}`);
      }
    }
  
    addVideo(video) {
      try {
        if (video == null) throw new Error("Video tidak boleh null.");
        if (typeof video !== "object")
          throw new Error("Video harus berupa object.");
        if (video.playCount >= Number.MAX_SAFE_INTEGER) {
          throw new Error("Play count video melebihi batas maksimum.");
        }
  
        this.uploadedVideos.push(video);
      } catch (error) {
        console.error(`[ERROR addVideo] ${error.message}`);
      }
    }
  
    getTotalVideoPlayCount() {
      let total = 0;
      for (const video of this.uploadedVideos) {
        total += video.playCount;
      }
      return total;
    }
  
    printAllVideoPlaycount() {
      console.log(`User: ${this.username}`);
      for (let i = 0; i < Math.min(8, this.uploadedVideos.length); i++) {
        console.log(`Video ${i + 1} judul: ${this.uploadedVideos[i].title}`);
      }
    }
  }
  
  module.exports = SayaTubeUser;
  ```

- index

  ```js
    const SayaTubeVideo = require("./sayaTubeVideo");
    const SayaTubeUser = require("./sayaTubeUser");

    function main() {
    const username = "Allaya Daffa Zhillal";
    const user = new SayaTubeUser(username);

    const judulFilm = [
        "Review Film Masa Lalu Tetap Pemenangnya oleh Allaya Daffa Zhillal",
        "Review Film Interstellar oleh Allaya Daffa Zhillal",
        "Review Film Inception oleh Allaya Daffa Zhillal",
        "Review Film Parasite oleh Allaya Daffa Zhillal",
        "Review Film The Social Network oleh Allaya Daffa Zhillal",
        "Review Film The Dark Knight oleh Allaya Daffa Zhillal",
        "Review Film Whiplash oleh Allaya Daffa Zhillal",
        "Review Film Your Name oleh Allaya Daffa Zhillal",
        "Review Film Everything Everywhere All At Once oleh Allaya Daffa Zhillal",
        "Review Film The Secret Life of Walter Mitty oleh Allaya Daffa Zhillal",
    ];

    for (let judul of judulFilm) {
        const video = new SayaTubeVideo(judul);
        video.increasePlayCount(Math.floor(Math.random() * 100000));
        user.addVideo(video);
    }

    console.log("=== Detail Video ===");
    user.uploadedVideos.forEach((video) => video.printVideoDetails());

    console.log("\n=== Statistik User ===");
    user.printAllVideoPlaycount();
    console.log(`Total Play Count: ${user.getTotalVideoPlayCount()}`);
    }

    main();

  ```

**Output**

```
=== Detail Video ===
ID: 83949
Title: Review Film Masa Lalu Tetap Pemenangnya oleh Allaya Daffa Zhillal
Play Count: 35956
ID: 92639
Title: Review Film Interstellar oleh Allaya Daffa Zhillal
Play Count: 59701
ID: 21605
Title: Review Film Inception oleh Allaya Daffa Zhillal
Play Count: 80097
ID: 59054
Title: Review Film Parasite oleh Allaya Daffa Zhillal
Play Count: 64583
ID: 61751
Title: Review Film The Social Network oleh Allaya Daffa Zhillal
Play Count: 72346
ID: 38385
Title: Review Film The Dark Knight oleh Allaya Daffa Zhillal
Play Count: 90844
ID: 90145
Title: Review Film Whiplash oleh Allaya Daffa Zhillal
Play Count: 48874
ID: 44819
Title: Review Film Your Name oleh Allaya Daffa Zhillal
Play Count: 2256
ID: 44264
Title: Review Film Everything Everywhere All At Once oleh Allaya Daffa Zhillal
Play Count: 52434
ID: 71850
Title: Review Film The Secret Life of Walter Mitty oleh Allaya Daffa Zhillal
Play Count: 43114

=== Statistik User ===
User: Allaya Daffa Zhillal
Video 1 judul: Review Film Masa Lalu Tetap Pemenangnya oleh Allaya Daffa Zhillal
Video 2 judul: Review Film Interstellar oleh Allaya Daffa Zhillal
Video 3 judul: Review Film Inception oleh Allaya Daffa Zhillal
Video 4 judul: Review Film Parasite oleh Allaya Daffa Zhillal
Video 5 judul: Review Film The Social Network oleh Allaya Daffa Zhillal
Video 6 judul: Review Film The Dark Knight oleh Allaya Daffa Zhillal
Video 7 judul: Review Film Whiplash oleh Allaya Daffa Zhillal
Video 8 judul: Review Film Your Name oleh Allaya Daffa Zhillal

Total Play Count: 550205

```

## A. Soal Nomor 2

MENAMBAHKAN IMPLEMENTASI DESIGN BY CONTRACT
Pada class yang dibuat sebelumnya tambahkan implementasi design by contract dengan:
A. Precondition sebagai berikut ini:
i. Judul video memiliki panjang maksimal 200 karakter.
ii. Judul video tidak berupa null.
iii. Input penambahan play count maksimal 25.000.000 per panggilan method-nya
iv. Input play count tidak berupa bilangan negatif.
v. Nama username memiliki panjang maksimal 100 karakter.
vi. Nama username tidak berupa null.
vii. Video yang ditambahkan tidak berupa null.
viii. Video yang ditambahkan punya playCount yang kurang dari bilangan integer maksimum.
B. Exception (tambahkan juga blok try-catch sehingga program tidak berhenti):
i. Dengan menggunakan “checked” keyword pada C# atau operator sepadan pada bahasa
pemrograman lain, pastikan jumlah penambahan play count tidak melebihi batas tertinggi
integer (overflow).
C. Postcondition sebagai berikut:
i. Jumlah video maksimal yang di-print adalah 8 pada method PrintAllVideoPlaycount()
D. Panggil object dari class SayaTubeVideo dan SayaTubeUser yang menguji prekondisi, exception
dan postcondition. (Catatan: untuk exception boleh digunakan for loop sehingga proses overflow
dapat dipercepat).

**Input**

- sayaTubeVideo

  ```js
  const crypto = require("crypto");

  class SayaTubeVideo {
    constructor(title) {
      try {
        if (title == null) throw new Error("Judul tidak boleh null.");
        if (typeof title !== "string")
          throw new Error("Judul harus berupa string.");
        if (title.length > 200) throw new Error("Judul maksimal 200 karakter.");

        this.id = crypto.randomInt(10000, 99999);
        this.title = title;
        this.playCount = 0;
      } catch (error) {
        console.error(`[ERROR Constructor] ${error.message}`);
      }
    }

    increasePlayCount(count, override = false) {
      try {
        if (typeof count !== "number")
          throw new Error("Input harus berupa angka.");
        if (count < 0) throw new Error("Play count tidak boleh negatif.");
        if (!override && count > 25000000)
          throw new Error("Penambahan play count maksimal 25.000.000.");

        if (this.playCount + count > Number.MAX_SAFE_INTEGER) {
          throw new Error("Play count melebihi batas maksimum integer aman.");
        }

        this.playCount += count;
      } catch (error) {
        console.error(`[ERROR increasePlayCount] ${error.message}`);
      }
    }

    printVideoDetails() {
      console.log(`ID: ${this.id}`);
      console.log(`Title: ${this.title}`);
      console.log(`Play Count: ${this.playCount}`);
    }
  }

  module.exports = SayaTubeVideo;
  ```

- sayaTubeUser

  ```js
  class SayaTubeUser {
    constructor(username) {
      try {
        if (username == null) throw new Error("Username tidak boleh null.");
        if (typeof username !== "string")
          throw new Error("Username harus berupa string.");
        if (username.length > 100)
          throw new Error("Username maksimal 100 karakter.");

        this.username = username;
        this.uploadedVideos = [];
      } catch (error) {
        console.error(`[ERROR Constructor] ${error.message}`);
      }
    }

    addVideo(video) {
      try {
        if (video == null) throw new Error("Video tidak boleh null.");
        if (typeof video !== "object")
          throw new Error("Video harus berupa object.");
        if (video.playCount >= Number.MAX_SAFE_INTEGER) {
          throw new Error("Play count video melebihi batas maksimum.");
        }

        this.uploadedVideos.push(video);
      } catch (error) {
        console.error(`[ERROR addVideo] ${error.message}`);
      }
    }

    getTotalVideoPlayCount() {
      let total = 0;
      for (const video of this.uploadedVideos) {
        total += video.playCount;
      }
      return total;
    }

    printAllVideoPlaycount() {
      console.log(`User: ${this.username}`);
      for (let i = 0; i < Math.min(8, this.uploadedVideos.length); i++) {
        console.log(`Video ${i + 1} judul: ${this.uploadedVideos[i].title}`);
      }
    }
  }

  module.exports = SayaTubeUser;
  ```

- index

  ```js
    const SayaTubeVideo = require('./sayaTubeVideo');
    const SayaTubeUser = require('./sayaTubeUser');

    function main() {
    const namaPraktikan = "Daffa";
    const user = new SayaTubeUser(namaPraktikan);

    const judulFilm = [
        "Interstellar",
        "Inception",
        "The Dark Knight",
        "Parasite",
        "Whiplash",
        "The Social Network",
        "Joker",
        "Everything Everywhere All At Once",
        "The Grand Budapest Hotel",
        "Spider-Man: No Way Home"
    ];

    for (const judul of judulFilm) {
        const video = new SayaTubeVideo(`Review Film ${judul} oleh ${namaPraktikan}`);
        video.increasePlayCount(Math.floor(Math.random() * 1000)); // Simulasi play count
        user.addVideo(video);
    }

    console.log("\n===== Detail Semua Video =====");
    user.printAllVideoPlaycount();

    console.log("\n===== Total Semua Play Count =====");
    console.log(`Total play count: ${user.getTotalVideoPlayCount()}`);
    }

    main();
  ```

**Output**

```
===== Detail Semua Video =====
User: Daffa
Video 1 judul: Review Film Interstellar oleh Daffa
Video 2 judul: Review Film Inception oleh Daffa
Video 3 judul: Review Film The Dark Knight oleh Daffa
Video 4 judul: Review Film Parasite oleh Daffa
Video 5 judul: Review Film Whiplash oleh Daffa
Video 6 judul: Review Film The Social Network oleh Daffa
Video 7 judul: Review Film Joker oleh Daffa
Video 8 judul: Review Film Everything Everywhere All At Once oleh Daffa

===== Total Semua Play Count =====
Total play count: 5520
```

---