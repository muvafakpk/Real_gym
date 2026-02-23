import { motion } from "framer-motion";
import { Link } from "react-router";
import sinan from "../../assets/personal.jpeg";
import sinan1 from "../../assets/loss.jpeg";
import sinan2 from "../../assets/muscle.jpeg";
import sinan3 from "../../assets/gymman.jpeg";
import sinan4 from "../../assets/group.jpeg";
import {
  Dumbbell,
  TrendingDown,
  TrendingUp,
  Heart,
  Zap,
  Users,
  DollarSign,
  Check,
  ArrowRight,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Dumbbell className="w-16 h-16" />,
      title: "Personal Training",
      description:
        "Get one-on-one attention from our certified trainers who will create a customized workout plan tailored to your specific goals, fitness level, and body type.",
      features: [
        "Customized workout plans",
        "Nutrition guidance",
        "Progress tracking",
        "Flexible scheduling",
        "Form correction",
      ],
      image:sinan,
    },
    {
      icon: <TrendingDown className="w-16 h-16" />,
      title: "Weight Loss Programs",
      description:
        "Science-based weight loss programs that combine effective workouts with nutritional guidance to help you shed pounds and keep them off permanently.",
      features: [
        "Calorie-burning workouts",
        "Diet planning",
        "Body composition analysis",
        "Weekly progress reviews",
        "Lifestyle coaching",
      ],
      image:sinan1,
    },
    {
      icon: <TrendingUp className="w-16 h-16" />,
      title: "Muscle Building",
      description:
        "Gain lean muscle mass and build strength with our comprehensive muscle building programs designed by expert bodybuilding trainers.",
      features: [
        "Progressive overload training",
        "Muscle-specific workouts",
        "Supplement guidance",
        "Recovery protocols",
        "Strength assessments",
      ],
      image: sinan2,
    },
    {
      icon: <Heart className="w-16 h-16" />,
      title: "Cardio Training",
      description:
        "Improve your cardiovascular health, endurance, and stamina with our varied cardio programs including HIIT, steady-state, and interval training.",
      features: [
        "HIIT workouts",
        "Treadmill programs",
        "Cycling sessions",
        "Heart rate monitoring",
        "Endurance building",
      ],
      image:sinan3,
    },
    {
      icon: <Zap className="w-16 h-16" />,
      title: "Strength & Conditioning",
      description:
        "Enhance your athletic performance with functional training, plyometrics, and sport-specific conditioning programs.",
      features: [
        "Functional movements",
        "Power development",
        "Agility training",
        "Core strengthening",
        "Sport-specific training",
      ],
      image: "https://images.unsplash.com/photo-1770493895453-4f758c40d11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlbmd0aCUyMHRyYWluaW5nJTIwZXF1aXBtZW50fGVufDF8fHx8MTc3MTYzMzA4MXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: <Users className="w-16 h-16" />,
      title: "Group Classes",
      description:
        "Join our energetic group fitness classes including Zumba, Aerobics, Tabata, and more. Work out with friends and stay motivated together.",
      features: [
        "Zumba classes",
        "Aerobics sessions",
        "Tabata training",
        "Dance fitness",
        "Community motivation",
      ],
      image: sinan4,
    },
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "999",
      duration: "per month",
      features: [
        "Access to gym equipment",
        "Locker facility",
        "Basic fitness assessment",
        "Group class access",
        "Standard hours access",
      ],
      popular: false,
    },
    {
      name: "Standard",
      price: "1,999",
      duration: "per month",
      features: [
        "All Basic features",
        "Personal training (2 sessions/month)",
        "Nutrition consultation",
        "Extended hours access",
        "Free guest pass (1/month)",
        "Priority equipment access",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "3,499",
      duration: "per month",
      features: [
        "All Standard features",
        "Unlimited personal training",
        "Customized meal plans",
        "24/7 gym access",
        "Free guest passes (4/month)",
        "Body composition analysis",
        "Supplement discounts",
        "Priority support",
      ],
      popular: false,
    },
  ];

  return (
    <div className="bg-[#0a0a0a] pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1584863431255-3997371dcc01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBkdW1iYmVsbHMlMjByYWNrfGVufDF8fHx8MTc3MTY2MDk0NHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 to-[#0a0a0a]/80"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 lg:px-8 relative z-10"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6" style={{ fontWeight: 800 }}>
            Our{" "}
            <span className="bg-gradient-to-r from-[#86BC25] to-[#FFD700] bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
            Comprehensive fitness programs designed to meet every goal
          </p>
        </motion.div>
      </section>

      {/* Services List */}
      <section className="py-20 lg:py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="text-[#86BC25] mb-6">{service.icon}</div>
                  <h2 className="text-4xl md:text-5xl mb-6" style={{ fontWeight: 800 }}>
                    {service.title}
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <Check className="w-6 h-6 text-[#86BC25] flex-shrink-0" />
                        <span className="text-gray-300 text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/membership"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#86BC25] to-[#FFD700] text-black rounded-md hover:shadow-lg hover:shadow-[#86BC25]/50 transition-all duration-300 transform hover:scale-105"
                    style={{ fontWeight: 700 }}
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative rounded-lg overflow-hidden shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/50 to-transparent"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    
     
    </div>
  );
}
