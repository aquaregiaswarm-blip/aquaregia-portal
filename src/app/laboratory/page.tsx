"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Dashboard from "@/components/Dashboard";

// Particle component for the dissolving effect
function Particle({ delay, duration }: { delay: number; duration: number }) {
  const startX = 45 + Math.random() * 10;
  const startY = 40 + Math.random() * 20;
  
  return (
    <motion.div
      className="absolute w-2 h-2 rounded-full"
      style={{
        left: `${startX}%`,
        top: `${startY}%`,
        background: `linear-gradient(135deg, #FFD700, #00CED1)`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: [0, 1, 0.5, 0],
        x: [0, (Math.random() - 0.5) * 200],
        y: [0, Math.random() * 150 + 50],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 2,
        ease: "easeOut",
      }}
    />
  );
}

// Liquid blob component
function LiquidBlob({ size, x, y, delay }: { size: number; x: string; y: string; delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full blur-xl"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        background: "linear-gradient(135deg, rgba(0, 206, 209, 0.4), rgba(0, 139, 139, 0.2))",
      }}
      animate={{
        scale: [1, 1.2, 1],
        x: [0, 30, 0],
        y: [0, -20, 0],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export default function LaboratoryConcept() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleEnter = () => {
    setIsTransitioning(true);
    setTimeout(() => setShowDashboard(true), 1500);
  };

  if (showDashboard) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Dashboard variant="hex" />
      </motion.div>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-void-900">
      {/* Liquid background blobs */}
      <LiquidBlob size={400} x="10%" y="20%" delay={0} />
      <LiquidBlob size={300} x="60%" y="50%" delay={2} />
      <LiquidBlob size={250} x="30%" y="70%" delay={4} />

      {/* Dissolving gold particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <Particle key={i} delay={i * 0.2} duration={3 + Math.random() * 2} />
        ))}
      </div>

      {/* Main content */}
      <AnimatePresence>
        {!isTransitioning && (
          <motion.div
            className="relative z-10 text-center"
            exit={{ 
              scale: 0.8, 
              opacity: 0,
              filter: "blur(20px)",
            }}
            transition={{ duration: 0.8 }}
          >
            {/* Gold ingot being dissolved */}
            <motion.div
              className="relative mb-12"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Gold bar */}
              <motion.div
                className="w-32 h-16 mx-auto relative"
                style={{
                  background: "linear-gradient(135deg, #FFD700, #B8860B, #FFD700)",
                  clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
                  boxShadow: "0 10px 40px rgba(255, 215, 0, 0.3)",
                }}
                animate={{
                  opacity: [1, 0.8, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              
              {/* Dissolution effect underneath */}
              <motion.div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-8"
                style={{
                  background: "linear-gradient(to bottom, rgba(0, 206, 209, 0.6), transparent)",
                  filter: "blur(8px)",
                }}
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scaleX: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-aqua-400 text-glow-aqua">Aqua</span>{" "}
              <span className="text-gold-400" style={{ textShadow: "0 0 20px rgba(255, 215, 0, 0.5)" }}>
                Regia
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-400 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Where noble problems meet their match
            </motion.p>

            {/* Enter button */}
            <motion.button
              onClick={handleEnter}
              className="px-8 py-4 rounded-full border border-aqua-500/50 text-aqua-400 hover:bg-aqua-500/10 transition-all duration-300 relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Enter the Laboratory</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-aqua-500/20 to-gold-400/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            {/* Tagline */}
            <motion.p
              className="mt-12 text-sm text-gray-600 font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              3HCl + HNO₃ → NOCl + 2Cl + 2H₂O
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Transition effect */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Dissolving wave effect */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(circle at 50% 50%, #00CED1, #008B8B, #0a0a0f)",
              }}
              initial={{ scale: 0, borderRadius: "100%" }}
              animate={{ scale: 3, borderRadius: "0%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back link */}
      <motion.a
        href="/"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-8 text-gray-600 hover:text-aqua-400 transition-colors text-sm z-20"
      >
        ← Back to concepts
      </motion.a>
    </main>
  );
}
