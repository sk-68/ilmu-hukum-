// ====== DATA PENGGUNA DIPERTAHANKAN DARI FILE ASLI ======
const users = {
  admin: { password: 'admin1', role: 'admin', name: 'Administrator' },
  david: { password: 'david', role: 'student', name: 'David' },
  abdu: { password: 'abdu', role: 'student', name: 'Abdu' },
  angga: { password: 'angga', role: 'student', name: 'Angga' },
  'pak agan': {
    password: '123',
    role: 'lecturer',
    name: 'Agan Sutanto',
    title: 'S.H., M.H.',
    matkul: 'Hukum Perdata',
    greeting: 'Pak'
  },
  'bu elvina': {
    password: '123',
    role: 'lecturer',
    name: 'Elvina Melinda',
    title: 'S.H., M.H.',
    matkul: ['Hukum Pidana', 'Pendidikan Kewarganegaraan', 'Sosiologi dan Ilmu Budaya Dasar'],
    greeting: 'Bu'
  },
  'pak arif': {
    password: '123',
    role: 'lecturer',
    name: 'Muarifudin',
    title: 'S.E., M.M.',
    matkul: 'Pendidikan Agama Islam',
    greeting: 'Pak'
  },
  'bu dina': {
    password: '123',
    role: 'lecturer',
    name: 'Dina Ulaya Aziizah',
    title: 'S.E., M.M.',
    matkul: 'Bahasa Indonesia',
    greeting: 'Bu'
  },
  'bu lia': {
    password: '123',
    role: 'lecturer',
    name: 'Kusroh Lailiyah',
    title: 'S.H., M.H.',
    matkul: 'Hukum Tata Negara',
    greeting: 'Bu'
  }
};

// ==================== FUNGSI LOGIN ====================
function login() {
  const username = document.getElementById("username").value.trim().toLowerCase();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("loginError");

  if (users[username] && users[username].password === password) {
    error.textContent = "";
    showAbsensi(username);
  } else {
    error.textContent = "Username atau password salah!";
  }
}

// ==================== FUNGSI LOGOUT ====================
function logout() {
  document.getElementById("loginBox").style.display = "block";
  document.getElementById("absensiBox").style.display = "none";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}

// ==================== JAM & PERTEMUAN ====================
function updateDateTime() {
  const now = new Date();
  const hari = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
  const tanggal = now.toLocaleDateString('id-ID', {
    day: 'numeric', month: 'long', year: 'numeric'
  });
  const jam = now.toLocaleTimeString('id-ID', {
    hour: '2-digit', minute: '2-digit', second: '2-digit'
  });

  const hariIni = hari[now.getDay()];
  const waktu = `${hariIni}, ${tanggal} | ${jam}`;
  document.getElementById("datetimeAbsensi").textContent = waktu;

  // Misalnya info pertemuan tetap dummy
  document.getElementById("infoPertemuanAbsensi").textContent = "Pertemuan ke-8";
}

// ==================== TAMPILKAN ABSENSI SESUAI ROLE ====================
function showAbsensi(userKey) {
  const user = users[userKey];
  const role = user.role;

  document.getElementById("loginBox").style.display = "none";
  document.getElementById("absensiBox").style.display = "block";

  // Greeting
  const namaLengkap = `${user.greeting || ""} ${user.name} ${user.title || ""}`.trim();
  document.getElementById("greetingMessage").textContent = `Selamat datang, ${namaLengkap}`;
  document.getElementById("roleInfo").textContent = `Anda login sebagai: ${role === 'student' ? 'Mahasiswa' : role === 'lecturer' ? 'Dosen' : 'Admin'}`;
  document.getElementById("dosenInfo").textContent = user.matkul
    ? `Mata kuliah: ${Array.isArray(user.matkul) ? user.matkul.join(", ") : user.matkul}`
    : "";

  // Update waktu setiap detik
  updateDateTime();
  setInterval(updateDateTime, 1000);

  // Tampilkan tabel dummy
  const container = document.getElementById("tables");
  container.innerHTML = `<p>Data absensi ditampilkan di sini sesuai role: <strong>${role}</strong></p>`;
}


