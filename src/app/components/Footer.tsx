import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import logoImage from "../../assets/real1.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#2a2a2a] pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <img
              src={logoImage}
              alt="The Real Gym"
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Transform your body and mind at The Real Gym. North Malabar's
              largest fitness hub with 6400+ sq. ft. of premium equipment and
              certified trainers.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-[#86BC25] hover:to-[#FFD700] hover:text-black transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/realgym.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-[#86BC25] hover:to-[#FFD700] hover:text-black transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-[#86BC25] hover:to-[#FFD700] hover:text-black transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-[#86BC25] hover:to-[#FFD700] hover:text-black transition-all duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-[#86BC25] transition-colors duration-300 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-[#86BC25] transition-colors duration-300 text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-[#86BC25] transition-colors duration-300 text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/membership"
                  className="text-gray-400 hover:text-[#86BC25] transition-colors duration-300 text-sm"
                >
                  Membership
                </Link>
              </li>
              <li>
                <Link
                  to="/trainers"
                  className="text-gray-400 hover:text-[#86BC25] transition-colors duration-300 text-sm"
                >
                  Trainers
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-gray-400 hover:text-[#86BC25] transition-colors duration-300 text-sm"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-[#86BC25] transition-colors duration-300 text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white mb-6 text-lg">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">Personal Training</li>
              <li className="text-gray-400 text-sm">Weight Loss Programs</li>
              <li className="text-gray-400 text-sm">Muscle Building</li>
              <li className="text-gray-400 text-sm">Cardio Training</li>
              <li className="text-gray-400 text-sm">
                Strength & Conditioning
              </li>
              <li className="text-gray-400 text-sm">Group Classes</li>
              <li className="text-gray-400 text-sm">Zumba & Aerobics</li>
              <li className="text-gray-400 text-sm">Tabata</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-6 text-lg">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-[#86BC25] flex-shrink-0 mt-0.5" />
                <span>Padna orimukk,Kasargod, Kerala, India</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-[#86BC25] flex-shrink-0" />
                <a
                  href="tel:+919447771658"
                  className="hover:text-[#FFD700] transition-colors"
                >
                  +91 9447771658
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-[#86BC25] flex-shrink-0" />
                <a
                  href="mailto:info@therealgym.in"
                  className="hover:text-[#FFD700] transition-colors"
                >
                  info@therealgym.in
                </a>
              </li>
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <Clock className="w-5 h-5 text-[#86BC25] flex-shrink-0 mt-0.5" />
                <div>
                  <p>Mon - Sat: 5:00 AM - 10:00 PM</p>
                  <p>Sunday: 6:00 AM - 8:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2a2a2a] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} The Real Gym. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-[#86BC25] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#86BC25] transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
