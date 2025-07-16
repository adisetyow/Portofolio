import React from "react";
import { motion } from "framer-motion";
import { education } from "../data";
import { GraduationCap, Calendar } from "lucide-react";

const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="py-24 bg-background-primary relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-glow transform -translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Riwayat <span className="text-accent-primary">Pendidikan</span>
          </h2>
          <div className="w-20 h-1 bg-accent-primary mx-auto rounded-full mb-8"></div>
          <p className="text-text-tertiary max-w-2xl mx-auto">
            Perjalanan akademis dan latar belakang pendidikan yang saya tempuh.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-background-tertiary md:transform md:-translate-x-1/2"></div>

          {education.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
              className={`relative mb-12 md:mb-24 md:w-1/2 ${
                index % 2 === 0 ? "md:ml-auto md:pl-10" : "md:pr-10"
              }`}
            >
              {/* Timeline Circle */}
              <div
                className={`absolute top-0 w-8 h-8 rounded-full bg-accent-primary flex items-center justify-center z-10
                ${
                  index % 2 === 0
                    ? "left-0 -translate-x-1/2 md:left-0 md:-translate-x-1/2"
                    : "left-0 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-1/2"
                }`}
              >
                <GraduationCap size={16} className="text-white" />
              </div>

              <div className="relative bg-background-tertiary rounded-xl p-6 shadow-lg">
                {/* Arrow */}
                <div
                  className={`absolute top-3 w-4 h-4 bg-background-tertiary transform rotate-45
                  ${
                    index % 2 === 0
                      ? "left-0 -translate-x-1/2 md:left-0 md:-translate-x-1/2"
                      : "left-0 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-1/2"
                  }`}
                ></div>

                <div className="flex items-center gap-2 mb-3">
                  <Calendar size={18} className="text-accent-primary" />
                  <span className="text-text-tertiary text-sm">
                    {item.duration}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2">{item.institution}</h3>
                <h4 className="text-lg text-accent-primary mb-3">
                  {item.degree}
                </h4>
                <p className="text-text-tertiary">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
