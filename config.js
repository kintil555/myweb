// =============================================
//   CONFIG - edit di sini tanpa buka index.html
// =============================================
//
//   ╔══════════════════════════════════════╗
//   ║        PANDUAN MARKDOWN BIO          ║
//   ╠══════════════════════════════════════╣
//   ║                                      ║
//   ║  HEADING                             ║
//   ║  # Judul Besar                       ║
//   ║  ## Judul Sedang                     ║
//   ║  ### Judul Kecil                     ║
//   ║                                      ║
//   ║  TEKS                                ║
//   ║  **teks**     → tebal                ║
//   ║  \n           → baris baru           ║
//   ║                                      ║
//   ║  LINK                                ║
//   ║  [teks](https://url.com)             ║
//   ║  → teks biru yang bisa diklik        ║
//   ║                                      ║
//   ║  GAMBAR LOKAL (dari folder /media/)  ║
//   ║  @namafile.png                       ║
//   ║  → 1 gambar di bawah teks            ║
//   ║                                      ║
//   ║  GAMBAR INTERNET                     ║
//   ║  ![alt](https://url/gambar.png)      ║
//   ║  → 1 gambar dari URL                 ║
//   ║                                      ║
//   ║  GAMBAR SEJAJAR (side-by-side)       ║
//   ║  @[foto1.png, foto2.png]             ║
//   ║  @[https://url1, https://url2]       ║
//   ║  @[foto.png, https://url]  ← campur  ║
//   ║  → taruh di baris tersendiri!        ║
//   ║                                      ║
//   ╚══════════════════════════════════════╝

const CONFIG = {

  // ── INFO UTAMA ────────────────────────────
  nama: "Voxel / Clion",

  // ── BIO (dua bahasa, lu isi sendiri teksnya) ──
  bio_id: "# Apa Ini?\nhalo, ini portfolioku, gw sih masih belajar - belajar gitu. Jadi gimn yah pokoknya kadang gw bikin thumbnail klo lagi niat aja, gw belum buka komis, gamabr gambar yg ku buat cuma buat latihan atau ya sekedar gabut.\nbtw gw dulu belajar bikin thumbnail minecarft gitu dari \n[Sparkskye](https://www.youtube.com/@sparkskye) dan [Notsparkskye](https://www.youtube.com/@notsparkskye) \n@[https://yt3.googleusercontent.com/ihLSmDd_g9QbIjsMA0Gkcs3JBQhj32vUIQKOuSljSVbgfRiyGtWZJHqkvXZfi-epotGY1087fQ=s160-c-k-c0x00ffffff-no-rj, https://yt3.googleusercontent.com/vb4k6jpf9XrTTwq2geXRVHtnOt8OQvSMcLGJ-p1sEr3ZV0aOCY-K53JVSRqrLEIaq-cGFCpaiQ=s160-c-k-c0x00ffffff-no-rj]",

  bio_en: "# What is This?\nhey, this is my portfolio. I'm still learning things.\nI sometimes make thumbnails when I feel like it. No commissions yet — stuff I make is just for practice or when I'm bored.\nI learned Minecraft thumbnail-making from\n[Sparkskye](https://www.youtube.com/@sparkskye) and [Notsparkskye](https://www.youtube.com/@notsparkskye)\n@[https://yt3.googleusercontent.com/ihLSmDd_g9QbIjsMA0Gkcs3JBQhj32vUIQKOuSljSVbgfRiyGtWZJHqkvXZfi-epotGY1087fQ=s160-c-k-c0x00ffffff-no-rj, https://yt3.googleusercontent.com/vb4k6jpf9XrTTwq2geXRVHtnOt8OQvSMcLGJ-p1sEr3ZV0aOCY-K53JVSRqrLEIaq-cGFCpaiQ=s160-c-k-c0x00ffffff-no-rj]",

  // ── MEDSOS ───────────────────────────────
  medsos: [
    { label: "YouTube",  url: "https://www.youtube.com/@ItzyCLion",      icon: "<img src='data:image/png;base64,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' style='width:24px;height:24px;object-fit:contain;image-rendering:pixelated'>" },
    { label: "Discord",  url: "https://discord.com/users/voxxel_22",     icon: "<img src='data:image/png;base64,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' style='width:24px;height:24px;object-fit:contain;image-rendering:pixelated'>" },
  ],

  // ── KARYA ────────────────────────────────
  karya: [
    { preview: "img/gk_tw_preview.jpg",     hd: "img/gk_tw_hd.jpg",     judul: "Untitled" },
    { preview: "img/edited_preview.jpg",    hd: "img/edited_hd.jpg",     judul: "Gak tau sih" },
    { preview: "img/backrooms_preview.jpg", hd: "img/backrooms_hd.jpg",  judul: "Endo Backrooms" },
  ],

  // ── SKILL ────────────────────────────────
  skills: [
    "Blender",
    "Minecraft Animation",
    "Thumbnail Design",
  ],

  // ── KONTAK ───────────────────────────────
  discord: "https://discord.com/users/voxxel_22",

  // ── FOOTER ───────────────────────────────
  copyright: "2026 Voxel/Clion",

};

// =============================================
//   TERJEMAHAN (i18n)
//   Deteksi otomatis dari bahasa browser.
//   Tambah bahasa baru dengan kode ISO 639-1.
//   Kalau bahasa tidak ditemukan → pakai 'id'.
// =============================================
const TRANSLATIONS = {

  id: {
    karya:         "Karya",
    skill:         "Skill",
    kontak:        "Kontak",
    sosialMedia:   "Sosial Media",
    view:          "Lihat",
    memuatGambar:  "Memuat gambar...",
  },

  en: {
    karya:         "Works",
    skill:         "Skills",
    kontak:        "Contact",
    sosialMedia:   "Social Media",
    view:          "View",
    memuatGambar:  "Loading image...",
  },

  ja: {
    karya:         "作品",
    skill:         "スキル",
    kontak:        "連絡先",
    sosialMedia:   "ソーシャルメディア",
    view:          "見る",
    memuatGambar:  "読み込み中...",
  },

  zh: {
    karya:         "作品",
    skill:         "技能",
    kontak:        "联系方式",
    sosialMedia:   "社交媒体",
    view:          "查看",
    memuatGambar:  "加载中...",
  },

  ko: {
    karya:         "작품",
    skill:         "스킬",
    kontak:        "연락처",
    sosialMedia:   "소셜 미디어",
    view:          "보기",
    memuatGambar:  "이미지 로딩 중...",
  },

  es: {
    karya:         "Obras",
    skill:         "Habilidades",
    kontak:        "Contacto",
    sosialMedia:   "Redes Sociales",
    view:          "Ver",
    memuatGambar:  "Cargando imagen...",
  },

  fr: {
    karya:         "Œuvres",
    skill:         "Compétences",
    kontak:        "Contact",
    sosialMedia:   "Réseaux Sociaux",
    view:          "Voir",
    memuatGambar:  "Chargement...",
  },

  de: {
    karya:         "Werke",
    skill:         "Fähigkeiten",
    kontak:        "Kontakt",
    sosialMedia:   "Soziale Medien",
    view:          "Ansehen",
    memuatGambar:  "Bild wird geladen...",
  },

  pt: {
    karya:         "Obras",
    skill:         "Habilidades",
    kontak:        "Contato",
    sosialMedia:   "Redes Sociais",
    view:          "Ver",
    memuatGambar:  "Carregando imagem...",
  },

  ru: {
    karya:         "Работы",
    skill:         "Навыки",
    kontak:        "Контакты",
    sosialMedia:   "Соцсети",
    view:          "Смотреть",
    memuatGambar:  "Загрузка...",
  },

  ar: {
    karya:         "أعمال",
    skill:         "مهارات",
    kontak:        "تواصل",
    sosialMedia:   "وسائل التواصل",
    view:          "عرض",
    memuatGambar:  "جارٍ التحميل...",
  },

};

// Deteksi bahasa browser, fallback ke 'id'
const _lang = (navigator.language || 'id').slice(0, 2).toLowerCase();
const T = TRANSLATIONS[_lang] || TRANSLATIONS['id'];

// Pilih bio berdasarkan bahasa:
// - browser Indo  → bio_id
// - lainnya       → bio_en (default fallback)
CONFIG.bio = (_lang === 'id') ? CONFIG.bio_id : CONFIG.bio_en;
