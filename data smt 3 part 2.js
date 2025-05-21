  // Fungsi untuk menghitung pertemuan (Updated Version)
  function hitungPertemuan() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Format tanggal untuk perbandingan
    const formatDate = (date) => date.toISOString().split('T')[0];
    const todayStr = formatDate(today);
    
    // Daftar nama bulan untuk formatting
    const namaBulan = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
    
    // 1. Cek hari libur nasional
    const holidayDates = {
      '2025-04-18': 'Jumat Agung',
      '2025-05-01': 'Hari Buruh',
      '2025-05-29': 'Kenaikan Isa Almasih',
      '2025-06-06': 'Libur Idul Adha 1446 H',
      '2025-06-01': 'Hari Lahir Pancasila'
    };
    
    if (holidayDates[todayStr]) {
      return { 
        pertemuan: -1, 
        status: holidayDates[todayStr]
      };
    }
    
    // 2. Cek periode libur Idul Fitri
    if (today >= kalenderAkademik.liburIdulFitriStart && today <= kalenderAkademik.liburIdulFitriEnd) {
      return { 
        pertemuan: -1, 
        status: "Libur Idul Fitri (24 Mar - 6 Apr 2025)" 
      };
    }
    
    // 3. Cek periode UTS
    if (today >= kalenderAkademik.utsStart && today <= kalenderAkademik.utsEnd) {
      return { 
        pertemuan: -2, 
        status: "Ujian Tengah Semester (22-28 Mei 2025)" 
      };
    }
    
    // 4. Cek libur setelah UTS
    if (today >= kalenderAkademik.liburPostUtsStart && today <= kalenderAkademik.liburPostUtsEnd) {
      return { 
        pertemuan: -1, 
        status: "Libur setelah UTS (28 Mei - 1 Jun 2025)" 
      };
    }
    
    // 5. Cek periode UAS
    if (today >= kalenderAkademik.uasStart && today <= kalenderAkademik.uasEnd) {
      return { 
        pertemuan: -3, 
        status: "Ujian Akhir Semester (21-27 Jul 2025)" 
      };
    }
    
    // 6. Sebelum perkuliahan dimulai
    if (today < kalenderAkademik.pertemuan1Start) {
      return { 
        pertemuan: 0, 
        status: "Belum masuk periode perkuliahan (Mulai 17 Mar 2025)" 
      };
    }
    
    // 7. Setelah perkuliahan berakhir
    if (today > kalenderAkademik.uasEnd) {
      return { 
        pertemuan: 17, 
        status: "Perkuliahan telah berakhir" 
      };
    }
    
    // 8. Cek pertemuan berdasarkan pertemuanDates
    for (let week = 1; week <= 16; week++) {
      const range = kalenderAkademik.pertemuanDates[week];
      if (range && today >= range.start && today <= range.end) {
        const startDate = range.start.getDate();
        const endDate = range.end.getDate();
        const month = namaBulan[range.start.getMonth()];
        return {
          pertemuan: week,
          status: `Pertemuan ke-${week} (${startDate}-${endDate} ${month})`
        };
      }
    }
    
    // 9. Jika tidak masuk dalam kondisi di atas (periode antar pertemuan)
    return { 
      pertemuan: 0, 
      status: "Tidak ada jadwal perkuliahan hari ini" 
    };
  }

  // Inisialisasi
  setInterval(updateDateTime, 1000);
  updateDateTime();
  tampilkanJadwalHariIni();
  setInterval(tampilkanJadwalHariIni, 60000);

  // Fungsi bantu untuk menambahkan event listener pada input password
  document.getElementById('password').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      login();
    }
  });
</script>

</body>
</html>