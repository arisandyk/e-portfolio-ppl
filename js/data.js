/* ============================================================
   PORTFOLIO DATA
   Ini satu-satunya file yang perlu kamu ubah untuk menambah
   atau mengedit isi siklus. Struktur & tampilan diatur otomatis
   oleh js/script.js — tinggal tambah/ubah objek di bawah.

   Cara menambah siklus baru: salin satu objek di dalam array
   "siklus" (pada "terbimbing" atau "mandiri"), lalu ganti isinya.
   Untuk link dokumen yang belum ada, biarkan href: "" — kartu
   akan otomatis ditandai sebagai "belum diisi".
   ============================================================ */

const PORTFOLIO = {
  profile: {
    name: "Ari Sandy Kurniawan",
    nim: "2531015",
    prodi: "Pendidikan Profesi Guru (PPG) Prajabatan – Informatika, Kelas INF B (PPLG)",
    kampus: "Universitas Pendidikan Indonesia",
    sekolah: "SMK Negeri 13 Bandung",
    semesterBerjalan: "Semester 2 — PPL Mandiri",
    initials: "AS",
    bio: "Calon guru Informatika dengan latar belakang sebagai pengembang perangkat lunak lepas (Flutter, Laravel, Swift, Firebase). Pengalaman itu banyak mewarnai cara saya merancang pembelajaran pemrograman: dimulai dari masalah nyata dan studi kasus konkret, bukan sekadar teori di papan tulis.",
    fokus: "Selama PPG Prajabatan, saya berfokus mengajar mata pelajaran Informatika dan Pemrograman Aplikasi Mobile, dengan minat khusus pada bagaimana pendekatan Discovery Learning dapat mendorong kemandirian belajar peserta didik saat menghadapi materi pemrograman yang baru bagi mereka."
  },

  terbimbing: {
    label: "PPL Terbimbing",
    subLabel: "Semester 1",
    siklus: [
      {
        id: "t1",
        judul: "Siklus 1",
        topik: "Pengenalan Logika Pemrograman melalui Flowchart (Flowgorithm)",
        kelas: "Kelas X — Informatika",
        guruPamong: "Guru Pamong PPL Terbimbing",
        status: "done",
        statusLabel: "Selesai",
        artefak: [
          { label: "RPP / Modul Ajar", href: "" },
          { label: "Video Pembelajaran", href: "" },
          { label: "Media Ajar", href: "" }
        ],
        konteks: "Artefak pada siklus pertama dirancang untuk memperkenalkan konsep Computational Thinking melalui algoritma dan flowchart. Tujuannya adalah membongkar stigma bahwa pemrograman itu abstrak. Media utama yang digunakan adalah slide presentasi (PPT) kontekstual dan perangkat lunak visual Flowgorithm.",
        analisis: [
          {
            judul: "Kendala Implementasi",
            isi: "Tantangan utama pada siklus awal ini adalah tingginya rasa ingin tahu siswa saat menggunakan Flowgorithm. Banyak kelompok yang merasa tertantang untuk mencoba seluruh studi kasus yang tersedia meskipun instruksi awalnya hanya menuntut penyelesaian satu kasus. Hal ini menyebabkan alokasi waktu diskusi dan presentasi menjadi sedikit melampaui batas waktu yang telah dialokasikan."
          },
          {
            judul: "Teori Pedagogi",
            isi: "Praktik ini mengadopsi teori belajar Konstruktivisme melalui pendekatan Student-Centered Learning (SCL). Proses apersepsi dilakukan dengan mengaitkan materi flowchart pada aktivitas pemecahan masalah di kehidupan sehari-hari (pembelajaran kontekstual). Selain itu, penggunaan Flowgorithm merupakan wujud penerapan kerangka TPACK (Technological Pedagogical Content Knowledge) yang mengubah konsep abstrak algoritma menjadi visual yang mudah dipahami siswa."
          },
          {
            judul: "Faktor Keberhasilan",
            isi: "Keberhasilan pembelajaran sangat dipengaruhi oleh penggunaan alat visual (Flowgorithm) yang memungkinkan siswa melihat hubungan antar-simbol secara langsung (hands-on experience). Pengaitan materi dengan aktivitas nyata di awal sesi (apersepsi kontekstual) juga terbukti efektif membangun kesiapan belajar dan motivasi intrinsik siswa."
          },
          {
            judul: "Rencana Perbaikan",
            isi: "Untuk situasi kelas di masa depan, lembar panduan diskusi (LKPD) akan dibuat lebih terstruktur (scaffolding) guna memandu fokus siswa. Selain itu, alokasi waktu khusus untuk sesi refleksi kelompok akan ditambahkan agar siswa tidak hanya mengejar hasil akhir (kode yang jalan), tetapi benar-benar menyadari proses berpikir algoritmik yang mereka gunakan."
          }
        ]
      }
    ]
  },

  mandiri: {
    label: "PPL Mandiri",
    subLabel: "Semester 2 — sedang berjalan",
    siklus: [
      {
        id: "m1",
        judul: "Siklus 1",
        topik: "Sistem Bilangan & Gerbang Logika",
        kelas: "DPK",
        guruPamong: "Pak Jaya",
        status: "done",
        statusLabel: "3 pertemuan selesai",
        artefak: [
          { label: "RPP / Modul Ajar", href: "" },
          { label: "Materi Ajar", href: "" },
          { label: "Media Ajar", href: "" },
          { label: "Video Pembelajaran", href: "" },
          { label: "Instrumen Penilaian", href: "" }
        ],
        konteks: "",
        analisis: []
      },
      {
        id: "m2",
        judul: "Siklus 2",
        topik: "Kotlin Collections (List, Set, Map) — Discovery Learning",
        kelas: "XI RPL 2 — Pemrograman Aplikasi Mobile",
        guruPamong: "Bu Nur",
        status: "done",
        statusLabel: "2 pertemuan selesai",
        artefak: [
          { label: "RPP / Modul Ajar", href: "" },
          { label: "Materi Ajar", href: "" },
          { label: "Media Ajar", href: "" },
          { label: "Video Pembelajaran", href: "" },
          { label: "Instrumen Penilaian", href: "" }
        ],
        konteks: "Artefak pada siklus ini dirancang untuk mengenalkan Kotlin Collections (List, Set, Map) melalui pendekatan Discovery Learning, dengan studi kasus \u201cManajemen Daftar Pemutaran Lagu\u201d agar peserta didik menemukan sendiri karakteristik tiap jenis Collections sebelum mendapat penguatan konsep secara klasikal. Siklus ini juga menjadi titik awal bagi Penelitian Tindakan Kelas (PTK) yang berfokus pada peningkatan kemandirian belajar peserta didik.",
        analisis: [
          {
            judul: "Kendala Implementasi",
            isi: "Variasi tingkat kemandirian belajar peserta didik cukup lebar — sebagian mampu mengeksplorasi List, Set, dan Map secara mandiri, namun sebagian besar masih menunggu instruksi rinci dan enggan mencoba trial-and-error saat menemui error pada kode. Kendala teknis seperti proses build/emulator Android Studio yang berjalan lambat turut menyita waktu praktik."
          },
          {
            judul: "Teori Pedagogi",
            isi: "Praktik ini menerapkan model Discovery Learning: peserta didik diarahkan menemukan sendiri karakteristik List, Set, dan Map melalui studi kasus, sebelum guru memberikan penguatan konsep secara klasikal — sejalan dengan teori belajar konstruktivisme yang menempatkan peserta didik sebagai pembangun aktif pemahamannya sendiri."
          },
          {
            judul: "Faktor Keberhasilan",
            isi: "Konteks yang dekat dengan keseharian peserta didik (aplikasi pemutar musik) meningkatkan antusiasme, terlihat dari keaktifan kelompok yang sudah terbiasa belajar mandiri dalam berdiskusi dan mencoba variasi kode tanpa menunggu instruksi guru."
          },
          {
            judul: "Rencana Perbaikan",
            isi: "Berdasarkan umpan balik Guru Pamong, LKPD akan disusun lebih bertahap (scaffolded) dan dilengkapi unsur gamifikasi agar peserta didik yang pasif memiliki titik masuk yang lebih ringan untuk mencoba secara mandiri, dengan target terukur minimal 70% peserta didik mampu menyelesaikan latihan secara mandiri. Temuan ini menjadi dasar pengembangan intervensi PTK berikutnya."
          }
        ]
      },
      {
        id: "m3",
        judul: "Siklus 3",
        topik: "Validitas Data — Mengidentifikasi Data Outlier dan Kesalahan Input pada Hasil Eksperimen Laboratorium",
        kelas: "X SMK Kimia Analisis — Informatika (Elemen Berpikir Komputasional)",
        guruPamong: "Bu Puri",
        status: "progress",
        statusLabel: "Sedang berlangsung — 1 dari rencana pertemuan",
        artefak: [
          { label: "RPP / Modul Ajar", href: "" },
          { label: "Materi Ajar", href: "" },
          { label: "Media Ajar", href: "" },
          { label: "Video Pembelajaran", href: "" },
          { label: "Instrumen Penilaian", href: "" }
        ],
        konteks: "Artefak pada siklus ini dirancang untuk elemen Berpikir Komputasional, dengan materi Validitas Data — mengidentifikasi data outlier dan kesalahan input pada hasil eksperimen laboratorium. Materi ini dipilih karena relevan dengan konteks kompetensi keahlian peserta didik di Kimia Analisis, yang sehari-hari bekerja dengan data hasil pengukuran dan eksperimen di laboratorium. Tujuannya adalah melatih peserta didik menerapkan empat pilar computational thinking — dekomposisi, pengenalan pola, abstraksi, dan penyusunan algoritma — untuk mengevaluasi validitas suatu kumpulan data ilmiah.",
        analisis: [
          {
            judul: "Kendala Implementasi",
            isi: "Sebagai pertemuan pertama pada siklus ini, tantangan awal yang teridentifikasi adalah peserta didik belum terbiasa memandang data hasil eksperimen laboratorium dari sudut pandang computational thinking. Sebagian besar cenderung menilai kewajaran suatu data secara intuitif berdasarkan pengalaman praktikum, bukan melalui kriteria identifikasi outlier yang sistematis."
          },
          {
            judul: "Teori Pedagogi",
            isi: "Praktik ini mengadopsi pendekatan Contextual Teaching and Learning (CTL) dengan memanfaatkan konteks laboratorium yang akrab bagi peserta didik Kimia Analisis, dipadukan dengan Problem-Based Learning (PBL) — data outlier dan kesalahan input diposisikan sebagai masalah nyata yang harus dipecahkan."
          },
          {
            judul: "Faktor Keberhasilan",
            isi: "Keterkaitan materi dengan konteks praktikum laboratorium yang dekat dengan keseharian peserta didik meningkatkan relevansi dan motivasi belajar. Penggunaan studi kasus data eksperimen yang konkret mempermudah peserta didik mengaitkan konsep computational thinking dengan pengalaman nyata mereka di laboratorium."
          },
          {
            judul: "Rencana Perbaikan",
            isi: "Pertemuan berikutnya direncanakan untuk memperdalam praktik langsung menggunakan spreadsheet (Google Sheets/Excel) guna mendeteksi outlier secara kuantitatif (misalnya metode Z-score atau IQR sederhana), serta menyiapkan instrumen penilaian berupa studi kasus data eksperimen yang lebih bervariasi."
          }
        ]
      }
    ]
  },

  nonmengajar: []
};
