"use client"; // si tu utilises Next.js App Router

import { motion } from "framer-motion";
import { projects} from "@/constants"; 

export default function Projects() {
  return (
     
    <section  id="Projects"className="min-h-screen  text-white px-6 py-16">
      <div className="max-w-6xl mx-auto text-center mb-12">
         <h1 className="font-semibold text-white text-[50px]">
                 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                        {" "}
                        My{" "}
                    </span>
                     Projects
                   
                </h1>
        <p className="text-gray-400 mt-3">Some of the work I’ve done recently</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>

            {/* Contenu */}
            <div className="p-6 flex flex-col justify-between h-60">
              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-gray-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-400 text-sm mt-2">
                  {project.description}
                </p>
              </div>

              {/* Liens */}
              <div className="flex justify-between items-center mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  className="hover:text-green-400 transition"
                >
                  🔗 Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  className="hover:text-blue-400 transition"
                >
                  🌍 Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
