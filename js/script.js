// script.js FINAL dengan fitur lucu mahasiswa ✨

// === DATA USERS Tetap ===
const users = {
  admin: { password: 'admin1', role: 'admin', name: 'Administrator' },
  david: { password: 'david', role: 'student', name: 'David' },
  abdu: { password: 'abdu', role: 'student', name: 'Abdu' },
  angga: { password: 'angga', role: 'student', name: 'Angga' },
  'pak agan': { password: '123', role: 'lecturer', name: 'Agan Sutanto', title: 'S.H., M.H.', matkul: 'Hukum Perdata', greeting: 'Pak' },
  'bu elvina': { password: '123', role: 'lecturer', name: 'Elvina Melinda', title: 'S.H., M.H.', matkul: ['Hukum Pidana', 'Pendidikan Kewarganegaraan', 'Sosiologi dan Ilmu Budaya Dasar'], greeting: 'Bu' },
  'pak arif': { password: '123', role: 'lecturer', name: 'Muarifudin', title: 'S.E., M.M.', matkul: 'Pendidikan Agama Islam', greeting: 'Pak' },
  'bu dina': { password: '123', role: 'lecturer', name: 'Dina Ulaya Aziizah', title: 'S.E., M.M.', matkul: 'Bahasa Indonesia', greeting: 'Bu' },
  'bu lia': { password: '123', role: 'lecturer', name: 'Kusroh Lailiyah', title: 'S.H., M.H.', matkul: 'Hukum Tata Negara', greeting: 'Bu' }
};

// ========== LOGIN ============
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

function logout() {
  document.getElementById("loginBox").style.display = "block";
  document.getElementById("absensiBox").style.display = "none";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}

function updateDateTime() {
  const now = new Date();
  const hari = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
  const tanggal = now.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
  const jam = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const hariIni = hari[now.getDay()];
  const waktu = `${hariIni}, ${tanggal} | ${jam}`;
  document.getElementById("datetimeAbsensi").textContent = waktu;
  document.getElementById("infoPertemuanAbsensi").textContent = "Pertemuan ke-8"; // Dummy pertemuan
}

// ========== SHOW ABSENSI DASHBOARD ============
function showAbsensi(userKey) {
  const user = users[userKey];
  const role = user.role;

  document.getElementById("loginBox").style.display = "none";
  document.getElementById("absensiBox").style.display = "block";

  const namaLengkap = `${user.greeting || ''} ${user.name} ${user.title || ''}`.trim();
  document.getElementById("greetingMessage").textContent = `Selamat datang, ${namaLengkap}`;
  document.getElementById("roleInfo").textContent = `Anda login sebagai: ${role === 'student' ? 'Mahasiswa' : role === 'lecturer' ? 'Dosen' : 'Admin'}`;
  document.getElementById("dosenInfo").textContent = user.matkul ? `Mata kuliah: ${Array.isArray(user.matkul) ? user.matkul.join(', ') : user.matkul}` : "";

  updateDateTime();
  setInterval(updateDateTime, 1000);

  const container = document.getElementById("tables");
  container.innerHTML = "";

  if (role === 'student') {
    const absenBox = document.createElement("div");
    const btn = document.createElement("button");
    btn.textContent = "📌 Absen Sekarang";
    btn.style.marginTop = "20px";

    const komentarLucu = [
      "Hadir bukan berarti paham. Tapi tidak hadir pasti ketinggalan 😅",
      "Absen dulu, mikir belakangan!",
      "Yang penting hadir, soal jodoh belakangan!",
      "Masuk kelas, keluar dengan beban 😵",
      "Absensi ini lebih penting dari nilai kadang 😆",
      "Hadir demi IPK, bukan karena cinta 😭"
    ];

    btn.onclick = () => {
      const now = new Date();
      const hari = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
      const tanggal = now.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
      const hariIni = hari[now.getDay()];
      const komentar = komentarLucu[Math.floor(Math.random() * komentarLucu.length)];

      absenBox.innerHTML = `
        <p>✅ Absensi berhasil!</p>
        <p><strong>${hariIni}, ${tanggal}</strong> - Pertemuan ke-8</p>
        <p><em>${komentar}</em></p>
      `;
    };

    container.appendChild(btn);
    container.appendChild(absenBox);
  } else {
    container.innerHTML = `<p>Data absensi ditampilkan di sini untuk role: <strong>${role}</strong></p>`;
  }
}



