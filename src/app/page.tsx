"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const concepts = [
    {
      id: "catalyst",
      name: "The Catalyst",
      description: "Minimalist power move. A single symbol that transforms.",
      gradient: "from-aqua-500 to-aqua-700",
    },
    {
      id: "laboratory",
      name: "The Laboratory", 
      description: "Liquid dissolving gold. Scientific and alive.",
      gradient: "from-gold-400 to-aqua-500",
    },
    {
      id: "neural",
      name: "Neural Alchemy",
      description: "AI neural networks meet ancient chemistry.",
      gradient: "from-purple-500 to-aqua-500",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-6xl font-bold mb-4 text-glow-aqua">
          <span className="text-aqua-400">Aqua</span>{" "}
          <span className="text-gold-400">Regia</span>
        </h1>
        <p className="text-xl text-gray-400">Portal Concept Preview</p>
        <p className="text-sm text-gray-500 mt-2">Click a concept to preview</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        {concepts.map((concept, index) => (
          <motion.div
            key={concept.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={`/${concept.id}`}>
              <div className="glass rounded-2xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer group h-full">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${concept.gradient} mb-6 group-hover:scale-110 transition-transform`} />
                <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-aqua-400 transition-colors">
                  {concept.name}
                </h2>
                <p className="text-gray-400 text-sm">
                  {concept.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-16 text-gray-500 text-sm"
      >
        Each concept includes landing page → dashboard transition
      </motion.p>
    </main>
  );
}
