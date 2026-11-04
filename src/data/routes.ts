/* Data widget cek tarif & pencarian rute — dipindahkan apa adanya dari
   skrip situs native sebelumnya (assets/app.js), kini satu sumber data. */

export interface RouteInfo {
  label: string;
  jarak: string;
  durasi: string;
  kisaran: string;
  kisaranLabel: string;
  operators: string[];
  titik: string;
  href: string;
  bandara: string | null;
}

export const ROUTES: Record<string, RouteInfo> = {
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

export const TITIK: Record<string, string> = {
  "medan": "Medan (semua titik naik)",
  "amplas": "Terminal Amplas",
  "smraja": "Pool Jl. SM Raja",
  "pinangbaris": "Terminal Pinang Baris",
  "jamin-ginting": "Simpang Pos, Jl. Jamin Ginting",
  "kualanamu": "Bandara Kualanamu"
};
