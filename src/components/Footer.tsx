import React from "react";
import { Code, Heart, ArrowUp } from "lucide-react";
import { Link } from "react-scroll";

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-tertiary py-12 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <Code size={24} className="text-accent-primary" />
            <span className="text-xl font-bold tracking-tight">
              Porto<span className="text-accent-primary">folio</span>
            </span>
          </div>

          <div className="flex flex-wrap gap-8 text-text-tertiary">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="hover:text-accent-primary transition-colors duration-300 cursor-pointer"
            >
              Beranda
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="hover:text-accent-primary transition-colors duration-300 cursor-pointer"
            >
              Tentang Saya
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="hover:text-accent-primary transition-colors duration-300 cursor-pointer"
            >
              Proyek
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="hover:text-accent-primary transition-colors duration-300 cursor-pointer"
            >
              Keterampilan
            </Link>
            <Link
              to="education"
              smooth={true}
              duration={500}
              className="hover:text-accent-primary transition-colors duration-300 cursor-pointer"
            >
              Pendidikan
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hover:text-accent-primary transition-colors duration-300 cursor-pointer"
            >
              Kontak
            </Link>
          </div>
        </div>

        <hr className="border-background-secondary mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-tertiary text-sm flex items-center mb-4 md:mb-0">
            © {new Date().getFullYear()} • Dibuat Oeh{" "}
            <Heart
              size={14}
              className="text-accent-primary mx-1"
              fill="currentColor"
            />{" "}
            Adi Setyo Wenang
          </p>

          <Link
            to="home"
            smooth={true}
            duration={500}
            className="w-10 h-10 rounded-full bg-background-secondary flex items-center justify-center hover:bg-accent-primary transition-colors duration-300"
          >
            <ArrowUp size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
