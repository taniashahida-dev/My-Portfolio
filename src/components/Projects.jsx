"use client";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="py-20 px-6">
      <h2 className="text-3xl text-center mb-10">PROJECTS</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {[1,2,3].map((p) => (
          <motion.div
            key={p}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 p-6 rounded-xl border border-white/10"
          >
            <h3 className="text-xl">Project {p}</h3>
            <p className="text-gray-400 mt-2">
              Next.js + Tailwind project.
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;