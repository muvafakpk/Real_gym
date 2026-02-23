import { motion } from "framer-motion";
import { useState, useRef } from "react";

import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import body1 from "../../assets/body1.jpeg";
import body2 from "../../assets/body2.jpeg";
import body3 from "../../assets/body3.jpeg";
import body4 from "../../assets/body4.jpeg";
import body5 from "../../assets/body5.jpeg";
import body6 from "../../assets/body6.jpeg";
import body7 from "../../assets/body7.jpeg";
import body8 from "../../assets/body8.jpeg";
import body9 from "../../assets/body9.jpeg";
import body10 from "../../assets/body10.jpeg";
import t1 from "../../assets/t1.jpeg";
import t2 from "../../assets/t2.jpeg";
import t3 from "../../assets/t3.jpeg";
import t4 from "../../assets/t4.jpeg";
import t5 from "../../assets/t5.jpeg";
import t6 from "../../assets/t6.jpeg";
import t7 from "../../assets/t7.jpeg";
import t8 from "../../assets/t8.jpeg";
import t9 from "../../assets/t9.jpeg";
import t10 from "../../assets/t10.jpeg";
import t11 from "../../assets/t11.jpeg";
import t12 from "../../assets/t12.jpeg";
import t13 from "../../assets/t13.jpeg";
import t14 from "../../assets/t14.jpeg";
import t15 from "../../assets/t15.jpeg";
import t16 from "../../assets/t16.jpeg";
import t17 from "../../assets/t17.jpeg";
import t18 from "../../assets/t18.jpeg";
import t19 from "../../assets/t19.jpeg";
import t20 from "../../assets/t20.jpeg";
import t21 from "../../assets/t21.jpeg";
import t22 from "../../assets/t22.jpeg";
import t23 from "../../assets/t23.jpeg";
import t24 from "../../assets/t24.jpeg";
import t25 from "../../assets/t25.jpeg";





export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
const galleryRef = useRef<HTMLDivElement | null>(null);
  const categories = ["all", "body", "equipment", "classes", "transformations"];

  const images = [
    {
      url: body1,
      category: "body",
      title: "body",
    },
      {
      url: body10,
      category: "body",
      title: "body",
    },
      
      {
      url: body9,
      category: "body",
      title: "body",
    },
      {
      url: body8,
      category: "body",
      title: "body",
    },
      {
      url: body7,
      category: "body",
      title: "body",
    },
      {
      url: body6,
      category: "body",
      title: "body",
    },
      {
      url: body5,
      category: "body",
      title: "body",
    },
      {
      url: body4,
      category: "body",
      title: "body",
    },
      {
      url: body3,
      category: "body",
      title: "body",
    },
      {
      url: body2,
      category: "body",
      title: "body",
    },
    {
      url: t1,
      category: "transformations",
      title: "body",
    },
     {
      url: t2,
      category: "transformations",
      title: "body",
    },
     {
      url: t3,
      category: "transformations",
      title: "body",
    },
     {
      url: t4,
      category: "transformations",
      title: "body",
    },
     {
      url: t5,
      category: "transformations",
      title: "body",
    },
     {
      url: t6,
      category: "transformations",
      title: "body",
    },
     {
      url: t7,
      category: "transformations",
      title: "body",
    },
     {
      url: t8,
      category: "transformations",
      title: "body",
    },
     {
      url: t9,
      category: "transformations",
      title: "body",
    },
     {
      url: t10,
      category: "transformations",
      title: "body",
    },
     {
      url: t11,
      category: "transformations",
      title: "body",
    },
     {
      url: t12,
      category: "transformations",
      title: "body",
    },
     {
      url: t13,
      category: "transformations",
      title: "body",
    },
     {
      url: t14,
      category: "transformations",
      title: "body",
    },
     {
      url: t15,
      category: "transformations",
      title: "body",
    },
     {
      url: t16,
      category: "transformations",
      title: "body",
    },
     {
      url: t17,
      category: "transformations",
      title: "body",
    },

     {
      url: t18,
      category: "transformations",
      title: "body",
    },
     {
      url: t19,
      category: "transformations",
      title: "body",
    },

     {
      url: t20,
      category: "transformations",
      title: "body",
    },
     {
      url: t21,
      category: "transformations",
      title: "body",
    },

     {
      url: t22,
      category: "transformations",
      title: "body",
    },
     {
      url: t23,
      category: "transformations",
      title: "body",
    },
     {
      url: t24,
      category: "transformations",
      title: "body",
    },
     {
      url: t25,
      category: "transformations",
      title: "body",
    },
    
    {
      url: "https://images.unsplash.com/photo-1584863431255-3997371dcc01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBkdW1iYmVsbHMlMjByYWNrfGVufDF8fHx8MTc3MTY2MDk0NHww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "equipment",
      title: "Dumbbells Rack",
    },
    {
      url: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd2VpZ2h0bGlmdGluZyUyMGJhcmJlbGx8ZW58MXx8fHwxNzcxNjgyNTE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "equipment",
      title: "Barbell Training Area",
    },
    {
      url: "https://images.unsplash.com/photo-1770493895453-4f758c40d11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlbmd0aCUyMHRyYWluaW5nJTIwZXF1aXBtZW50fGVufDF8fHx8MTc3MTYzMzA4MXww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "equipment",
      title: "Strength Equipment",
    },
    {
      url: "https://images.unsplash.com/photo-1761971976282-b2bb051a5474?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBjYXJkaW8lMjB0cmVhZG1pbGx8ZW58MXx8fHwxNzcxNjgyNTE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "equipment",
      title: "Cardio Zone",
    },
    {
      url: "https://images.unsplash.com/photo-1758798458123-7b4fbcc92c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMGZpdG5lc3MlMjBjbGFzc3xlbnwxfHx8fDE3NzE2MDAxNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "classes",
      title: "Group Fitness Class",
    },
    {
      url: "https://images.unsplash.com/photo-1570456717698-41ac2f7157bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjB0cmFpbmluZyUyMGd5bXxlbnwxfHx8fDE3NzE2ODI1MTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "classes",
      title: "Boxing Training",
    },
    {
      url: "https://images.unsplash.com/photo-1540205453279-389ebbc43b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBjb2FjaGluZ3xlbnwxfHx8fDE3NzE2MDk2NzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "classes",
      title: "Personal Training Session",
    },
    {
      url: "https://images.unsplash.com/photo-1669504243706-1df1f8d5dacd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhbnNmb3JtYXRpb24lMjBiZWZvcmUlMjBhZnRlcnxlbnwxfHx8fDE3NzE1OTYyMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "transformations",
      title: "Member Transformation",
    },
    {
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZ3ltJTIwdHJhaW5lcnxlbnwxfHx8fDE3NzE2ODI1MTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "transformations",
      title: "Success Story",
    },
    {
      url: "https://images.unsplash.com/photo-1758875568932-0eefd3e60090?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZml0bmVzcyUyMHRyYWluZXIlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcxNjgyNTE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "transformations",
      title: "Body Transformation",
    },
    {
      url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1080&h=720&fit=crop",
      category: "gym",
      title: "Training Area",
    },
    {
      url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1080&h=720&fit=crop",
      category: "equipment",
      title: "Premium Equipment",
    },
    {
      url: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1080&h=720&fit=crop",
      category: "gym",
      title: "Workout Space",
    },
    {
      url: "https://images.unsplash.com/photo-1623874228601-f4193c7b1818?w=1080&h=720&fit=crop",
      category: "classes",
      title: "Yoga Class",
    },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="bg-[#0a0a0a] pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1584863431255-3997371dcc01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBkdW1iYmVsbHMlMjByYWNrfGVufDF8fHx8MTc3MTY2MDk0NHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Gallery"
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
              Gallery
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
            Explore our world-class facilities and inspiring transformations
          </p>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-[#0a0a0a] sticky top-20 z-40 border-b border-[#2a2a2a]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
  setSelectedCategory(category);

  setTimeout(() => {
    if (galleryRef.current) {
      const yOffset = -300; // stronger offset for sticky filter
      const y =
        galleryRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, 100);
}}
                className={`px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-[#86BC25] to-[#FFD700] text-black"
                    : "bg-[#1a1a1a] text-gray-400 hover:text-white border border-[#2a2a2a]"
                }`}
                style={{ fontWeight: 700 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section>
 
        <div className="container mx-auto px-4 lg:px-8">
         <div
  ref={galleryRef}
  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
>
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${selectedCategory}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
               className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-xl" style={{ fontWeight: 700 }}>
                    {image.title}
                  </h3>
                  <p className="text-[#86BC25] text-sm capitalize">
                    {image.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-400 text-xl">
                No images found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
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
              Our{" "}
              <span className="bg-gradient-to-r from-[#86BC25] to-[#FFD700] bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real results from real members who transformed their lives at The
              Real Gym
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "3000+", label: "Members Transformed" },
              { number: "50,000+", label: "Workout Sessions" },
              { number: "500+", label: "Success Stories" },
              { number: "98%", label: "Member Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div
                  className="text-5xl md:text-6xl mb-2 bg-gradient-to-r from-[#86BC25] to-[#FFD700] bg-clip-text text-transparent"
                  style={{ fontWeight: 800 }}
                >
                  {stat.number}
                </div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us CTA */}
      <section className="py-20 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1761971975769-97e598bf526b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBpbnRlcmlvciUyMG1vZGVybnxlbnwxfHx8fDE3NzE2ODI1MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Visit Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 to-[#0a0a0a]/85"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 lg:px-8 relative z-10 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6" style={{ fontWeight: 800 }}>
            Experience It{" "}
            <span className="bg-gradient-to-r from-[#86BC25] to-[#FFD700] bg-clip-text text-transparent">
              Yourself
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Visit our gym for a free tour and see why we're North Malabar's
            premier fitness destination.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/membership"
              className="px-10 py-5 bg-gradient-to-r from-[#86BC25] to-[#FFD700] text-black text-lg rounded-md hover:shadow-2xl hover:shadow-[#86BC25]/50 transition-all duration-300 transform hover:scale-105"
              style={{ fontWeight: 700 }}
            >
              Join Now
            </a>
            <a
              href="/contact"
              className="px-10 py-5 border-2 border-white text-white text-lg rounded-md hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              style={{ fontWeight: 700 }}
            >
              Schedule a Tour
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
