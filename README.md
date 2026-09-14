# Jurnal Praktik Mengajar — E-Portfolio

Situs statis (HTML/CSS/JS murni, tanpa build step) untuk E-Portfolio PPL — siap di-hosting di GitHub Pages.

## Struktur file

```
index.html      -> kerangka halaman (jangan sering diubah)
css/style.css   -> semua styling & tema warna
js/data.js      -> SEMUA isi konten (edit file ini untuk update)
js/script.js    -> logika render & interaksi (jangan diubah kecuali menambah fitur)
```

## Mengedit konten

Hampir semua yang perlu kamu ubah ada di `js/data.js`:
- Ganti `href: ""` dengan link Google Drive/YouTube begitu dokumen siap — kartu artefak otomatis berubah dari "belum tersedia" jadi tautan aktif.
- Untuk menambah siklus baru, salin satu objek di dalam array `siklus` (pada `terbimbing` atau `mandiri`) lalu sesuaikan isinya. Tab navigasi & sidebar akan otomatis bertambah, tidak perlu menyentuh HTML/CSS.
- Siklus 1 Mandiri (DPK) sengaja dibiarkan `konteks: ""` dan `analisis: []` karena refleksinya belum ditulis — begitu ada isinya, situs otomatis menampilkan bagian analisis, bukan status kosong lagi.

## Menjalankan di komputer sendiri sebelum upload

Buka langsung `index.html` di browser (double-click) sudah cukup untuk melihat hasilnya.

## Deploy ke GitHub Pages

1. Buat repository baru di GitHub, misalnya `e-portfolio-ppl`.
2. Upload ketiga isi folder ini (`index.html`, folder `css/`, folder `js/`) ke root repository tersebut — **jangan taruh di dalam subfolder**, `index.html` harus ada langsung di root.
3. Buka tab **Settings** repository → menu **Pages** di sidebar kiri.
4. Pada **Branch**, pilih `main` dan folder `/ (root)`, lalu klik **Save**.
5. Tunggu 1–2 menit, GitHub akan menampilkan URL situsmu, formatnya seperti:
   `https://<username-github-kamu>.github.io/e-portfolio-ppl/`
6. Kirim URL tersebut sebagai alamat E-Portfolio.

Kalau kamu lebih familiar dengan Git lewat command line:
```
git init
git add .
git commit -m "E-Portfolio PPL Mandiri"
git branch -M main
git remote add origin https://github.com/<username>/e-portfolio-ppl.git
git push -u origin main
```
Lalu lanjut ke langkah 3–5 di atas.

## Catatan jujur soal konten

- Isi Siklus 1 PPL Terbimbing (Flowgorithm) ditranskrip dari tangkapan layar Google Sites kamu; dua kalimat yang sebelumnya terpotong di layar (bagian akhir "Kendala Implementasi" dan "Teori Pedagogi") dilengkapi secara wajar mengikuti alur kalimat — cek ulang keduanya.
- Isi Siklus 2 (PPB/Kotlin) diadaptasi dari LK 3 yang sudah kita susun bersama sebelumnya.
- Isi Siklus 3 (Informatika) adalah draf berdasarkan topik yang kamu berikan, belum berdasarkan laporan pertemuan riil.
- Siklus 1 Mandiri (DPK) sengaja dikosongkan karena kita belum punya cerita nyatanya — isi setelah kamu siap.
