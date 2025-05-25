// script.js
// DATA DAN FUNGSI ASLI + FITUR BARU

// Data Pengguna (Tetap sama)
const users = { /* ... data pengguna original ... */ };

// Kalender Akademik (Tetap sama)
const pertemuanDates = [/* ... data tanggal pertemuan ... */];
const holidays = [/* ... data liburan ... */];
const specialWeeks = {/* ... minggu khusus ... */};

// Jadwal dan Absensi (Tetap sama)
const jadwalKuliah = {/* ... jadwal original ... */};
const semuaMataKuliah = [/* ... mata kuliah ... */];
const dataAbsensi = {/* ... data absensi original ... */};

// Variabel Global
let currentUser = null;

// **************** FUNGSI ASLI (TETAP DIPERTAHANKAN) **************** //
function setToMidnight(date) { /* ... */ }

function isWaktuKuliah(jamKuliah) { /* ... */ }

function updateDateTime() { /* ... */ }

function tampilkanJadwalHariIni() { /* ... */ }

function hitungPertemuan() { /* ... */ }

// **************** FITUR BARU + MODIFIKASI **************** //

// Fungsi Login yang Dimodifikasi
function login() {
  const username = document.getElementById('username').value.trim().toLowerCase();
  const password = document.getElementById('password').value.trim();
  
  if(users[username] && users[username].password === password) {
    currentUser = username;
    document.getElementById('loginBox').style.display = 'none';
    document.getElementById('absensiBox').style.display = 'block';
    
    // Tampilkan info user
    const user = users[username];
    document.getElementById('greetingMessage').textContent = 
      `${user.greeting ? user.greeting + ' ' : ''}${user.name} ${user.title}`;
    document.getElementById('roleInfo').textContent = 
      `Role: ${user.role === 'admin' ? 'Administrator' : user.role === 'lecturer' ? 'Dosen' : 'Mahasiswa'}`;
    
    showRoleDashboard(user.role);
    updateDateTime(); // Pertahankan update waktu
  } else {
    document.getElementById('loginError').textContent = 'Username atau password salah!';
  }
}

// Fungsi Navigasi Berdasarkan Role
function showRoleDashboard(role) {
  const navHTML = {
    admin: `
      <button class="nav-btn" onclick="showUserManagement()">Kelola Pengguna</button>
      <button class="nav-btn" onclick="showCalendarManagement()">Kalender Akademik</button>
      <button class="nav-btn" onclick="showStatistics()">Statistik</button>
      <button class="nav-btn" onclick="showBackupPanel()">Backup Data</button>
    `,
    lecturer: `
      <button class="nav-btn" onclick="showAttendanceEditor()">Edit Absensi</button>
      <button class="nav-btn" onclick="showCourseSchedule()">Jadwal Mengajar</button>
      <button class="nav-btn" onclick="showLecturerStats()">Statistik</button>
    `,
    student: `
      <button class="nav-btn" onclick="showAbsenPanel()">Absen Sekarang</button>
      <button class="nav-btn" onclick="showStudentStats()">Statistik Saya</button>
    `
  };
  
  document.getElementById('roleNavigation').innerHTML = navHTML[role];
  document.getElementById('mainContent').innerHTML = '';
  
  // Tampilkan dashboard default
  if(role === 'admin') showUserManagement();
  else if(role === 'lecturer') showAttendanceEditor();
  else showAbsenPanel();
}

// **************** FITUR ADMIN **************** //
function showUserManagement() { /* ... implementasi sebelumnya ... */ }
function addUser() { /* ... implementasi sebelumnya ... */ }
function refreshUserList() { /* ... implementasi sebelumnya ... */ }

// **************** FITUR DOSEN **************** //
function showAttendanceEditor() {
  const content = `
    <div class="admin-panel">
      <h3>Edit Absensi Manual</h3>
      <div class="form-group">
        ${generateMatkulOptions()}
        <select id="selectPertemuan">${generatePertemuanOptions()}</select>
      </div>
      <div id="attendanceTable">${generateAttendanceTable()}</div>
    </div>
  `;
  document.getElementById('mainContent').innerHTML = content;
}

function generateMatkulOptions() {
  const user = users[currentUser];
  const matkul = Array.isArray(user.matkul) ? user.matkul : [user.matkul];
  return matkul.map(m => `<option value="${m}">${m}</option>`).join('');
}

// **************** FITUR MAHASISWA **************** //
function showAbsenPanel() {
  const messages = [
    "Yuk absen dulu! 🎉",
    "Jangan lupa absen hari ini! 📅",
    "Absen sekarang dapat bonus semangat! 💪"
  ];
  
  const html = `
    <div class="absen-container">
      <h2>${messages[Math.floor(Math.random() * messages.length)]}</h2>
      <button class="absen-btn" onclick="submitAttendance()">ABSEN SEKARANG</button>
      <div class="attendance-stats">
        Persentase Kehadiran: ${calculateAttendance(currentUser)}%
      </div>
    </div>
  `;
  document.getElementById('mainContent').innerHTML = html;
}

function calculateAttendance(user) {
  const totalPertemuan = 16; // Total pertemuan per matkul
  let totalHadir = 0;
  
  semuaMataKuliah.forEach(matkul => {
    totalHadir += dataAbsensi[user][matkul].hadir.length;
  });
  
  return ((totalHadir / (semuaMataKuliah.length * totalPertemuan)) * 100).toFixed(1);
}

// **************** FUNGSI UMUM **************** //
function logout() {
  document.getElementById('loginBox').style.display = 'block';
  document.getElementById('absensiBox').style.display = 'none';
  currentUser = null;
}

// Inisialisasi
setInterval(updateDateTime, 1000);
setInterval(tampilkanJadwalHariIni, 60000);
updateDateTime();
tampilkanJadwalHariIni();

