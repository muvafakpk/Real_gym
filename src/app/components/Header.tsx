import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "../../assets/real1.png";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/membership", label: "Membership" },
    { path: "/trainers", label: "Trainers" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24 relative">

  {/* Logo - Left */}
  <Link to="/" className="flex items-center space-x-3 z-10">
    <img
      src={logoImage}
      alt="The Real Gym Logo"
      className="h-10 lg:h-16 w-auto"
    />
  </Link>

 

  {/* Desktop Navigation */}
  <nav className="hidden lg:flex items-center space-x-8">
    {navLinks.map((link) => (
      <Link
        key={link.path}
        to={link.path}
        className={`relative py-2 transition-colors duration-300 ${
          location.pathname === link.path
            ? "text-[#86BC25]"
            : "text-white hover:text-[#FFD700]"
        }`}
      >
        {link.label}
        {location.pathname === link.path && (
          <motion.div
            layoutId="underline"
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#86BC25] to-[#FFD700]"
          />
        )}
      </Link>
    ))}
  </nav>

  {/* CTA Button - Desktop */}
  <div className="hidden lg:flex items-center space-x-4">
    <Link
      to="/membership"
      className="px-6 py-3 bg-gradient-to-r from-[#86BC25] to-[#FFD700] text-black font-semibold rounded-md hover:shadow-lg hover:shadow-[#86BC25]/50 transition-all duration-300 transform hover:scale-105"
    >
      View Now
    </Link>
  </div>

  {/* Mobile Menu Button - Right */}
  <button
    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    className="lg:hidden text-white p-2 z-10"
    aria-label="Toggle menu"
  >
    {isMobileMenuOpen ? (
      <X className="w-6 h-6" />
    ) : (
      <Menu className="w-6 h-6" />
    )}
  </button>

</div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-[#0a0a0a]/98 backdrop-blur-lg">
              <nav className="flex flex-col items-center justify-center h-full space-y-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`text-2xl transition-colors duration-300 ${
                        location.pathname === link.path
                          ? "text-[#86BC25]"
                          : "text-white hover:text-[#FFD700]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                >
                  <Link to="/contact#contact-form"
                    className="px-8 py-4 bg-gradient-to-r from-[#86BC25] to-[#FFD700] text-black font-semibold rounded-md text-xl"
                  >
                    Message Us
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
