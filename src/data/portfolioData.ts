import type { PortfolioData } from "../types";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Ilya Sandro",
    titles: ["UI/UX Design", "Editor", "Fullstack Dev"],
    bio: "Pengembang web antusias yang senang membangun antarmuka web modern bernuansa futuristik, interaktif, dan berkinerja tinggi. Selalu haus akan eksplorasi teknologi baru di galaksi komputasi modern.",
    aboutLong:
      "Saya seorang pelajar SMK Negeri 4 jurusan Rekayasa Perangkat Lunak (RPL) yang memiliki minat pada Web development dan teknologi informasi. Serta berpengalaman mengembangkan berbagai project website dan mengikuti kegiatan organisasi Paskibra. Saya terbiasa belajar secara mandiri, bekerja sama dalam tim, dan terus mengembangkan kemampuan melalui project maupun pengalaman baru untuk menjadi developer yang kompeten dan profesional.",
    avatarUrl: "/foto formal.jpeg",
    location: "Palembang, Indonesia",
    status: "Siswa RPL SMK Negeri 4 Palembang",
    email: "ilyasandro123@gmail.com",
    phone: "+62 812-3456-7890",
  },
  statistics: [
    {
      label: "Proyek Selesai",
      value: "18",
      suffix: "+",
      description: "Web Apps, Sistem Informasi, & Design",
      icon: "Rocket",
    },
    {
      label: "Tech Stack",
      value: "7",
      suffix: " Kunci",
      description: "Bahasa, Framework, Tools & Design",
      icon: "Code2",
    },
    {
      label: "Prestasi Paskibra",
      value: "6",
      suffix: " Kejuaraan",
      description: "Penghargaan Lomba LTBB & Foker",
      icon: "Sparkles",
    },
    {
      label: "Komitmen & Disiplin",
      value: "100",
      suffix: "%",
      description: "Kedisiplinan & Kerja Sama Tim",
      icon: "GitCommit",
    },
  ],
  education: [
    {
      id: "edu-1",
      institution: "SMK Negeri 4 Palembang",
      degree: "Rekayasa Perangkat Lunak",
      period: "2024 - 2027",
      description:
        "Menempuh pendidikan keahlian Rekayasa Perangkat Lunak (RPL) di SMK Negeri 4 Palembang untuk mendalami pemrograman komputer, basis data, dan pengembangan aplikasi.",
      highlights: [],
    },
  ],
  experiences: [
    {
      id: "exp-1",
      role: "Pengalaman Organisasi Paskibra",
      company: "Paskibra (Pasukan Pengibar Bendera)",
      period: "2024 - Sekarang",
      location: "Palembang, Indonesia",
      description:
        "Aktif sebagai anggota organisasi Paskibra, melatih kepemimpinan, kekompakan tim, kedisiplinan tinggi, serta berhasil mengukir berbagai kejuaraan dalam ajang kompetisi LTBB.",
      technologies: [
        "🏆 Juara 3 Lomba LTBB Putra",
        "🏆 Juara Harapan 1 Foker",
        "🏆 Juara 3 Lomba LTBB Putra",
        "🏆 Juara 3 Lomba LTBB Campuran",
        "🏆 Juara Harapan 3 LTBB Putra",
        "🏆 Juara Harapan 3 LTBB Campuran",
      ],
    },
  ],
  projects: [
    {
      id: "proj-1",
      title: "Pengaduan Makanan",
      category: "Web App",
      description:
        "Sistem aplikasi pengaduan nutrisi dan kualitas makanan berbasis web dengan PHP Native dan MySQL.",
      fullDescription:
        "Aplikasi pengaduan makanan yang memungkinkan pengguna melaporkan masalah nutrisi dan kualitas makanan dengan interface yang user-friendly dan database terpusat.",
      tags: ["PHP Native", "MySQL", "JavaScript", "GitHub"],
      image: "/pengaduan.png",
      demoUrl: "https://github.com/ilya312009",
      githubUrl: "https://github.com/ilya312009",
      featured: true,
    },
    {
      id: "proj-2",
      title: "PPDB Sekolah",
      category: "Web App",
      description:
        "Sistem Penerimaan Peserta Didik Baru (PPDB) online berbasis PHP Native dan MySQL untuk sekolah.",
      fullDescription:
        "Platform PPDB yang mengotomasi proses pendaftaran siswa baru dengan fitur verifikasi data, pengumuman hasil, dan manajemen calon siswa terintegrasi dengan database sekolah.",
      tags: ["PHP Native", "MySQL", "JavaScript", "GitHub"],
      image: "/ppdb.png",
      demoUrl: "https://github.com/ilya312009",
      githubUrl: "https://github.com/ilya312009",
      featured: true,
    },
  ],
  skills: [
    {
      name: "UI/UX Design",
      category: "Design & Creative",
      iconName: "Layout",
      tagline:
        "Perancangan wireframe, prototype interaktif, dan desain antarmuka berbasis user-centered design.",
    },
    {
      name: "JavaScript",
      category: "Programming & Web",
      iconName: "FileCode",
      tagline:
        "Pemrograman logika interaktif antarmuka, DOM manipulation, dan integrasi API dinamis.",
    },
    {
      name: "PHP",
      category: "Programming & Web",
      iconName: "Code",
      tagline:
        "Pengembangan backend server-side, arsitektur OOP, dan logika pemrosesan data.",
    },
    {
      name: "Laravel",
      category: "Framework & Database",
      iconName: "Server",
      tagline:
        "Framework PHP modern untuk pembuatan RESTful API, MVC architecture, Eloquent ORM, dan autentikasi.",
    },
    {
      name: "MySQL",
      category: "Framework & Database",
      iconName: "Database",
      tagline:
        "Manajemen basis data relasional, perancangan skema relasi data, dan optimasi query SQL.",
    },
    {
      name: "Video Editing",
      category: "Design & Creative",
      iconName: "Video",
      tagline:
        "Pengolahan dan penyuntingan video presentasi, motion graphics dasar, serta pembuatan konten multimedia.",
    },
    {
      name: "GitHub",
      category: "Tools & Version Control",
      iconName: "GitBranch",
      tagline:
        "Manajemen kontrol versi kode (Git), kolaborasi repositori team, branching strategy, dan CI/CD dasar.",
    },
  ],
  socials: [
    {
      platform: "GitHub",
      url: "https://github.com/ilya312009",
      username: "github.com/ilya312009",
      icon: "Github",
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/ilysm_r",
      username: "@ilysm_r",
      icon: "Instagram",
    },
  ],
};
