import React, { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "../data";

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(skills.map((skill) => skill.category))),
  ];

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="py-24 bg-background-secondary relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-purple-glow transform -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-accent-primary">Keterampilan</span> Saya
          </h2>
          <div className="w-20 h-1 bg-accent-primary mx-auto rounded-full mb-8"></div>
          <p className="text-text-tertiary max-w-2xl mx-auto">
            Teknologi, bahasa pemrograman, dan alat yang saya kuasai.
          </p>
        </motion.div>

        {/* Filter Kategori */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-accent-primary text-white"
                  : "bg-background-tertiary text-text-secondary hover:bg-accent-primary/20"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Grid Skill */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.03 }}
              className="bg-background-tertiary rounded-xl p-6 hover:shadow-lg hover:shadow-accent-primary/10 transition-all duration-300 flex flex-col items-center"
            >
              {/* Gambar Logo */}
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <img
                  src={`/assets/skill-logos/${skill.icon.toLowerCase()}.svg`}
                  alt={skill.name}
                  className="h-12 w-12 object-contain"
                  onError={(e) => {
                    // Fallback jika gambar tidak ada
                    (e.target as HTMLImageElement).src =
                      "/assets/skill-logos/default.svg";
                  }}
                />
              </div>

              <h3 className="text-lg font-bold text-center mb-3">
                {skill.name}
              </h3>

              {/* Progress Bar */}
              <div className="w-full mt-auto">
                <div className="mb-2 flex justify-between items-center">
                  <span className="text-text-tertiary text-sm">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full h-2 bg-background-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full rounded-full bg-gradient-to-r from-accent-primary to-purple-600"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
