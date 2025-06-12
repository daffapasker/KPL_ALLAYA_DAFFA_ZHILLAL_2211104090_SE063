<div align="center">

**TUGAS PENDAHULUAN**  
**KONSTRUKSI PERANGKAT LUNAK**

**MODUL IX**  
**API DESIGN DAN CONSTRUCTION USING SWAGGER**

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

# TUGAS PENDAHULUAN

## A. Soal Nomor 1

MEMBUAT PROJECT WEB API
Berhubung cara membuat project web api berbeda-beda untuk setiap bahasa pemrograman, langkah-
langkah berikut hanya berlaku apabila dilakukan dengan menggunakan .NET dan Visual Studio. Untuk
IDE dan bahasa pemrograman lain, yang terpenting adalah nama project yang dibuat yaitu
“modul8_NIM”.

- TP_9.ipynb

```py
# Import library
from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
import nest_asyncio
from pyngrok import ngrok, conf
import uvicorn

# Inisialisasi FastAPI
app = FastAPI()

# Konfigurasi ngrok (ganti dengan auth_token milikmu)
conf.get_default().auth_token = "2wD9PiHmHEI6uSbBMGeAXzlHNE2_4TYns7uJx9UZVRTmRsTUy"

# MODEL
class Movie(BaseModel):
    Title: str
    Director: str
    Stars: List[str]
    Description: str

# DATA DEFAULT (Top 3 IMDb per Mei 2025)
movie_list = [
    {
        "Title": "The Shawshank Redemption",
        "Director": "Frank Darabont",
        "Stars": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
        "Description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
    },
    {
        "Title": "The Godfather",
        "Director": "Francis Ford Coppola",
        "Stars": ["Marlon Brando", "Al Pacino", "James Caan"],
        "Description": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
    },
    {
        "Title": "The Dark Knight",
        "Director": "Christopher Nolan",
        "Stars": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        "Description": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests."
    },
]

# ENDPOINTS
@app.get("/api/Movies")
def get_all_movies():
    return movie_list

@app.get("/api/Movies/{id}")
def get_movie_by_id(id: int):
    if 0 <= id < len(movie_list):
        return movie_list[id]
    return {"error": "Movie tidak ditemukan"}

@app.post("/api/Movies")
def add_movie(movie: Movie):
    movie_list.append(movie.dict())
    return {"pesan": "Movie berhasil ditambahkan"}

@app.delete("/api/Movies/{id}")
def delete_movie(id: int):
    if 0 <= id < len(movie_list):
        deleted = movie_list.pop(id)
        return {"pesan": "Movie berhasil dihapus", "data": deleted}
    return {"error": "Movie tidak ditemukan"}

# Jalankan server
nest_asyncio.apply()
public_url = ngrok.connect(3000)
print("🎬 Swagger UI:", public_url.public_url + "/docs")
print("🎬 API URL:", public_url.public_url)

uvicorn.run(app, port=3000)

```

**Output**

![Image](https://github.com/user-attachments/assets/9aa6460a-4eef-4c6c-8e4a-efe199a5b9a5)

- GET /api/Movies
  ![Image](https://github.com/user-attachments/assets/47f545ac-dede-49a6-bc7e-169014cd98d2)

- POST /api/Movies
  ![Image](https://github.com/user-attachments/assets/bd04b9a1-6172-48e9-b79a-58b9bacaef8d)

- GET /api/Movies/{index}
  ![Image](https://github.com/user-attachments/assets/68dd83bb-6676-4e57-8327-fd2e81961197)

- DELETE /api/Movies/{index}
  ![Image](https://github.com/user-attachments/assets/68dd83bb-6676-4e57-8327-fd2e81961197)

---
