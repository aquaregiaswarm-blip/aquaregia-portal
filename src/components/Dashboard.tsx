"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface App {
  name: string;
  description: string;
  subdomain: string;
  icon: string;
  color: string;
  status: "live" | "coming-soon";
}

const apps: App[] = [
  {
    name: "Agent Researcher",
    description: "AI-powered client research and competitive intelligence",
    subdomain: "researcher",
    icon: "🔬",
    color: "from-aqua-500 to-blue-600",
    status: "live",
  },
  {
    name: "Deep Prospecting Engine",
    description: "Sales intelligence with real-time web grounding",
    subdomain: "dpe",
    icon: "⚡",
    color: "from-gold-400 to-orange-500",
    status: "live",
  },
  {
    name: "Signal Distillery",
    description: "AI news refined into daily intelligence",
    subdomain: "news",
    icon: "⚗️",
    color: "from-emerald-500 to-teal-600",
    status: "live",
  },
  {
    name: "Knowledge Forge",
    description: "Enterprise document intelligence",
    subdomain: "forge",
    icon: "🔥",
    color: "from-red-500 to-orange-500",
    status: "coming-soon",
  },
  {
    name: "Signal Watch",
    description: "Real-time market signal detection",
    subdomain: "signals",
    icon: "📡",
    color: "from-purple-500 to-pink-500",
    status: "coming-soon",
  },
];

interface DashboardProps {
  variant?: "hex" | "glass" | "neural";
}

export default function Dashboard({ variant = "glass" }: DashboardProps) {
  const tileClass = {
    hex: "clip-hex",
    glass: "rounded-2xl glass",
    neural: "rounded-xl border border-aqua-500/30",
  }[variant];

  return (
    <div className="min-h-screen bg-void-900 p-8">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-12"
      >
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <span className="text-4xl">🜆</span>
          <div>
            <h1 className="text-2xl font-bold">
              <span className="text-aqua-400">Aqua</span>{" "}
              <span className="text-gold-400">Regia</span>
            </h1>
            <p className="text-xs text-gray-500">AI Solutions Dashboard</p>
          </div>
        </Link>
        <nav className="flex gap-4 text-sm text-gray-400">
          <a href="#" className="hover:text-aqua-400 transition-colors">Docs</a>
          <a href="#" className="hover:text-aqua-400 transition-colors">Status</a>
          <a href="#" className="hover:text-aqua-400 transition-colors">Contact</a>
        </nav>
      </motion.header>

      {/* Apps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {apps.map((app, index) => (
          <motion.div
            key={app.subdomain}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className={`${tileClass} p-8 cursor-pointer group relative overflow-hidden`}
          >
            {/* Background gradient on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
            
            {/* Status badge */}
            {app.status === "coming-soon" && (
              <span className="absolute top-4 right-4 text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-400">
                Coming Soon
              </span>
            )}

            {/* Content */}
            <div className="relative z-10">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                {app.icon}
              </div>
              <h2 className="text-xl font-bold mb-2 text-white group-hover:text-aqua-400 transition-colors">
                {app.name}
              </h2>
              <p className="text-gray-400 text-sm mb-4">
                {app.description}
              </p>
              <div className="text-xs text-gray-500 font-mono">
                {app.subdomain}.aquaregia.life
              </div>
            </div>

            {/* Hover arrow */}
            <motion.div
              className="absolute bottom-6 right-6 text-aqua-400 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ x: -10 }}
              whileHover={{ x: 0 }}
            >
              →
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-16 text-gray-500 text-sm"
      >
        <p>Where noble problems meet their match</p>
      </motion.footer>
    </div>
  );
}
