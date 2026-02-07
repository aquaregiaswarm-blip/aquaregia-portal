"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Dashboard from "@/components/Dashboard";

export default function CatalystConcept() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (showDashboard) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Dashboard variant="glass" />
      </motion.div>
    );
  }

  return (
    <main 
      className="min-h-screen flex flex-col items-center justify-center cursor-pointer relative overflow-hidden"
      onClick={() => setShowDashboard(true)}
    >
      {/* Ambient background glow */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(0, 206, 209, 0.1) 0%, transparent 50%)`,
        }}
      />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-aqua-400/30"
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Main Symbol */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative"
        style={{
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
        }}
      >
        {/* Outer glow ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            width: 300,
            height: 300,
            left: -50,
            top: -50,
            background: "radial-gradient(circle, rgba(0, 206, 209, 0.2) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* The Symbol */}
        <motion.div
          className="text-[200px] text-aqua-400 select-none relative z-10"
          animate={{
            textShadow: [
              "0 0 20px rgba(0, 206, 209, 0.5), 0 0 40px rgba(0, 206, 209, 0.3)",
              "0 0 40px rgba(0, 206, 209, 0.8), 0 0 80px rgba(0, 206, 209, 0.5)",
              "0 0 20px rgba(0, 206, 209, 0.5), 0 0 40px rgba(0, 206, 209, 0.3)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.1,
            textShadow: "0 0 60px rgba(0, 206, 209, 1), 0 0 120px rgba(0, 206, 209, 0.8)",
          }}
        >
          🜆
        </motion.div>
      </motion.div>

      {/* Brand name */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-8 text-center"
      >
        <h1 className="text-4xl font-light tracking-[0.3em] text-white/80">
          AQUA REGIA
        </h1>
        <motion.p
          className="text-gray-500 mt-4 text-sm tracking-wider"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          CLICK TO ENTER
        </motion.p>
      </motion.div>

      {/* Back link */}
      <motion.a
        href="/"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-8 text-gray-600 hover:text-aqua-400 transition-colors text-sm"
        onClick={(e) => e.stopPropagation()}
      >
        ← Back to concepts
      </motion.a>
    </main>
  );
}
