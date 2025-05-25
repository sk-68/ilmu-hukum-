document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const roleSelect = document.getElementById("role");
  const usernameInput = document.getElementById("username");

  const dashboards = {
    admin: document.getElementById("admin-dashboard"),
    dosen: document.getElementById("dosen-dashboard"),
    mahasiswa: document.getElementById("mahasiswa-dashboard"),
  };

  const menuItems = document.querySelectorAll(".menu");

  // ========= HANDLE LOGIN =========
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const role = roleSelect.value;
    const username = usernameInput.value.trim();

    if (!role || !username) {
      alert("Silakan isi peran dan username!");
      return;
    }

    document.querySelector(".login-page").style.display = "none";
    dashboards[role].classList.remove("hidden");

    // Set menu aktif pertama
    const firstMenu = dashboards[role].querySelector(".menu");
    if (firstMenu) {
      firstMenu.classList.add("active");
    }

    // Tampilkan halaman pertama
    showPage(role, firstMenu.textContent.toLowerCase().replace(/\s+/g, "-"));
  });

  // ========= HANDLE NAVIGASI SUBMENU =========
  window.showPage = (role, pageId) => {
    const contentPages = dashboards[role].querySelectorAll(".page-content");
    contentPages.forEach((page) => page.classList.add("hidden"));

    const target = dashboards[role].querySelector(`#${role}-${pageId}`);
    if (target) target.classList.remove("hidden");

    const menus = dashboards[role].querySelectorAll(".menu");
    menus.forEach((menu) => menu.classList.remove("active"));
    menus.forEach((menu) => {
      if (
        menu.textContent.toLowerCase().replace(/\s+/g, "-") === pageId
      ) {
        menu.classList.add("active");
      }
    });
  };

  // ========= DATA DUMMY =========
  const mahasiswa = [
    { nama: "Ali", nim: "230101" },
    { nama: "Bunga", nim: "230102" },
    { nama: "Candra", nim: "230103" },
  ];

  const dosen = [
    { nama: "Dr. Rina", matkul: "Hukum Pidana" },
    { nama: "Dr. Bayu", matkul: "Hukum Perdata" },
    { nama: "Dr. Sari", matkul: "Hukum Tata Negara" },
  ];

  const mataKuliah = [
    "Hukum Pidana",
    "Hukum Perdata",
    "Hukum Tata Negara",
    "Hukum Internasional",
    "Etika Profesi Hukum",
    "Sosiologi Hukum",
    "Pengantar Ilmu Hukum",
  ];

  // ========= ISI OTOMATIS DATA DI HALAMAN ADMIN =========
  const mhsContainer = document.getElementById("admin-data-mhs");
  const dosenContainer = document.getElementById("admin-data-dosen");

  const tabelMahasiswa = `
    <table border="1" cellpadding="8" cellspacing="0">
      <thead>
        <tr><th>No</th><th>Nama</th><th>NIM</th></tr>
      </thead>
      <tbody>
        ${mahasiswa
          .map((m, i) => `<tr><td>${i + 1}</td><td>${m.nama}</td><td>${m.nim}</td></tr>`)
          .join("")}
      </tbody>
    </table>
  `;
  mhsContainer.innerHTML += tabelMahasiswa;

  const tabelDosen = `
    <table border="1" cellpadding="8" cellspacing="0">
      <thead>
        <tr><th>No</th><th>Nama Dosen</th><th>Mata Kuliah</th></tr>
      </thead>
      <tbody>
        ${dosen
          .map((d, i) => `<tr><td>${i + 1}</td><td>${d.nama}</td><td>${d.matkul}</td></tr>`)
          .join("")}
      </tbody>
    </table>
  `;
  dosenContainer.innerHTML += tabelDosen;
});

