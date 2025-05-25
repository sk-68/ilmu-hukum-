// Data pengguna
  const users = {
    // User admin
    admin: { password: 'admin1', role: 'admin', name: 'Administrator', title: '' },
    
    // User mahasiswa
    david: { password: 'david', role: 'student', name: 'David', title: '' },
    abdu: { password: 'abdu', role: 'student', name: 'Abdu', title: '' },
    angga: { password: 'angga', role: 'student', name: 'Angga', title: '' },
    
    // User dosen
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

  // Data dosen untuk setiap mata kuliah
  const dosenMatkul = {
    "Hukum Administrasi Negara": "Elvina Melinda, S.H., M.H.",
    "Hukum Adat": "Muarifudin, S.E., M.M.",
    "Hukum Islam dan Waris": "Elvina Melinda, S.H., M.H.",
    "Hukum Dagang": "Elvina Melinda, S.H., M.H.",
    "Hukum Internasional": "Dina Ulaya Aziizah, S.E., M.M.",
    "Hukum Agraria": "Agan Sutanto, S.H., M.H.",
    "Hukum Otonomi Daerah": "Kusroh Lailiyah, S.H., M.H.",
    "Hukum Pajak": "Agan Sutanto, S.H., M.H."
  };

  // Fungsi untuk set waktu ke tengah malam
  function setToMidnight(date) {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    return d;
  }

  // Kalender Akademik Semester 3 Ilmu Hukum 2025/2026
  const pertemuanDates = [
    setToMidnight(new Date('2025-09-22')), // Pertemuan 1
    setToMidnight(new Date('2025-09-29')), // Pertemuan 2
    setToMidnight(new Date('2025-10-06')),
    setToMidnight(new Date('2025-10-13')),
    setToMidnight(new Date('2025-10-20')),
    setToMidnight(new Date('2025-10-27')),
    setToMidnight(new Date('2025-11-03')),
    setToMidnight(new Date('2025-11-17')),
    setToMidnight(new Date('2025-11-24')),
    setToMidnight(new Date('2025-12-01')),
    setToMidnight(new Date('2025-12-08')),
    setToMidnight(new Date('2025-12-15')),
    setToMidnight(new Date('2025-12-22')),
    setToMidnight(new Date('2025-12-29')), 
    setToMidnight(new Date('2026-01-05')),
    setToMidnight(new Date('2026-01-19')),
    setToMidnight(new Date('2026-01-26')),
  ];

  const holidays = [
     // Minggu Tenang Ujian Tengah Semester (10-16 November 2025)
    ...Array.from({ length: 7 }, (_, i) => ({
      date: setToMidnight(new Date(2025, 10, 10 + i)), // November 10-16, 2025 (bulan 10 = November)
      name: 'Minggu tenang Ujian Tengah Semester'
    })),
    
    { date: setToMidnight(new Date('2025-12-25')), name: 'Hari Raya Natal' },
    { date: setToMidnight(new Date('2026-01-01')), name: 'Tahun Baru 2026 Masehi' },
    
    // Minggu Tenang Kedua (12-18 Januari 2026)
    ...Array.from({ length: 7 }, (_, i) => ({
      date: setToMidnight(new Date(2026, 0, 12 + i)), // Januari 12-18, 2026 (bulan 0 = Januari)
      name: 'Minggu tenang Ujian Akhir Semester'
    })),
    { date: setToMidnight(new Date('2025-05-29')), name: 'Kenaikan Isa Almasih' },
    { date: setToMidnight(new Date('2025-06-01')), name: 'Hari Lahir Pancasila' },
    { date: setToMidnight(new Date('2025-06-06')), name: 'Hari Raya Idul Adha' },
    { date: setToMidnight(new Date('2025-06-27')), name: 'Tahun Baru Islam' }
  ];

  const specialWeeks = {
     8: {
      startDate: setToMidnight(new Date('2025-11-17')),
      endDate: setToMidnight(new Date('2025-11-21')),
      name: 'Ujian Tengah Semester'
    },
    16: {
      startDate: setToMidnight(new Date('2026-01-19')),
      endDate: setToMidnight(new Date('2026-01-22')),
      name: 'Ujian Akhir Semester'
    }
  };

  // Jadwal mata kuliah berdasarkan hari (0=Minggu, 1=Senin, ..., 6=Sabtu) beserta jam
  const jadwalKuliah = {
    1: [ // Senin
      { nama: "Hukum Administrasi Negara", jam: "13:00 - 14:00" },
      { nama: "Hukum Adat", jam: "14:00 - 15:00" }
    ],
    2: [ // Selasa
      { nama: "Hukum Islam dan Waris", jam: "13:00 - 14:00" },
      { nama: "Hukum Dagang", jam: "14:00 - 15:00" }
    ],
    3: [ // Rabu
      { nama: "Hukum Internasional", jam: "08:00 - 10:00" },
      { nama: "Hukum Agraria", jam: "10:00 - 12:00" }
    ],
    4: [ // Kamis
      { nama: "Hukum Otonomi Daerah", jam: "13:30 - 15:30" },
      { nama: "Hukum Pajak", jam: "15:30 - 18:30" }
    ],
    5: [], // Jumat (tidak ada kelas)
    6: [], // Sabtu (tidak ada kelas)
    0: []  // Minggu (tidak ada kelas)
  };

  const semuaMataKuliah = [
    "Hukum Administrasi Negara",
    "Hukum Adat",
    "Hukum Islam dan Waris",
    "Hukum Dagang",
    "Hukum Internasional",
    "Hukum Agraria",
    "Hukum Otonomi Daerah",
    "Hukum Pajak",
  ];

  const dataAbsensi = {
   david: {
      "Hukum Administrasi Negara": { hadir: [], tidakHadir: [] },
      "Hukum Adat": { hadir: [], tidakHadir: [] },
      "Hukum Islam dan Waris": { hadir: [], tidakHadir: [] },
      "Hukum Dagang": { hadir: [], tidakHadir: [] },
      "Hukum Internasional": { hadir: [], tidakHadir: [] },
      "Hukum Agraria": { hadir: [], tidakHadir: [] },
      "Hukum Otonomi Daerah": { hadir: [], tidakHadir: [] },
      "Hukum Pajak": { hadir: [], tidakHadir: [] }
    },
    angga: {
      "Hukum Administrasi Negara": { hadir: [], tidakHadir: [] },
      "Hukum Adat": { hadir: [], tidakHadir: [] },
      "Hukum Islam dan Waris": { hadir: [], tidakHadir: [] },
      "Hukum Dagang": { hadir: [], tidakHadir: [] },
      "Hukum Internasional": { hadir: [], tidakHadir: [] },
      "Hukum Agraria": { hadir: [], tidakHadir: [] },
      "Hukum Otonomi Daerah": { hadir: [], tidakHadir: [] },
      "Hukum Pajak": { hadir: [], tidakHadir: [] }
    },
    abdu: {
      "Hukum Administrasi Negara": { hadir: [], tidakHadir: [] },
      "Hukum Adat": { hadir: [], tidakHadir: [] },
      "Hukum Islam dan Waris": { hadir: [], tidakHadir: [] },
      "Hukum Dagang": { hadir: [], tidakHadir: [] },
      "Hukum Internasional": { hadir: [], tidakHadir: [] },
      "Hukum Agraria": { hadir: [], tidakHadir: [] },
      "Hukum Otonomi Daerah": { hadir: [], tidakHadir: [] },
      "Hukum Pajak": { hadir: [], tidakHadir: [] }
  };

  // Fungsi untuk memeriksa apakah waktu saat ini berada dalam jam kuliah
  function isWaktuKuliah(jamKuliah) {
    const now = new Date();
    const [startTime, endTime] = jamKuliah.split(' - ');
    
    const [startHour, startMinute] = startTime.split(':').map(Number);
    const [endHour, endMinute] = endTime.split(':').map(Number);
    
    const startDate = new Date();
    startDate.setHours(startHour, startMinute, 0, 0);
    
    const endDate = new Date();
    endDate.setHours(endHour, endMinute, 0, 0);
    
    return now >= startDate && now <= endDate;
  }

  // Fungsi untuk memperbarui tanggal dan waktu
  function updateDateTime() {
    const now = new Date();
    const hari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const namaHari = hari[now.getDay()];
    const tanggal = now.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    const jam = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    
    const dateTimeStr = `${namaHari}, ${tanggal} | ${jam}`;
    document.getElementById('datetime').textContent = dateTimeStr;
    
    const pertemuanInfo = hitungPertemuan();
    const infoPertemuanElement = document.getElementById('infoPertemuan');
    infoPertemuanElement.textContent = pertemuanInfo.status;
    
    // Update warna label
    infoPertemuanElement.className = 'info-pertemuan';
    if (pertemuanInfo.labelColor) {
      infoPertemuanElement.classList.add(`label-${pertemuanInfo.labelColor}`);
    }
    
    if(document.getElementById('absensiBox').style.display !== 'none') {
      document.getElementById('datetimeAbsensi').textContent = dateTimeStr;
      const infoPertemuanAbsensiElement = document.getElementById('infoPertemuanAbsensi');
      infoPertemuanAbsensiElement.textContent = pertemuanInfo.status;
      
      // Update warna label
      infoPertemuanAbsensiElement.className = 'info-pertemuan';
      if (pertemuanInfo.labelColor) {
        infoPertemuanAbsensiElement.classList.add(`label-${pertemuanInfo.labelColor}`);
      }
    }
    
    return pertemuanInfo.pertemuan;
  }

  // Fungsi untuk menampilkan jadwal hari ini
  function tampilkanJadwalHariIni() {
    const hariIni = new Date().getDay();
    const matkulHariIni = jadwalKuliah[hariIni];
    const listMatkul = document.getElementById('listMatkul');
    
    listMatkul.innerHTML = '';
    
    if(matkulHariIni.length === 0) {
      listMatkul.innerHTML = '<p>Tidak ada jadwal kuliah hari ini</p>';
    } else {
      matkulHariIni.forEach(matkul => {
        const div = document.createElement('div');
        div.className = 'matkul-item';
        
        const isBerjalan = isWaktuKuliah(matkul.jam);
        
        const jamParts = matkul.jam.split(' ');
        const jamHTML = isBerjalan 
          ? `<span class="jam-berjalan">${jamParts[0]}</span> ${jamParts[1]} <span class="jam-berjalan">${jamParts[2]}</span>`
          : matkul.jam;
        
        div.innerHTML = `
          <strong>${matkul.nama}</strong> (${jamHTML})<br>
          <small>${dosenMatkul[matkul.nama]}</small>
        `;
        
        if (isBerjalan) {
          div.classList.add('sedang-berjalan');
        }
        
        listMatkul.appendChild(div);
      });
    }
  }

  // Fungsi untuk menghitung pertemuan
  function hitungPertemuan() {
    const today = setToMidnight(new Date());

    // Cek libur nasional dulu
    const libur = holidays.find(h => h.date.getTime() === today.getTime());
    if (libur) {
      return {
        pertemuan: null,
        status: `Libur Nasional: ${libur.name}`,
        labelColor: 'hijau'
      };
    }

    // Cek apakah sebelum atau setelah masa kuliah
    if (today < pertemuanDates[0]) {
      return {
        pertemuan: null,
        status: `Belum masuk periode perkuliahan (Mulai ${pertemuanDates[0].toLocaleDateString()})`,
        labelColor: 'merah'
      };
    }

    if (today > pertemuanDates[pertemuanDates.length - 1]) {
      return {
        pertemuan: null,
        status: `Perkuliahan telah berakhir (Sampai ${pertemuanDates[pertemuanDates.length - 1].toLocaleDateString()})`,
        labelColor: 'merah'
      };
    }

    // Cari minggu ke berapa hari ini termasuk
    let mingguKe = null;
    for (let i = pertemuanDates.length - 1; i >= 0; i--) {
      if (today >= pertemuanDates[i]) {
        mingguKe = i + 1;
        break;
      }
    }

    // Cek apakah minggu ini termasuk minggu khusus UTS/UAS
    for (const [nomor, info] of Object.entries(specialWeeks)) {
      if (today >= info.startDate && today <= info.endDate) {
        return {
          pertemuan: parseInt(nomor),
          status: `${info.name} (Minggu ke-${nomor})`,
          labelColor: 'biru'
        };
      }
    }

    // Jika minggu ke tidak ditemukan, berarti bukan hari pertemuan
    if (mingguKe === null) {
      return {
        pertemuan: null,
        status: "Bukan hari perkuliahan",
        labelColor: 'merah'
      };
    }

    // Hari ini termasuk minggu ke-n, tampilkan pertemuan ke-n
    return {
      pertemuan: mingguKe,
      status: `Pertemuan ke-${mingguKe}`,
      labelColor: 'merah'
    };
  }

  // Fungsi Login
  function login() {
    const user = document.getElementById('username').value.trim();
    const pass = document.getElementById('password').value.trim();
    const loginError = document.getElementById('loginError');

    if(users[user.toLowerCase()] && users[user.toLowerCase()].password === pass) {
      loginError.textContent = '';
      showAbsensi(user.toLowerCase());
    } else {
      loginError.textContent = 'Username atau password salah!';
    }
  }

  function logout() {
    document.getElementById('loginBox').style.display = 'block';
    document.getElementById('absensiBox').style.display = 'none';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
  }

  function showAbsensi(user) {
    const currentWeek = updateDateTime();
    document.getElementById('loginBox').style.display = 'none';
    document.getElementById('absensiBox').style.display = 'block';

    const container = document.getElementById('tables');
    container.innerHTML = '';

    const userData = users[user];
    const userRole = userData.role;
    const userName = userData.name;
    const userTitle = userData.title || '';
    const userGreeting = userData.greeting || '';

    // Set welcome message based on role
    document.getElementById('greetingMessage').textContent = `Selamat datang, ${userGreeting} ${userName} ${userTitle}`;
    document.getElementById('welcomeMessage').style.display = 'none';
    document.getElementById('roleInfo').textContent = `Anda login sebagai: ${userRole === 'admin' ? 'Administrator' : userRole === 'lecturer' ? 'Dosen' : 'Mahasiswa'}`;
    
    if (userRole === 'lecturer') {
      document.getElementById('dosenInfo').textContent = `Mata kuliah yang diampu: ${Array.isArray(userData.matkul) ? userData.matkul.join(', ') : userData.matkul}`;
    } else {
      document.getElementById('dosenInfo').textContent = '';
    }

    if (userRole === 'admin') {
      // Tampilan untuk admin - semua data
      semuaMataKuliah.forEach(matkul => {
        const table = document.createElement('table');
        const caption = document.createElement('caption');
        caption.textContent = `${matkul} (Pertemuan ke-${currentWeek})`;
        table.appendChild(caption);

        // Info dosen
        const dosenRow = table.insertRow();
        const dosenCell = dosenRow.insertCell();
        dosenCell.colSpan = 17;
        dosenCell.textContent = `Dosen: ${dosenMatkul[matkul]}`;
        dosenCell.style.textAlign = 'left';
        dosenCell.style.fontStyle = 'italic';

        // Header tabel
        const header = table.insertRow();
        header.insertCell().textContent = 'Nama Mahasiswa';
        for(let p=1; p<=16; p++){
          header.insertCell().textContent = p;
        }

        Object.keys(dataAbsensi).forEach(nama => {
          const row = table.insertRow();
          row.insertCell().textContent = nama.charAt(0).toUpperCase() + nama.slice(1);

          const hadirArr = dataAbsensi[nama][matkul]?.hadir || [];
          const tidakHadirArr = dataAbsensi[nama][matkul]?.tidakHadir || [];

          for(let p=1; p<=16; p++){
            const cell = row.insertCell();
            if(hadirArr.includes(p)){
              cell.textContent = "✔️";
            } else if(tidakHadirArr.includes(p)){
              cell.textContent = "❌";
            } else {
              cell.textContent = "";
            }
          }
        });

        container.appendChild(table);
      });
    } else if (userRole === 'lecturer') {
      // Tampilan untuk dosen - hanya matkul yang diampu
      const matkulDosen = Array.isArray(userData.matkul) ? userData.matkul : [userData.matkul];
      
      matkulDosen.forEach(matkul => {
        const table = document.createElement('table');
        const caption = document.createElement('caption');
        caption.textContent = `${matkul} (Pertemuan ke-${currentWeek})`;
        table.appendChild(caption);

        // Header tabel
        const header = table.insertRow();
        header.insertCell().textContent = 'Nama Mahasiswa';
        for(let p=1; p<=16; p++){
          header.insertCell().textContent = p;
        }

        Object.keys(dataAbsensi).forEach(nama => {
          const row = table.insertRow();
          row.insertCell().textContent = nama.charAt(0).toUpperCase() + nama.slice(1);

          const hadirArr = dataAbsensi[nama][matkul]?.hadir || [];
          const tidakHadirArr = dataAbsensi[nama][matkul]?.tidakHadir || [];

          for(let p=1; p<=16; p++){
            const cell = row.insertCell();
            if(hadirArr.includes(p)){
              cell.textContent = "✔️";
            } else if(tidakHadirArr.includes(p)){
              cell.textContent = "❌";
            } else {
              cell.textContent = "";
            }
          }
        });

        container.appendChild(table);
      });
    } else {
      // Tampilan untuk mahasiswa - hanya data dirinya sendiri
      const hariIni = new Date().getDay();
      const matkulHariIni = jadwalKuliah[hariIni].map(m => m.nama);
      
      const mataKuliahYangDitampilkan = matkulHariIni.length > 0 ? matkulHariIni : semuaMataKuliah;

      if (matkulHariIni.length === 0) {
        const info = document.createElement('p');
        info.textContent = "Hari ini tidak ada jadwal kuliah. Menampilkan semua mata kuliah.";
        container.appendChild(info);
      }

      mataKuliahYangDitampilkan.forEach(matkul => {
        const table = document.createElement('table');
        const caption = document.createElement('caption');
        caption.textContent = `${matkul} (Pertemuan ke-${currentWeek})`;
        table.appendChild(caption);

        // Info dosen
        const dosenRow = table.insertRow();
        const dosenCell = dosenRow.insertCell();
        dosenCell.colSpan = 17;
        dosenCell.textContent = `Dosen: ${dosenMatkul[matkul]}`;
        dosenCell.style.textAlign = 'left';
        dosenCell.style.fontStyle = 'italic';

        // Header tabel
        const header = table.insertRow();
        header.insertCell().textContent = 'Pertemuan';
        for(let p=1; p<=16; p++){
          header.insertCell().textContent = p;
        }

        const row = table.insertRow();
        row.insertCell().textContent = 'Kehadiran';

        const hadirArr = dataAbsensi[user][matkul]?.hadir || [];
        const tidakHadirArr = dataAbsensi[user][matkul]?.tidakHadir || [];

        for(let p=1; p<=16; p++){
          const cell = row.insertCell();
          if(hadirArr.includes(p)){
            cell.textContent = "✔️";
          } else if(tidakHadirArr.includes(p)){
            cell.textContent = "❌";
          } else {
            cell.textContent = "";
          }
        }

        container.appendChild(table);
      });
    }
  }

  // Inisialisasi
  setInterval(updateDateTime, 1000);
  updateDateTime();
  tampilkanJadwalHariIni();
  setInterval(tampilkanJadwalHariIni, 60000);
