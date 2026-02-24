import { Link } from "react-router";
import { motion } from "framer-motion";
import Realgym from "../../assets/Realgym.jpeg";
import logoImage from "../../assets/real1.png";
import logoImage1 from "../../assets/Gymimg.jpeg";
import coach from "../../assets/coach.jpeg";
import {
  Dumbbell,
  Target,
  Users,
  Award,
  TrendingUp,
  Heart,
  CheckCircle,
  ArrowRight,
  Star,
} from "lucide-react";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Newsletter } from "../components/Newsletter";

export default function Home() {
  const services = [
    {
      icon: <Dumbbell className="w-12 h-12" />,
      title: "Personal Training",
      description:
        "One-on-one personalized training sessions with certified trainers.",
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Weight Loss",
      description:
        "Scientifically designed programs to help you lose weight healthily.",
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Muscle Building",
      description:
        "Build strength and muscle mass with our expert guidance.",
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Cardio Training",
      description:
        "Improve your cardiovascular health with our cardio programs.",
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Strength & Conditioning",
      description: "Enhance your athletic performance and overall strength.",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Group Classes",
      description: "Join energetic group sessions including Zumba and Aerobics.",
    },
  ];

  const features = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "6400+ Sq. Ft. Space",
      description: "North Malabar's largest fitness hub",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "8+ Certified Trainers",
      description: "Experienced and professional coaching",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Premium Equipment",
      description: "State-of-the-art fitness machines",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Flexible Timings",
      description: "Open 6 days a week from 5 AM",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Weight Loss Transformation",
      content:
        "Lost 25kg in 6 months! The trainers at The Real Gym are incredibly supportive and knowledgeable. Best decision of my life!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    },
    {
      name: "Priya Menon",
      role: "Fitness Enthusiast",
      content:
        "The atmosphere is so motivating! I've been a member for 2 years and the facilities are top-notch. Highly recommend!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    },
    {
      name: "Arun Sharma",
      role: "Muscle Building Journey",
      content:
        "Gained 15kg of muscle mass with their expert guidance. The personal training sessions are worth every penny!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    },
    {
      name: "Sneha Nair",
      role: "Group Class Member",
      content:
        "Zumba classes here are so much fun! Lost weight while having a great time. The trainers are energetic and friendly.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    },
  ];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        arrows: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrows: false,
        centerMode: false,
      },
    },
  ],
};
  return (
  <div className="bg-[#0a0a0a] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={logoImage1}
            alt="Gym Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]"></div>
        </div>

      {/* Hero Section */}
<div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

  {/* Dark Gradient Overlay */}
 <div className="absolute w-96 h-96 bg-[#86BC25]/20 blur-[120px] rounded-full top-20 left-1/2 -translate-x-1/2" />

  {/* Content */}
  <div className="relative z-10 container mx-auto px-6 pt-28 pb-20 text-center">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl mx-auto"
    >

      {/* Small Premium Tag */}
      <div className="mb-8">
        <span className="px-4 py-1 text-xs tracking-widest uppercase bg-white/10 border border-white/20 rounded-full text-gray-300 backdrop-blur-md">
          North Malabar’s Elite Fitness Club
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-6">
        Transform Your{" "}
        <span className="bg-gradient-to-r from-[#86BC25] to-[#FFD700] bg-clip-text text-transparent">
          Body
        </span>
        <br />
        Transform Your{" "}
        <span className="bg-gradient-to-r from-[#FFD700] to-[#86BC25] bg-clip-text text-transparent">
          Life
        </span>
      </h1>

      {/* Description */}
      <p className="text-gray-400 text-sm sm:text-base md:text-xl leading-relaxed mb-10 px-2">
        6400+ sq.ft. premium training space with world-class equipment and 8+
        certified trainers dedicated to your transformation journey.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

        <Link
          to="/membership"
          className="w-full sm:w-auto px-8 py-4 rounded-xl text-black font-semibold text-base
          bg-gradient-to-r from-[#86BC25] to-[#FFD700]
          hover:scale-105 transition-all duration-300
          shadow-lg hover:shadow-[#86BC25]/40"
        >
          View Membership Plans →
        </Link>

        <Link
          to="/contact"
          className="w-full sm:w-auto px-8 py-4 rounded-xl text-white font-semibold text-base
          border border-white/20 bg-white/5 backdrop-blur-md
          hover:bg-white/10 transition-all duration-300"
        >
          Send Message
        </Link>

      </div>

      {/* Trust Indicators */}
      <div className="flex justify-center gap-6 mt-12 text-gray-500 text-xs sm:text-sm">
        <span>6400+ Sq.Ft</span>
        <span>•</span>
        <span>8+ Certified Trainers</span>
        <span>•</span>
        <span>Premium Equipment</span>
      </div>

    </motion.div>
  </div>
</div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-[#86BC25] rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-3 bg-[#86BC25] rounded-full"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 lg:py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontWeight: 800 }}>
              Our{" "}
              <span className="bg-gradient-to-r from-[#86BC25] to-[#FFD700] bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive fitness programs designed to meet your goals
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-[#1a1a1a] p-4 rounded-lg border-[#2a2a2a] hover:border-[#86BC25] transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="text-[#86BC25] mb-6 group-hover:text-[#FFD700] transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl mb-4 text-white" style={{ fontWeight: 700 }}>
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#86BC25] to-[#FFD700] text-black rounded-md hover:shadow-lg hover:shadow-[#86BC25]/50 transition-all duration-300 transform hover:scale-105"
              style={{ fontWeight: 700 }}
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl mb-6" style={{ fontWeight: 800 }}>
                Why Choose{" "}
                <span className="bg-gradient-to-r from-[#86BC25] to-[#FFD700] bg-clip-text text-transparent">
                  The Real Gym
                </span>
                ?
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                We're not just a gym - we're a community dedicated to helping
                you achieve your fitness goals with premium facilities and
                expert guidance.
              </p>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="text-[#86BC25] flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-xl text-white mb-2" style={{ fontWeight: 700 }}>
                        {feature.title}
                      </h4>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={logoImage}
                  alt="Gym Interior"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-r from-[#86BC25] to-[#FFD700] rounded-lg blur-3xl opacity-30"></div>
            </motion.div>
          </div>
        </div>
      </section>

      

      {/* CTA Banner Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={coach}
            alt="CTA Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 to-[#0a0a0a]/80"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 lg:px-8 relative z-10 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6" style={{ fontWeight: 800 }}>
            Ready to Start Your{" "}
            <span className="bg-gradient-to-r from-[#86BC25] to-[#FFD700] bg-clip-text text-transparent">
              Transformation
            </span>
            ?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join The Real Gym today and get access to world-class facilities,
            expert trainers, and a supportive community.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/membership"
              className="px-10 py-5 bg-gradient-to-r from-[#86BC25] to-[#FFD700] text-black text-lg rounded-md hover:shadow-2xl hover:shadow-[#86BC25]/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              style={{ fontWeight: 700 }}
            >
              View Membership Plans
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="px-10 py-5 border-2 border-white text-white text-lg rounded-md hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              style={{ fontWeight: 700 }}
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Custom Styles for Slick Slider */}
      <style>{`
        .testimonials-slider .slick-dots {
          bottom: -50px;
        }
        .testimonials-slider .slick-dots li button:before {
          color: #86BC25;
          font-size: 12px;
        }
        .testimonials-slider .slick-dots li.slick-active button:before {
          color: #FFD700;
        }
        .testimonials-slider .slick-prev,
        .testimonials-slider .slick-next {
          width: 50px;
          height: 50px;
          z-index: 10;
        }
        .testimonials-slider .slick-prev:before,
        .testimonials-slider .slick-next:before {
          font-size: 40px;
          color: #86BC25;
        }
        .testimonials-slider .slick-prev {
          left: -60px;
        }
        .testimonials-slider .slick-next {
          right: -60px;
        }
        @media (max-width: 1024px) {
          .testimonials-slider .slick-prev {
            left: 0;
          }
          .testimonials-slider .slick-next {
            right: 0;
          }
        }
          @media (max-width: 768px) {
  .testimonials-slider .slick-prev,
  .testimonials-slider .slick-next {
    display: none !important;
  }
}
      `}
      </style>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
}