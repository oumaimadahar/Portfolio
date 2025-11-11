"use client";

import { motion, AnimatePresence } from "framer-motion";
import { certifications } from "@/constants"; // Ton tableau de certifications
import { useState } from "react";

export default function Certifications() {
  const [expandedCards, setExpandedCards] = useState<{ [id: number]: boolean }>({});

  const toggleCard = (id: number) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="Certifications" className="text-white px-6 py-8">
      {/* Titre */}
      <div className="max-w-6xl mx-auto text-center mb-12 px-4 sm:px-6">
        <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Mes{" "}
          </span>
          Certifications
        </h1>
        <p className="text-gray-400 mt-3 text-sm sm:text-base md:text-lg">
          Les certifications que j’ai obtenues au cours de mon parcours
        </p>
      </div>

      {/* Cartes */}
      <div className="flex flex-wrap gap-8 justify-center">
        {certifications.map((certif, index) => {
          const isExpanded = expandedCards[certif.id] || false;

          return (
            <motion.div
              key={certif.id}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition flex flex-col w-full sm:w-[48%] md:w-[30%] text-justify"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={certif.image}
                  alt={certif.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>

              {/* Contenu */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{certif.title}</h3>

                  <p className="text-gray-400 text-sm mb-2 italic">
                    {certif.institution}
                  </p>

                  {/* Description avec animation */}
                  <AnimatePresence>
                    <motion.p
                      className="text-gray-400 text-sm mt-2"
                      initial={{ height: isExpanded ? 0 : "auto", opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {isExpanded
                        ? certif.description
                        : certif.description.length > 120
                        ? certif.description.slice(0, 120) + "..."
                        : certif.description}
                    </motion.p>
                  </AnimatePresence>

                  {certif.description.length > 120 && (
                    <button
                      className="text-white font-bold mt-1"
                      onClick={() => toggleCard(certif.id)}
                    >
                      {isExpanded ? "Réduire" : "Lire la suite"}
                    </button>
                  )}
                </div>

                {/* Lien vers la certification */}
                {certif.link && (
                  <div className="flex justify-end items-center mt-4">
                    <a
                      href={certif.link}
                      target="_blank"
                      className="hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 transition"
                    >
                      🎓 Voir la certification
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
