<div align="center">

**TUGAS JURNAL**  
**KONSTRUKSI PERANGKAT LUNAK**

**MODUL VII**  
**GRAMMAS BASED INPUT PROCESSING PARSING**

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

MENAMBAHKAN JSON DESERIALIZATION 1
Buatlah branch baru dengan nama branch “irpan” dan checkout kesana.
A. Download file “jurnal7_1_2211104090.json” dan rename file tersebut dengan mengganti “nim”
dengan NIM praktikan kemudian pindahkan file json tersebut di folder solution projectnya.
B. Ganti isi dari file json tersebut dengan detail yang benar dari praktikan.
C. Buatlah sebuah file class baru dengan nama “DataMahasiswa<2211104090_PRAKTIKAN>”.
D. Buat method “ReadJSON() yang melakukan parsing untuk file tersebut menjadi object
sesuai.
E. Pada method tersebut, lakukan print hasil deserialisasi dari object yang dibuat dengan
format bebas asalkan semua nilai ditampilkan di console/output.

## A. Soal Nomor 2

MENAMBAHKAN JSON DESERIALIZATION 2
Buatlah branch baru dengan nama branch “irpan” dan checkout kesana.
A. Download file “jurnal7_2_2211104090.json” dan rename file tersebut dengan mengganti “nim”
dengan NIM praktikan kemudian pindahkan file json tersebut di folder solution projectnya.
B. Ubah isi dari file json tersebut dengan daftar anggota kelompok (untuk tubes).
C. Buatlah sebuah file class baru dengan nama “TeamMembers<2211104090_PRAKTIKAN>”.
D. Buat method “ReadJSON() yang melakukan parsing untuk file tersebut menjadi object
sesuai.
E. Pada method tersebut, lakukan print hasil deserialisasi dari object yang dibuat dengan
format:
“Team member list:”
“<2211104090> <Allaya + Daffa Zhillal> (<22> <L>) ”
“<2211104068> <Putra + Pratama Okta Riano> (<22> <L>) ”
dst.

**Input**

- jurnal7_1_2211104090

```json
{
    "nama": "Allaya Daffa Zhillal",
    "nim": "2211104090",
    "fakultas": "Direktorat Kampus Purwokerto",
    "prodi": "Rekayasa Perangkat Lunak",
    "angkatan": 2022
  }
```

- DataMahasiswa2211104090

```js
const fs = require("fs");

class DataMahasiswa2211104090 {
  static ReadJSON() {
    const filePath = "./jurnal7_1_2211104090.json";
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const mhs = JSON.parse(jsonData);

    console.log("===== DATA MAHASISWA =====");
    console.log(`Nama      : ${mhs.nama}`);
    console.log(`NIM       : ${mhs.nim}`);
    console.log(`Fakultas  : ${mhs.fakultas}`);
    console.log(`Prodi     : ${mhs.prodi}`);
    console.log(`Angkatan  : ${mhs.angkatan}`);
    console.log("===========================");
  }
}

module.exports = DataMahasiswa2211104090;
```

- jurnal7_2_2211104090

```json
{
    "anggota": [
      {
        "nim": "2211104090",
        "nama": "Allaya Daffa Zhillal",
        "angkatan": "22",
        "jenis_kelamin": "L"
      },
      {
        "nim": "2211104068",
        "nama": "Putra Pratama Okta Riano",
        "angkatan": "22",
        "jenis_kelamin": "L"
      },
      {
        "nim": "2211104091",
        "nama": "Naufal Maulana Izzuddin",
        "angkatan": "22",
        "jenis_kelamin": "L"
      }
    ]
  }
```

- TeamMembers2211104090

```js
const fs = require("fs");

class TeamMembers2211104090 {
  static ReadJSON() {
    const filePath = "./jurnal7_2_2211104090.json";
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(jsonData);

    console.log("Team member list:");
    data.anggota.forEach((anggota) => {
      console.log(
        `- ${anggota.nim} ${anggota.nama} ${anggota.angkatan} ${anggota.jenis_kelamin}`
      );
    });
  }
}

module.exports = TeamMembers2211104090;
```

- index

```js
const DataMahasiswa = require("./DataMahasiswa2211104090");

DataMahasiswa.ReadJSON();

const TeamMembers = require("./TeamMembers2211104090");

TeamMembers.ReadJSON();
```

**Output**



---