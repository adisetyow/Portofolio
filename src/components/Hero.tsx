import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github as GitHub, Linkedin, Mail } from "lucide-react";
import { Link } from "react-scroll";
import { Typed } from "react-typed";
import { typingTexts } from "../data";

const Hero: React.FC = () => {
  const el = useRef<HTMLSpanElement>(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    if (el.current) {
      typed.current = new Typed(el.current, {
        strings: typingTexts,
        typeSpeed: 70,
        backSpeed: 50,
        loop: true,
        cursorChar: "|",
      });
    }

    return () => {
      typed.current?.destroy();
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden flex items-center"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-accent-primary/10 via-background-primary to-background-primary"></div>

      <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <motion.div
            className="md:w-3/5"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent-primary font-medium mb-2">
              Halo, perkenalkan saya
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Adi Setyo Wenang
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-text-secondary mb-6 h-10">
              <span ref={el} className="text-text-accent"></span>
            </h2>
            <p className="text-text-tertiary max-w-lg mb-8 leading-relaxed">
              Mahasiswa Teknik Informatika peminat Software Engineering,
              berfokus pada pengembangan web. Berpengalaman menciptakan solusi
              digital efisien sambil terus mendalami aplikasi mobile dan AI.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-accent-primary hover:bg-accent-secondary text-white font-medium rounded-full transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hubungi Saya
              </motion.a>
              <motion.a
                href="#projects"
                className="px-6 py-3 border border-accent-primary text-accent-primary hover:bg-accent-primary/10 font-medium rounded-full transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Lihat Proyek Saya
              </motion.a>
            </div>

            <div className="flex gap-4">
              <motion.a
                href="https://github.com/adisetyow"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background-tertiary flex items-center justify-center hover:bg-accent-primary transition-colors duration-300"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <GitHub size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/adi-setyo-73239529b/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background-tertiary flex items-center justify-center hover:bg-accent-primary transition-colors duration-300"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:adisetyo.w1112@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background-tertiary flex items-center justify-center hover:bg-accent-primary transition-colors duration-300"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="hidden md:block md:w-2/5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-primary to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
              <div className="relative bg-background-secondary rounded-2xl p-6 h-[450px] overflow-hidden">
                <div className="h-full w-full flex items-center justify-center">
                  <img
                    src="/assets/img/1.JPG"
                    alt="Adi Setyo Wenang"
                    className="rounded-xl object-cover h-full w-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="animate-bounce flex flex-col items-center cursor-pointer"
          >
            <span className="text-text-tertiary text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} className="text-accent-primary" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
