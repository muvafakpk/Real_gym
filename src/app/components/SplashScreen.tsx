import { motion } from "framer-motion";
import logo from "../../assets/real1.png";

export default function SplashScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="fixed inset-0 bg-black flex items-center justify-center z-[9999]"
    >
      <motion.img
        src={logo}
        alt="The Real Gym"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-32 md:w-40 drop-shadow-[0_0_25px_rgba(134,188,37,0.5)]"
      />
    </motion.div>
  );
}