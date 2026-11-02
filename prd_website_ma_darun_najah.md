# Product Requirement Document (PRD)
## Website Resmi Madrasah Aliyah Darun Najah Sambikarto

---

## 1. Ringkasan Eksekutif & Informasi Lembaga

| Informasi | Detail |
| :--- | :--- |
| **Nama Lembaga** | Madrasah Aliyah Darun Najah Sambikarto (MA DN / PPDN) |
| **Yayasan Naungan** | Yayasan Pendidikan Pondok Pesantren Darun Najah Sambikarto |
| **Ketua Yayasan** | Suparno, S.Pd.I |
| **Tokoh / Pengasuh** | KH. Sahlan Abdulloh & KH. Abdul Ghofar, S.Pd.I |
| **Alamat** | Jl. Raya Bumi Agung, Desa Sambikarto, Kec. Sekampung, Kab. Lampung Timur, Kode Pos 34182 |
| **Kontak / Narahubung**| 0856-5897-3426 |
| **Semboyan / Visi Utama** | "Terbentuknya Generasi Yang Berilmu Amaliyah Bertakwa Ilahiyah Sesuai Konteks Zaman" |
| **Tech Stack** | Frontend Statis: Vanilla HTML5, CSS3 (Modern Flexbox/Grid + CSS Variables), Vanilla JavaScript (ES6+) |

---

## 2. Tujuan & Sasaran Produk

1. **Digital Branding & Kredibilitas**: Menyajikan profil resmi madrasah berbasis pesantren yang kredibel, modern, dan representatif bagi publik luas.
2. **Kanal Informasi Terpadu**: Menyampaikan sejarah, legalitas, visi-misi, sarana prasarana, program unggulan, dan kurikulum pesantren-madrasah.
3. **Pusat Informasi PPDB Online**: Memfasilitasi calon peserta didik dan wali murid untuk mengetahui mekanisme seleksi dan mendaftar secara online/terarah ke WhatsApp panitia.
4. **Ringan, Cepat & Responsif**: Website dibangun tanpa dependensi runtime berat, hemat kuota bagi pengguna di wilayah Lampung Timur dan sekitarnya.

---

## 3. Profil Pengguna (User Personas)

1. **Calon Wali Santri & Santri Baru**:
   - Membutuhkan informasi profil, biaya, program asrama/pesantren, alur seleksi PPDB, dan kontak resmi.
2. **Siswa Aktif & Alumni**:
   - Memerlukan update kegiatan ekstrakurikuler, agenda madrasah, dan informasi keorganisasian.
3. **Masyarakat Umum & Instansi/Kemenag**:
   - Memerlukan informasi legalitas, akreditasi, peta lokasi madrasah, dan struktur pengelola.

---

## 4. Panduan Desain & Identitas Visual (Berdasarkan Logo)

- **Palet Warna Utama**:
  - `Primary Emerald Green`: `#0b6623` / `#008037` (Hijau khas logo dan identitas pesantren)
  - `Gold / Yellow Accent`: `#FFC72C` / `#E5A823` (Warna bintang dan ornamen kubah)
  - `Clean White`: `#FFFFFF` (Latar bacaan dan kontras)
  - `Slate Dark`: `#1E293B` (Tipografi body text)
  - `Soft Light Gray`: `#F8FAFC` (Latar belakang seksi netral)
- **Tipografi**:
  - Judul / Header: `Poppins` atau `Inter` (Sans-serif modern, ramah, tegas)
  - Teks Arab / Kaligrafi (ayat *Wa'tashimu bihablillah...*): `Amiri` atau font kaligrafi Naskh
  - Teks Isi: `Roboto` / `Inter` (Keterbacaan tinggi)
- **Elemen Grafis**:
  - Bentuk kelopak bunga segi lima (sesuai kontur logo)
  - Pita lengkung hijau bertuliskan **P P D N** / **M A D N**
  - Ikon ornamen islami (kubah, bintang sembilan, mushaf Al-Qur'an terbuka)

---

## 5. Struktur Arsitektur Informasi & Menu (Sitemap)

```text
MA Darun Najah Website
├── 1. Navbar & Topbar (Kontak Cepat, Alamat, Menu Navigasi, Tombol PPDB)
├── 2. Hero Banner (Tagline, Profil Singkat, Tombol CTA Cepat)
├── 3. Statistik Kilas (Tahun Berdiri, Jenjang, Program, Kurikulum Terpadu)
├── 4. Sambutan Kepala Madrasah & Ketua Yayasan
├── 5. Profil & Sejarah (Transformasi 1980 hingga era modern MA)
├── 6. Visi, Misi & Tujuan Pendidikan
├── 7. Kurikulum & Program Unggulan (Integrasi Salafiyah Diniyah + Formal Kemenag)
├── 8. Ekstrakurikuler & Life Skills (Kesenian, Keorganisasian, Olahraga, IT & Wirausaha)
├── 9. Fasilitas & Rencana Kampus (Master Plan 3 Lantai, Lab, Musolla)
├── 10. Alur Penerimaan Peserta Didik Baru (PPDB Online)
├── 11. FAQ & Kontak / Lokasi Interaktif (Google Maps Embed)
└── 12. Footer Lengkap & Hak Cipta
```

---

## 6. Spesifikasi Fitur Detail

### F-01: Navigasi Sticky & Menu Mobile
- **Deskripsi**: Menu berada di atas, menempel (*sticky*) saat di-scroll dengan efek bayangan halus (*box-shadow*).
- **Komponen**: Logo madrasah di sisi kiri, menu desktop di kanan, serta tombol menu toggle (hamburger) untuk layar smartphone.
- **Interaksi**: Klik menu melakukan smooth-scroll ke seksi tujuan.

### F-02: Hero Section Interaktif
- **Deskripsi**: Tampilan utama berdaya pikat tinggi dengan background bernuansa islami, headline resmi, dan dua tombol aksi (Call to Action): "Daftar PPDB" dan "Jelajahi Profil".

### F-03: Riwayat Sejarah & Garis Waktu (Timeline)
- Menampilkan fase sejarah resmi dari dokumen RKM:
  1. **1980 - 1991 (Masa Pra Pesantren)**: Diniyah Salafiyah di Masjid Istiqomah Sambikarto.
  2. **1991 - 2000 (Masa Berdirinya Pesantren)**: Pembelian/wakaf tanah, berdirinya PP Darun Najah di bawah asuhan KH. Sahlan Abdulloh & KH. Abdul Ghofar, S.Pd.I.
  3. **2009 - 2015 (Pembangunan & MTs SA)**: Kemitraan NGO Australia melahirkan MTs Satu Atap Darun Najah.
  4. **2016 - Sekarang (Kelahiran MA Darun Najah)**: Berdirinya MA Darun Najah pada 16 April 2016 sebagai kesinambungan pendidikan formal menengah atas.

### F-04: Tab / Accordion Visi, Misi & Tujuan
- Memuat teks asli dari naskah RKM:
  - **Visi**: Mewujudkan MA Darun Najah yang berhaluan Ahlussunnah wal Jama'ah sebagai basis lembaga pendidikan IPTEK, keislaman, kebangsaan, kebudayaan, dan kesenian.
  - **Misi**: 5 pilar perbaikan mutu pembelajaran, sarana, ekstrakurikuler, dan amaliyah salafus sholihin.
  - **Tujuan**: Membentuk karakter mandiri, beretika, dan unggul.

### F-05: Showcase Ekstrakurikuler & Program Kejuruan (Life Skill)
- Menampilkan kartu program:
  - **Bidang Prestasi**: Olahraga, Seni Kaligrafi/Hadroh, Karya Tulis Ilmiah.
  - **Keterampilan Hidup (Life Skill)**: Penguasaan TIK, Pemanfaatan Teknologi Tepat Guna, Kewirausahaan Mandiri.
  - **Keagamaan & Karakter**: Pengajian Kitab Kuning, Tahsin & Tahfidz Al-Qur'an, Kepramukaan.

### F-06: Formulir Minat PPDB & Tombol WhatsApp Generator
- **Deskripsi**: Formulir cepat (Nama, Asal Sekolah/Madrasah, Pilihan Jurusan, Nomor WhatsApp Wali).
- **Aksi JS**: Saat formulir disubmit, JavaScript otomatis merangkai pesan teks rapi dan membuka API WhatsApp langsung ke nomor madrasah (`085658973426`).

### F-07: Fasilitas & Pratinjau Master Plan
- Menampilkan denah rencana pengembangan gedung 3 lantai, laboratorium komputer & perpustakaan, aula pertemuan, dan musolla terintegrasi.

---

## 7. Rencana Struktur Berkas (File Architecture)

Untuk implementasi modular atau single-page production ready:

```text
ma-darun-najah-web/
├── index.html          # Markup terstruktur semantik (SEO & Aksesibilitas)
├── assets/
│   ├── css/
│   │   └── style.css   # Reset, Custom Properties, Layout Grid/Flex, Dark/Light Elements
│   ├── js/
│   │   └── main.js     # Mobile toggle, Smooth scroll, WA Generator, Dynamic FAQ
│   └── images/
│       ├── logo.png    # Logo MA Darun Najah (dari aset MA BARU.jpg.jpeg)
│       └── hero-bg.jpg # Foto gedung/kegiatan santri
```

---

## 8. Persyaratan Non-Fungsional (Non-Functional Requirements)

1. **Kecepatan & Kinerja (Performance)**: Skor Google Lighthouse > 90 (Zero heavy JS framework).
2. **Kompatibilitas Responsif**: Optimal pada resolusi 360px (Mobile), 768px (Tablet), hingga 1920px (Desktop).
3. **SEO & Metadata**: Dilengkapi Open Graph meta tag, deskripsi madrasah, dan semantic tags (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`).
4. **Keamanan Data**: Formulir statis tidak menyimpan database rahasia lokal di client; pengiriman diarahkan langsung ke WhatsApp resmi.

---

## 9. Roadmap Pengembangan

| Fase | Durasi | Target Output |
| :--- | :--- | :--- |
| **Fase 1** | Hari 1 | Finalisasi PRD, Wireframe struktur konten, dan penyiapan aset logo. |
| **Fase 2** | Hari 2-3 | Pembuatan struktur `index.html` dan styling CSS visual islami-modern. |
| **Fase 3** | Hari 4 | Penulisan script JS interaktif (PPDB WA generator, navbar drawer, filter tabs). |
| **Fase 4** | Hari 5 | Pengujian lintas perangkat (Chrome mobile, iOS Safari, Desktop) dan deployment di GitHub Pages / Netlify. |