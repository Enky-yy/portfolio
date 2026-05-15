"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[999] bg-[#0B0F19] flex items-center justify-center"
    >
      <div className="font-mono text-green-400 text-lg space-y-2">
        <p>$ Initializing portfolio...</p>
        <p>$ Loading AI systems...</p>
        <p>$ Starting backend services...</p>
      </div>
    </motion.div>
  );
}