import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

export function Newsletter() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#86BC25] to-[#FFD700] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-[#86BC25]" />
          </div>

          <h2
            className="text-3xl mb-4 text-black mb-4"
            style={{ fontWeight: 800 }}
          >
            Let’s Start Your Fitness Journey
          </h2>

          <p className="text-xl text-black/80 mb-10">
            Ready to transform your body and mind? Contact us today and take
            the first step toward a stronger, healthier you.
          </p>

          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-10 py-4 text-lg rounded-lg font-bold hover:bg-black/90 transition"
            >
              Contact Us
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}