import { motion } from "framer-motion";

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0a0a0a]">
      <motion.div
        className="relative w-24 h-24"
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 rounded-full border-4 border-[#2a2a2a]"></div>
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#86BC25] border-r-[#FFD700]"></div>
      </motion.div>
    </div>
  );
}
