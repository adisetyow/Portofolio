import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Server, Lightbulb } from "lucide-react";

const About: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="about"
      className="py-24 bg-background-secondary relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-glow transform -translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tentang <span className="text-accent-primary">Saya</span>
          </h2>
          <div className="w-20 h-1 bg-accent-primary mx-auto rounded-full mb-8"></div>
          <p className="text-text-tertiary max-w-2xl mx-auto">
            Kenali saya lebih jauh, latar belakang saya, dan apa yang mendorong
            semangat saya dalam Software Engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-background-tertiary p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Siapa Saya?</h3>
              <p className="text-text-secondary mb-4 leading-relaxed">
                Saya adalah seorang mahasiswa Teknik Informatika yang
                berdedikasi dan bersemangat dalam menciptakan solusi perangkat
                lunak yang inovatif. Perjalanan saya di dunia teknologi dimulai
                dari ketertarikan mendalam pada bagaimana kode dapat mengubah
                ide menjadi kenyataan.
              </p>
              <p className="text-text-secondary mb-4 leading-relaxed">
                Dengan spesialisasi di bidang Software Engineering, saya
                terus-menerus mempelajari teknologi dan metodologi baru untuk
                meningkatkan keterampilan saya dan tetap relevan di industri
                yang berkembang pesat ini. Tujuan saya adalah memanfaatkan
                teknologi untuk menciptakan solusi bermakna yang memberikan
                dampak positif.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: <Code size={36} className="text-accent-primary mb-4" />,
                title: "Web Development",
                description:
                  "Menciptakan aplikasi web yang responsif dan interaktif menggunakan kerangka kerja dan teknologi modern.",
              },
              {
                icon: (
                  <Database size={36} className="text-accent-primary mb-4" />
                ),
                title: "Data Engineering",
                description:
                  "Merancang skema database yang efisien dan mengelola data menggunakan sistem manajemen basis data relasional.",
              },
              {
                icon: <Server size={36} className="text-accent-primary mb-4" />,
                title: "Backend Systems",
                description:
                  "Membangun aplikasi sisi server yang kuat dengan arsitektur RESTful API untuk komunikasi antar sistem.",
              },
              {
                icon: (
                  <Lightbulb size={36} className="text-accent-primary mb-4" />
                ),
                title: "AI & ML",
                description:
                  "Mengimplementasikan fitur-fitur yang didukung oleh AI dan terus mendalami algoritma pembelajaran mesin.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="bg-background-tertiary p-6 rounded-xl hover:shadow-lg hover:shadow-accent-primary/10 transition-all duration-300"
              >
                <div className="text-center">
                  {item.icon}
                  <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                  <p className="text-text-tertiary text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
