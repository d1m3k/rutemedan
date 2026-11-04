/* BusSumut — interaksi ringan tanpa dependensi */
(function () {
  "use strict";

  /* ---------- Data rute untuk widget cek tarif ---------- */
  var ROUTES = {
    "siantar": {
      label: "Pematang Siantar",
      jarak: "±126–128 km",
      durasi: "1,5–2,5 jam via tol",
      kisaran: "Bus Rp50.000–70.000 · Travel door-to-door s.d. Rp200.000",
      kisaranLabel: "Stanplat Terminal Amplas (2025); Paradep Executive Rp55.000 (redBus)",
      operators: ["Intra", "Sejahtera", "Paradep", "Eldivo Tunas Arta", "KUPJ", "DAMRI"],
      titik: "Terminal Amplas & pool Jl. SM Raja",
      href: "rute-medan-siantar",
      bandara: "Dari Bandara Kualanamu tersedia loket Paradep (Kualanamu–Siantar Rp55.000–80.000, sumber bandara 2026) dan travel Amartha Rp250.000 (2026)."
    },
    "parapat": {
      label: "Parapat (Danau Toba)",
      jarak: "±176 km",
      durasi: "3–4 jam dari Medan kota",
      kisaran: "Bus Rp60.000–80.000 · Travel Rp130.000–250.000",
      kisaranLabel: "Bus AKDP per OneToba (Okt 2026); travel door-to-door Medan kota",
      operators: ["Sejahtera", "Intra", "RAPI", "Paradep", "Nice Trans", "Amartha Wisata"],
      titik: "Terminal Amplas",
      href: "rute-medan-parapat",
      bandara: "Dari Bandara Kualanamu, travel ke Parapat Rp130.000–185.000 (OneToba, 2026), durasi ±3–3,5 jam."
    },
    "berastagi": {
      label: "Berastagi",
      jarak: "±66–70 km",
      durasi: "2–2,5 jam (non-tol)",
      kisaran: "Bus Rp20.000",
      kisaranLabel: "Tarif bus dari loket Jl. Jamin Ginting (Mar 2024)",
      operators: ["Sinabung Jaya", "Sutra", "Borneo", "Murni Express", "Almasar"],
      titik: "Simpang Pos / Padang Bulan, Jl. Jamin Ginting (bukan terminal)",
      href: "rute-medan-berastagi",
      bandara: "Dari Bandara Kualanamu ada pemadu moda Almasar ke Berastagi/Kabanjahe (Kabanjahe Rp40.000–60.000, sumber bandara 2026)."
    },
    "banda-aceh": {
      label: "Banda Aceh",
      jarak: "±591–600 km",
      durasi: "10–12,5 jam (bus malam)",
      kisaran: "Rp200.000–380.000",
      kisaranLabel: "Tergantung kelas: Patas VIP s.d. Double Decker First Class (2025–2026)",
      operators: ["Sempati Star", "Putra Pelangi", "PMTOH", "Kurnia"],
      titik: "Pool Sunggal/Gagak Hitam & Terminal Pinang Baris",
      href: "rute-medan-banda-aceh",
      bandara: null
    },
    "pekanbaru": {
      label: "Pekanbaru",
      jarak: "±650 km",
      durasi: "11–14 jam",
      kisaran: "Rp170.000–350.000",
      kisaranLabel: "Gabungan situs resmi, Traveloka & redBus (2023–2026)",
      operators: ["ALS", "RAPI", "Medan Jaya", "Bintang Utara Putra", "Sempati Star", "Putra Pelangi"],
      titik: "Pool Jl. SM Raja & Terminal Amplas",
      href: "rute-medan-pekanbaru",
      bandara: null
    },
    "padang": {
      label: "Padang",
      jarak: "±750 km via Bukittinggi",
      durasi: "20–28 jam",
      kisaran: "Rp190.000–395.000",
      kisaranLabel: "Gabungan sumber 2026 (ALS, NPM, Putra Pelangi)",
      operators: ["ALS", "NPM", "Putra Pelangi"],
      titik: "Terminal Amplas & pool Jl. SM Raja",
      href: "rute-medan-padang",
      bandara: null
    }
  };

  var TITIK = {
    "medan": "Medan (semua titik naik)",
    "amplas": "Terminal Amplas",
    "smraja": "Pool Jl. SM Raja",
    "pinangbaris": "Terminal Pinang Baris",
    "jamin-ginting": "Simpang Pos, Jl. Jamin Ginting",
    "kualanamu": "Bandara Kualanamu"
  };

  /* ---------- Widget cek kisaran tarif ---------- */
  var btn = document.getElementById("cek-tarif-btn");
  if (btn) {
    btn.addEventListener("click", function () {
      var dari = document.getElementById("dari").value;
      var tujuan = document.getElementById("tujuan").value;
      var r = ROUTES[tujuan];
      var box = document.getElementById("hasil-tarif");
      if (!r || !box) return;
      document.getElementById("ht-rute").textContent = "Medan → " + r.label;
      document.getElementById("ht-dari").textContent =
        "Berangkat dari: " + (TITIK[dari] || "Medan") + " · Titik naik utama: " + r.titik + ".";
      document.getElementById("ht-kisaran").textContent = r.kisaran;
      document.getElementById("ht-kisaran-label").textContent = r.kisaranLabel;
      document.getElementById("ht-durasi").textContent = r.durasi;
      document.getElementById("ht-jarak").textContent = r.jarak;
      document.getElementById("ht-operator").textContent = r.operators.join(", ");
      var note = document.getElementById("ht-bandara");
      if (dari === "kualanamu" && r.bandara) {
        note.textContent = r.bandara;
        note.style.display = "block";
      } else {
        note.style.display = "none";
      }
      var link = document.getElementById("ht-link");
      link.setAttribute("href", r.href);
      box.classList.add("show");
      box.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }

  /* ---------- Filter pencarian rute ---------- */
  var input = document.getElementById("cari-rute");
  if (input) {
    var cards = Array.prototype.slice.call(document.querySelectorAll("[data-route-card]"));
    var empty = document.getElementById("hasil-kosong");
    var apply = function () {
      var q = input.value.trim().toLowerCase();
      var visible = 0;
      cards.forEach(function (c) {
        var hay = (c.getAttribute("data-search") || c.textContent).toLowerCase();
        var show = !q || hay.indexOf(q) !== -1;
        c.style.display = show ? "" : "none";
        if (show) visible++;
      });
      if (empty) empty.style.display = visible === 0 ? "block" : "none";
    };
    input.addEventListener("input", apply);
    var form = document.getElementById("form-cari-rute");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        apply();
        var target = document.getElementById("daftar-rute");
        if (target) target.scrollIntoView({ behavior: "smooth" });
      });
    }
    /* dukung ?q= dari halaman lain */
    var m = /[?&]q=([^&]+)/.exec(window.location.search);
    if (m) { input.value = decodeURIComponent(m[1].replace(/\+/g, " ")); apply(); }
  }

  /* ---------- Navigasi seluler ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
})();
