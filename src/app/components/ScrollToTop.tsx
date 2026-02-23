import { useState, useEffect } from "react";
import { useLocation } from "react-router"; // 👈 IMPORTANT (not react-router-dom)
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation(); // 👈 detect route change

  // ✅ AUTO scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // 👇 your existing button logic
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-50 w-12 h-12 bg-gradient-to-r from-[#86BC25] to-[#FFD700] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 text-black" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}