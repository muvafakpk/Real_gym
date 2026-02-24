import { motion } from "framer-motion";
import { Award, Instagram, Mail, ArrowRight } from "lucide-react";
import sinanImg from "../../assets/sinan.png";
import sinanImg1 from "../../assets/sanal.png";
import sinanImg2 from "../../assets/sharanya.png";
import sinanImg3 from "../../assets/vaishnav.png";
import sinanImg4 from "../../assets/mubashira.jpeg";
import sinanImg5 from "../../assets/trainer6.jpeg";
import sinanImg6 from "../../assets/thabsheera.jpeg";
import coach from "../../assets/coach.jpeg";
import { Link } from "react-router-dom";

export default function Trainers() {
  const trainers = [
    {
      name: "Abu Sinaan",
      role: "Founder & Head Trainer",
      specialty: "Strength & Conditioning",
      experience: "10+ Years",
      certifications: ["ACE Certified", "CrossFit Level 2", "Nutrition Specialist"],
      description:
        "Founder of The Real Gym with over a decade of experience in transforming lives through fitness. Specialized in strength training and functional fitness.",
     image: sinanImg,
      instagram: "@abu_sinaan",
      email: "abu@therealgym.in",
    },
    {
      name: "Vaishnav",
      role: "Personal Training Specialist",
      specialty: "Weight Loss & Body Transformation",
      experience: "8 Years",
      certifications: ["NASM Certified", "Nutrition Coach", "TRX Instructor"],
      description:
        "Expert in weight loss and body transformation programs. Has helped over 500 clients achieve their fitness goals with personalized training plans.",
      image: sinanImg3,
      email: "arjun@therealgym.in",
    },
     {
      name: "Sanal",
      role: "Strength & Conditioning Coach",
      specialty: "Powerlifting & Muscle Building",
      experience: "7 Years",
      certifications: ["NSCA Certified", "Olympic Lifting Coach", "Sports Nutrition"],
      description:
        "Former competitive powerlifter with expertise in strength training and muscle building. Focuses on proper form and progressive overload.",
      image: sinanImg1,
  
      email: "rajesh@therealgym.in",
           objectPosition: "object-[center_top]"
    },
    {
      name: "Sharanya",
      role: "Group Fitness Instructor",
      specialty: "Zumba & Aerobics",
      experience: "6 Years",
      certifications: ["Zumba Certified", "Aerobics Instructor", "Dance Fitness"],
      description:
        "Brings high energy and passion to every class. Specialized in group fitness programs including Zumba, Aerobics, and dance-based workouts.",
      image: sinanImg2,
      instagram: "@priya_fitness",
      email: "priya@therealgym.in",
    },
   
    {
  name: "Thabsheera",
  role: "Group Fitness Instructor",
  specialty: "Zumba & Aerobics",
  experience: "4 Years",
  certifications: [
    "Certified Zumba Instructor",
    "Aerobics Trainer Certification",
    "Fitness Nutrition Basics"
  ],
  description:
    "Energetic group fitness instructor specializing in Zumba and aerobics. Passionate about making workouts fun, engaging, and effective for all fitness levels.",
  image: sinanImg6,
  email: "thabsheera@therealgym.in",
},
{
  name: "Mubashira",
  role: "Personal Training Specialist",
  specialty: "Weight Loss & Nutrition",
  experience: "5 Years",
  certifications: [
    "Certified Personal Trainer",
    "Weight Management Specialist",
    "Nutrition & Diet Planning"
  ],
  description:
    "Dedicated personal trainer focused on sustainable weight loss and customized nutrition plans. Helps clients build confidence while achieving long-term results.",
  image: sinanImg4,
  email: "mubashira@therealgym.in",
},
{
  name: "Krishnaja",
  role: "Personal Training Specialist",
  specialty: "Yoga & Functional Training",
  experience: "6 Years",
  certifications: [
    "Certified Yoga Trainer",
    "Functional Training Coach",
    "Mobility & Flexibility Specialist"
  ],
  description:
    "Experienced yoga and functional training coach focused on flexibility, mobility, and overall body balance. Helps clients improve posture and prevent injuries.",
  image: sinanImg5,
  email: "krishnaja@therealgym.in",
},
   
  ];

  return (
    <div className="bg-[#0a0a0a] pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1603665409265-bdc00027c217?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB3b3Jrb3V0JTIwdHJhaW5pbmclMjBkYXJrfGVufDF8fHx8MTc3MTY4MjUxNHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Our Trainers"
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
              Expert Trainers
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
            Meet the certified professionals who will guide your fitness journey
          </p>
        </motion.div>
      </section>

      {/* Trainers Grid */}
      <section className="py-20 lg:py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {trainers.map((trainer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                {/* Trainer Image */}
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60"></div>
                  
                  {/* Social Links Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex gap-4 justify-center">
                      <a
                       href={`https://instagram.com/${trainer.instagram?.replace('@', '') || ''}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gradient-to-r from-[#86BC25] to-[#FFD700] rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform"
                      >
                        <Instagram className="w-6 h-6" />
                      </a>
                      <a
                        href={`mailto:${trainer.email}`}
                        className="w-12 h-12 bg-gradient-to-r from-[#86BC25] to-[#FFD700] rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform"
                      >
                        <Mail className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Trainer Info */}
                <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#2a2a2a]">
                  <h3 className="text-2xl text-white mb-2" style={{ fontWeight: 800 }}>
                    {trainer.name}
                  </h3>
                  <p className="text-[#86BC25] mb-2 text-lg" style={{ fontWeight: 600 }}>
                    {trainer.role}
                  </p>
                  <p className="text-gray-400 mb-4">{trainer.specialty}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">
                      <span style={{ fontWeight: 600 }}>Experience:</span> {trainer.experience}
                    </p>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {trainer.description}
                  </p>

                  <div className="space-y-2">
                    <p className="text-sm text-gray-500" style={{ fontWeight: 600 }}>
                      Certifications:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {trainer.certifications.map((cert, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-[#0a0a0a] rounded-full text-xs text-[#86BC25]"
                        >
                          <Award className="w-3 h-3" />
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Trainers Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontWeight: 800 }}>
              Why Choose Our{" "}
              <span className="bg-gradient-to-r from-[#86BC25] to-[#FFD700] bg-clip-text text-transparent">
                Trainers
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our team brings expertise, passion, and dedication to every session
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Certified Professionals",
                description:
                  "All our trainers hold internationally recognized certifications and continue their education regularly.",
              },
              {
                title: "Personalized Approach",
                description:
                  "Each trainer creates customized programs tailored to your unique goals, fitness level, and preferences.",
              },
              {
                title: "Proven Results",
                description:
                  "Our trainers have helped thousands of members achieve their fitness goals with documented success stories.",
              },
              {
                title: "Diverse Expertise",
                description:
                  "From weight loss to muscle building, yoga to HIIT, our team covers all aspects of fitness training.",
              },
              {
                title: "Motivational Support",
                description:
                  "Beyond physical training, our coaches provide the mental support and motivation you need to succeed.",
              },
              {
                title: "Safety First",
                description:
                  "First aid certified and trained in injury prevention, ensuring your workouts are both effective and safe.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-[#1a1a1a] p-8 rounded-lg border border-[#2a2a2a] hover:border-[#86BC25] transition-all duration-300"
              >
                <h3 className="text-2xl text-white mb-4" style={{ fontWeight: 700 }}>
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
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

    </div>
  );
}
