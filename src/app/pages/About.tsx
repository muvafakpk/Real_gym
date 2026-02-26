import { motion } from "framer-motion";
import sinanImg from "../../assets/sinan.png";
import sinanImg1 from "../../assets/sanal.png";
import sinanImg2 from "../../assets/sharanya.png";
import sinanImg3 from "../../assets/vaishnav.png";
import sinanImg4 from "../../assets/mubashira.jpeg";
import sinanImg5 from "../../assets/trainer6.jpeg";
import sinanImg6 from "../../assets/thabsheera.jpeg";
import coach from "../../assets/coach.jpeg";
import logoImage from "../../assets/real1.png";
import { Target, Eye, Award, Users, TrendingUp, Heart } from "lucide-react";

export default function About() {
  const achievements = [
    { number: "3000+", label: "Happy Members" },
    { number: "6400+", label: "Sq. Ft. Space" },
    { number: "8+", label: "Certified Trainers" },
    { number: "5", label: "Years Experience" },
  ];

  const trainers = [
    {
      name: "Abu Sinaan",
      role: "Founder & Head Trainer",
      specialty: "Strength & Conditioning",
       image: sinanImg,
    },
    {
      name: "Vaishnav",
      role: "Personal Training Specialist",
      specialty: "Weight Loss & Nutrition",
      image: sinanImg3,
    },
    {
      name: "Sanal",
      role: "Personal Training Specialist",
      specialty: "Weight Loss & Nutrition",
      image: sinanImg1,
    },
    {
      name: "Sharanya",
      role: "Personal Training Specialist",
      specialty: "Weight Loss & Nutrition",
       image: sinanImg2,
    },
     {
      name: "Thabsheera",
      role: "Group Fitness Instructor",
      specialty: "Zumba & Aerobics",
       image: sinanImg6,
    },
   
     {
      name: "Mubashira",
      role: "Personal Training Specialist",
      specialty: "Weight Loss & Nutrition",
      image: sinanImg4,
    },
     {
      name: "Krishnaja",
      role: "Personal Training Specialist",
      specialty: "Yoga Trainer",
      image: sinanImg5,
    },
  ];

  const certifications = [
    "ACE Certified Personal Trainers",
    "NASM Nutrition Specialists",
    "CrossFit Level 1 & 2 Certified",
    "Zumba & Aerobics Certified Instructors",
    "First Aid & CPR Certified",
    "Sports Nutrition Specialists",
  ];

 return (
<div className="bg-[#0a0a0a] pt-10 overflow-x-hidden">
  {/* Hero Section */}
  <section className="relative py-32 overflow-hidden">

    <div className="absolute inset-0">
      <img
        src={coach}
        alt="Services"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 to-[#0a0a0a]/80"></div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4 lg:px-8 relative z-10 text-center"
    >
      <h1 className="text-3xl mb-4 lg:text-7xl mb-6 font-extrabold">
        About{" "}
        <span className="bg-gradient-to-r from-[#86BC25] to-[#FFD700] bg-clip-text text-transparent">
          The Real Gym
        </span>
      </h1>

      <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
        North Malabar's largest and most trusted fitness destination since 2019
      </p>
    </motion.div>

  </section>

{/* Our Story Section */}
<section className="py+2 lg:py-32 bg-[#0a0a0a]">
  <div className="container mx-auto px-4 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

 <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="relative max-w-3xl mx-auto"
>
  {/* Glow */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#86BC25]/20 to-[#FFD700]/20 blur-2xl opacity-30 rounded-3xl"></div>

  {/* Premium Card */}
  <div className="relative bg-gradient-to-br from-[#111111] to-[#1a1a1a] border border-[#2a2a2a] rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-md text-center">

    {/* Accent Line CENTERED */}
    <div className="flex justify-center mb-6">
      <div className="w-20 h-1 bg-gradient-to-r from-[#86BC25] to-[#FFD700] rounded-full"></div>
    </div>

    {/* Centered Heading */}
    <h2 className="text-3xl mb-4 font-extrabold mb-8 text-white">
      Our{" "}
      <span className="bg-gradient-to-r from-[#86BC25] to-[#FFD700] bg-clip-text text-transparent">
        Story
      </span>
    </h2>

    {/* Centered Content */}
    <div className="space-y-6 text-gray-300 text-lg leading-relaxed">

      <p>
        Founded by <span className="text-[#86BC25] font-semibold">Abu Sinaan</span> in 2019,
        The Real Gym started with a bold vision to create North Malabar's
        premier fitness destination where everyone — regardless of their
        fitness level — could achieve their health and wellness goals.
      </p>

      <p>
        What began as a passion project has grown into a
        <span className="text-white font-semibold"> 6400+ sq. ft. </span>
        state-of-the-art facility serving over
        <span className="text-white font-semibold"> 3,000 members</span>.
      </p>

      <p>
        Our commitment to excellence is reflected in our team of
        <span className="text-[#FFD700] font-semibold"> 8+ certified trainers</span>,
        premium equipment, and comprehensive programs including
        Zumba, Aerobics, and Tabata.
      </p>

    </div>

    {/* Bottom Accent */}
    <div className="mt-10 h-px bg-gradient-to-r from-transparent via-[#86BC25]/50 to-transparent"></div>

  </div>
</motion.div>
   


          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src={logoImage}
                alt="The Real Gym"
                className="w-full h-auto"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-r from-[#86BC25] to-[#FFD700] rounded-lg blur-3xl opacity-30"></div>
          </motion.div>

        </div>
      </div>
    </section>

  
      {/* Mission & Vision */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="container mx-auto px-4 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#1a1a1a] p-10 rounded-2xl border border-[#2a2a2a] shadow-xl hover:shadow-[#86BC25]/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#86BC25] to-[#FFD700] rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-3xl mb-4 text-white" style={{ fontWeight: 800 }}>
                Our Mission
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To empower individuals to achieve their fitness goals through
                expert guidance, state-of-the-art facilities, and a supportive
                community. We strive to make fitness accessible, enjoyable, and
                sustainable for everyone.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-[#1a1a1a] p-10 rounded-lg border border-[#2a2a2a]"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#FFD700] to-[#86BC25] rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-3xl mb-4 text-white" style={{ fontWeight: 800 }}>
                Our Vision
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be recognized as the leading fitness destination in Kerala,
                setting the standard for excellence in training, facilities, and
                member satisfaction. We envision a healthier, stronger community
                transformed through our programs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 lg:py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl mb-4" style={{ fontWeight: 800 }}>
              Our{" "}
              <span className="bg-gradient-to-r from-[#86BC25] to-[#FFD700] bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Numbers that speak for themselves
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl mb-2 bg-gradient-to-r from-[#86BC25] to-[#FFD700] bg-clip-text text-transparent" style={{ fontWeight: 800 }}>
                  {achievement.number}
                </div>
                <div className="text-gray-400 text-lg">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Trainers */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl mb-4" style={{ fontWeight: 800 }}>
              Meet Our{" "}
              <span className="bg-gradient-to-r from-[#86BC25] to-[#FFD700] bg-clip-text text-transparent">
                Expert Trainers
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Certified professionals dedicated to your success
            </p>
          </motion.div>

         <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {trainers.map((trainer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl mb-4">
                  <img
  src={trainer.image}
  alt={trainer.name}
  className={`w-full h-72 sm:h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-500 ${
    trainer.name === "Sanal" ? "lg:object-top" : ""
  }`}
/>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl text-white mb-2" style={{ fontWeight: 700 }}>
                  {trainer.name}
                </h3>
                <p className="te4xt-[#86BC25] mb-2">{trainer.role}</p>
                <p className="text-gray-400">{trainer.specialty}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 lg:py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl mb-4" style={{ fontWeight: 800 }}>
              Our{" "}
              <span className="bg-gradient-to-r from-[#86BC25] to-[#FFD700] bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Certified excellence you can trust
            </p>
          </motion.div>

     <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex items-center space-x-3 bg-[#1a1a1a] p-4 rounded-lg border border-[#2a2a2a]"
              >
                <Award className="w-8 h-8 text-[#86BC25] flex-shrink-0" />
                <span className="text-gray-300 text-lg">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
