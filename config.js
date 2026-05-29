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
    { label: "YouTube",  url: "https://www.youtube.com/@ItzyCLion",      icon: "<img src='data:image/png;base64,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' style='width:24px;height:24px;image-rendering:pixelated'>" },
    { label: "Discord",  url: "https://discord.com/users/voxxel_22",     icon: "<img src='data:image/png;base64,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' style='width:24px;height:24px;image-rendering:pixelated'>" },
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
