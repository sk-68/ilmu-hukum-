// ==== DATA YANG BISA KAMU EDIT ====

const dosenMatkul = {
  "Hukum Pidana": "Dr. Rudi Santoso",
  "Hukum Perdata": "Ibu Sari Wulandari",
  "Hukum Tata Negara": "Bapak Agus Pratama",
  "Hukum Internasional": "Dr. Dewi Lestari",
  "Hukum Adat": "Ibu Nita Kusuma",
  "Hukum Ekonomi": "Bapak Budi Setiawan",
  "Hukum Lingkungan": "Dr. Maya Sari"
};

const users = {
  // username: { password, role, name, title, greeting, matkul (jika dosen) }
  admin: {
    password: "admin123",
    role: "admin",
    name: "Admin",
    title: ""
  },
  dosen1: {
    password: "dosen123",
    role: "lecturer",
    name: "Rudi Santoso",
    title: "Dr.",
    matkul: ["Hukum Pidana", "Hukum Ekonomi"],
    greeting: "Bapak"
  },
  mahasiswa1: {
    password: "mhs123",
    role: "mahasiswa",
    name: "Andi",
    greeting: ""
  },
  mahasiswa2: {
    password: "mhs123",
    role: "mahasiswa",
    name: "Siti",
    greeting: ""
  },
  mahasiswa3: {
    password: "mhs123",
    role: "mahasiswa",
    name: "Budi",
    greeting: ""
  }
};

// Data absensi format:
// dataAbsensi[username][mataKuliah] = { hadir: [pertemuan_ke], tidakHadir: [pertemuan_ke] }
const dataAbsensi = {
  mahasiswa1: {
    "Hukum Pidana": { hadir: [1,2,3,4,5], tidakHadir: [6,7] },
    "Hukum Perdata": { hadir: [1,2,3], tidakHadir: [4,5,6] },
    "Hukum Tata Negara": { hadir: [1,2], tidakHadir: [3,4,5] },
    "Hukum Internasional": { hadir: [1,2,3,4], tidakHadir: [5,6] },
    "Hukum Adat": { hadir: [1,2,3], tidakHadir: [4,5] },
    "Hukum Ekonomi": { hadir: [1,2,3,4,5,6], tidakHadir: [] },
    "Hukum Lingkungan": { hadir: [1,2,3], tidakHadir: [4,5] }
  },
  mahasiswa2: {
    "Hukum Pidana": { hadir: [1,3,4,5], tidakHadir: [2,6,7] },
    "Hukum Perdata": { hadir: [1,3], tidakHadir: [2,4,5,6] },
    "Hukum Tata Negara": { hadir: [1,2,4], tidakHadir: [3,5] },
    "Hukum Internasional": { hadir: [1,3,4], tidakHadir: [2,5,6] },
    "Hukum Adat": { hadir: [1,2], tidakHadir: [3,4,5] },
    "Hukum Ekonomi": { hadir: [1,2,3,5], tidakHadir: [4,6] },
    "Hukum Lingkungan": { hadir: [1,2], tidakHadir: [3,4,5] }
  },
  mahasiswa3: {
    "Hukum Pidana": { hadir: [1,2,3,5], tidakHadir: [4,6,7] },
    "Hukum Perdata": { hadir: [1,2,3,4], tidakHadir: [5,6] },
    "Hukum Tata Negara": { hadir: [1,2,3,4,5], tidakHadir: [6] },
    "Hukum Internasional": { hadir: [1,2,3], tidakHadir: [4,5,6] },
    "Hukum Adat": { hadir: [1,3,4], tidakHadir: [2,5] },
    "Hukum Ekonomi": { hadir: [1,2,3,4], tidakHadir: [5,6] },
    "Hukum Lingkungan": { hadir: [1,2,4], tidakHadir: [3,5] }
  }
};

// Jadwal kuliah
