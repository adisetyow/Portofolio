import { Project, Skill, Education, NavLink } from "../types";

export const navLinks: NavLink[] = [
  {
    id: "home",
    title: "Beranda",
  },
  {
    id: "about",
    title: "Tentang Saya",
  },
  {
    id: "projects",
    title: "Proyek",
  },
  {
    id: "skills",
    title: "Keterampilan",
  },
  {
    id: "education",
    title: "Pendidikan",
  },
  {
    id: "contact",
    title: "Kontak",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Aplikasi Pemesanan Tiket Kereta Api",
    description:
      "Aplikasi full-stack berbasis web untuk pemesanan tiket kereta api dengan arsitektur microservices.",
    image: "/assets/img/tiket-kereta.PNG",
    category: "Web Development",
    technologies: ["React.js", "Node.js", "Express.js", "MySQL"],
    github: "https://github.com/adisetyow/BE_FE-Kereta-Api.git",
    link: "",
  },
  {
    id: 2,
    title: "Aplikasi Mobile Tunas Mandiri",
    description:
      "Aplikasi mobile berbasis Flutter untuk komunitas pemuda desa Tunas Mandiri. Saat ini sudah mendukung fitur login dan tampilan dashboard sebagai dasar pengembangan lebih lanjut.",
    image: "/assets/img/mobile-tm.PNG",
    category: "Mobile Development",
    technologies: ["Figma", "User Flow", "Prototyping"],
    github: "https://github.com/adisetyow/Flutter-Login.git",
    link: "",
  },
  {
    id: 3,
    title: "Desain UI/UX Aplikasi Pencarian Tim Olahraga",
    description:
      "Merancang UI/UX aplikasi untuk pencarian tim, penjadwalan sparing, dan pemesanan lapangan, dari konsep hingga prototipe di Figma.",
    image: "/assets/img/figma-olahraga.PNG",
    category: "UI/UX Design",
    technologies: ["Figma", "User Flow", "Prototyping"],
    github: "",
    link: "https://www.figma.com/design/h9eLco6MUO28C8jn6PEOoZ/Design-System?node-id=2190-1005&t=ihEIQF4mMc10XqH9-1",
  },
];

export const skills: Skill[] = [
  // Bahasa & Frontend
  {
    name: "JavaScript",
    icon: "javascript",
    level: 50,
    category: "Bahasa & Frontend",
  },
  {
    name: "HTML",
    icon: "html",
    level: 50,
    category: "Bahasa & Frontend",
  },
  {
    name: "CSS",
    icon: "css",
    level: 50,
    category: "Bahasa & Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwind",
    level: 40,
    category: "Bahasa & Frontend",
  },
  { name: "React.js", icon: "react", level: 40, category: "Bahasa & Frontend" },
  { name: "Python", icon: "python", level: 35, category: "Bahasa & Frontend" },
  { name: "PHP", icon: "php", level: 45, category: "Bahasa & Frontend" },

  // Backend
  { name: "Node.js", icon: "node", level: 35, category: "Backend" },
  { name: "Express.js", icon: "express", level: 30, category: "Backend" },
  { name: "Laravel", icon: "laravel", level: 50, category: "Backend" },
  { name: "MySQL", icon: "mysql", level: 50, category: "Backend" },

  // Alat & Desain
  { name: "Git", icon: "git", level: 40, category: "Alat & Desain" },
  { name: "Figma", icon: "figma", level: 45, category: "Alat & Desain" },
  { name: "Canva", icon: "canva", level: 50, category: "Alat & Desain" },
  { name: "VS Code", icon: "vscode", level: 50, category: "Alat & Desain" },
  {
    name: "Google Colab",
    icon: "googlecolab",
    level: 30,
    category: "Alat & Desain",
  },
];

export const education: Education[] = [
  {
    id: 1,
    institution: "Universitas Kristen Satya Wacana",
    degree: "S1 Teknik Informatika",
    duration: "2022 - Sekarang",
    description: "IPK saat ini: 3.62 / 4.00",
  },
  {
    id: 2,
    institution: "SMA Negeri 1 Tengaran",
    degree: "Jurusan MIPA (Matematika & Ilmu Pengetahuan Alam)",
    duration: "2019 - 2022",
    description: "",
  },
];

export const typingTexts = [
  "Mahasiswa Teknik Informatika",
  "Software Engineer",
  "Frontend Developer",
  "Backend Developer",
  "AI Learner",
  "Problem Solver",
];
