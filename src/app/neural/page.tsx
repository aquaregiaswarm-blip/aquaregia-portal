"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Dashboard from "@/components/Dashboard";

// Neural node component
function NeuralNode({ x, y, delay, size = 8, isCore = false }: { 
  x: number; 
  y: number; 
  delay: number;
  size?: number;
  isCore?: boolean;
}) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        background: isCore 
          ? "linear-gradient(135deg, #00CED1, #008B8B)" 
          : "rgba(0, 206, 209, 0.6)",
        boxShadow: isCore 
          ? "0 0 20px rgba(0, 206, 209, 0.8)" 
          : "0 0 10px rgba(0, 206, 209, 0.4)",
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: [1, 1.2, 1],
        opacity: [0.6, 1, 0.6],
      }}
      transition={{
        delay,
        duration: 2 + Math.random(),
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

// Connection line component (SVG)
function NeuralConnections() {
  const connections = [
    { x1: 50, y1: 50, x2: 30, y2: 30 },
    { x1: 50, y1: 50, x2: 70, y2: 25 },
    { x1: 50, y1: 50, x2: 25, y2: 60 },
    { x1: 50, y1: 50, x2: 75, y2: 55 },
    { x1: 50, y1: 50, x2: 40, y2: 75 },
    { x1: 50, y1: 50, x2: 65, y2: 80 },
    { x1: 30, y1: 30, x2: 15, y2: 20 },
    { x1: 70, y1: 25, x2: 85, y2: 15 },
    { x1: 25, y1: 60, x2: 10, y2: 70 },
    { x1: 75, y1: 55, x2: 90, y2: 60 },
  ];

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none">
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00CED1" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#FFD700" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#00CED1" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      {connections.map((conn, i) => (
        <motion.line
          key={i}
          x1={`${conn.x1}%`}
          y1={`${conn.y1}%`}
          x2={`${conn.x2}%`}
          y2={`${conn.y2}%`}
          stroke="url(#lineGradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            pathLength: { delay: i * 0.1, duration: 1 },
            opacity: { delay: i * 0.1 + 1, duration: 2, repeat: Infinity },
          }}
        />
      ))}
    </svg>
  );
}

// Data pulse traveling along connections
function DataPulse({ startX, startY, endX, endY, delay }: {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  delay: number;
}) {
  return (
    <motion.div
      className="absolute w-2 h-2 rounded-full bg-gold-400"
      style={{
        boxShadow: "0 0 10px #FFD700, 0 0 20px #FFD700",
      }}
      initial={{ 
        left: `${startX}%`, 
        top: `${startY}%`,
        opacity: 0,
        scale: 0,
      }}
      animate={{
        left: [`${startX}%`, `${endX}%`],
        top: [`${startY}%`, `${endY}%`],
        opacity: [0, 1, 1, 0],
        scale: [0, 1, 1, 0],
      }}
      transition={{
        delay,
        duration: 1.5,
        repeat: Infinity,
        repeatDelay: 3 + Math.random() * 2,
        ease: "easeInOut",
      }}
    />
  );
}

export default function NeuralConcept() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleEnter = () => {
    setIsTransitioning(true);
    setTimeout(() => setShowDashboard(true), 1200);
  };

  // Node positions
  const nodes = [
    { x: 50, y: 50, size: 16, isCore: true, delay: 0 },
    { x: 30, y: 30, size: 10, delay: 0.2 },
    { x: 70, y: 25, size: 10, delay: 0.3 },
    { x: 25, y: 60, size: 10, delay: 0.4 },
    { x: 75, y: 55, size: 10, delay: 0.5 },
    { x: 40, y: 75, size: 10, delay: 0.6 },
    { x: 65, y: 80, size: 10, delay: 0.7 },
    { x: 15, y: 20, size: 6, delay: 0.8 },
    { x: 85, y: 15, size: 6, delay: 0.9 },
    { x: 10, y: 70, size: 6, delay: 1.0 },
    { x: 90, y: 60, size: 6, delay: 1.1 },
    { x: 20, y: 85, size: 6, delay: 1.2 },
    { x: 80, y: 90, size: 6, delay: 1.3 },
  ];

  const pulses = [
    { startX: 50, startY: 50, endX: 30, endY: 30, delay: 0 },
    { startX: 50, startY: 50, endX: 70, endY: 25, delay: 1 },
    { startX: 50, startY: 50, endX: 25, endY: 60, delay: 2 },
    { startX: 30, startY: 30, endX: 15, endY: 20, delay: 3 },
    { startX: 70, startY: 25, endX: 85, endY: 15, delay: 4 },
  ];

  if (showDashboard) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Dashboard variant="neural" />
      </motion.div>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-void-900">
      {/* Neural network visualization */}
      <div className="absolute inset-0">
        <NeuralConnections />
        {nodes.map((node, i) => (
          <NeuralNode key={i} {...node} />
        ))}
        {pulses.map((pulse, i) => (
          <DataPulse key={i} {...pulse} />
        ))}
      </div>

      {/* Central content */}
      <AnimatePresence>
        {!isTransitioning && (
          <motion.div
            className="relative z-10 text-center"
            exit={{ 
              scale: 1.5, 
              opacity: 0,
              filter: "blur(20px)",
            }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-8xl mb-4">🜆</div>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-4"
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
              className="text-lg text-gray-400 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Neural Alchemy for the Modern Enterprise
            </motion.p>

            <motion.p
              className="text-sm text-gray-500 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              AI that dissolves complexity
            </motion.p>

            {/* Enter button */}
            <motion.button
              onClick={handleEnter}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-aqua-600 to-aqua-700 text-white font-semibold hover:from-aqua-500 hover:to-aqua-600 transition-all duration-300 shadow-lg shadow-aqua-500/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 206, 209, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Solutions
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Transition effect */}
      <AnimatePresence>
        {isTransitioning && (
          <>
            {/* Nodes converge to center */}
            {nodes.map((node, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 rounded-full bg-aqua-400"
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                }}
                animate={{
                  left: "50%",
                  top: "50%",
                  scale: [1, 2, 0],
                }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.05,
                }}
              />
            ))}
            {/* Burst effect */}
            <motion.div
              className="fixed inset-0 bg-aqua-500 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.8, 0] }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </>
        )}
      </AnimatePresence>

      {/* Back link */}
      <motion.a
        href="/"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-8 text-gray-600 hover:text-aqua-400 transition-colors text-sm z-20"
      >
        ← Back to concepts
      </motion.a>
    </main>
  );
}
