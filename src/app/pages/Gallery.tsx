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
import g1 from "../../assets/g1.jpeg";
import g2 from "../../assets/g2.jpeg";
import g3 from "../../assets/g3.jpeg";
import g4 from "../../assets/g4.jpeg";
import g5 from "../../assets/g5.jpeg";
import g6 from "../../assets/g6.jpeg";
import g7 from "../../assets/g7.jpeg";
import g8 from "../../assets/g8.jpeg";
import g9 from "../../assets/g9.jpeg";
import g10 from "../../assets/g10.jpeg";
import g11 from "../../assets/g11.jpeg";
import g12 from "../../assets/g12.jpeg";
import member from "../../assets/member.jpeg";



export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
const galleryRef = useRef<HTMLDivElement | null>(null);
  const categories = ["all", "body", "gym",  "transformations"];

  const images = [
    {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/w_auto,q_auto,f_auto/v1772153021/body1_sxwhnq.jpg",
      category: "body",
      title: "body",
    },
      {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/w_auto,q_auto,f_auto/v1772153027/body2_eii2k3.jpg",
      category: "body",
      title: "body",
    },
      
      {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/w_auto,q_auto,f_auto/v1772153033/body3_ygjitu.jpg",
      category: "body",
      title: "body",
    },
      {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/w_auto,q_auto,f_auto/v1772153040/body4_zieiqn.jpg",
      category: "body",
      title: "body",
    },
      {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/w_auto,q_auto,f_auto/v1772153084/body10_ky0c8k.jpg",
      category: "body",
      title: "body",
    },
      {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/w_auto,q_auto,f_auto/v1772153049/body5_qpmsbm.jpg",
      category: "body",
      title: "body",
    },
      {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/w_auto,q_auto,f_auto/v1772153056/body6_yjjxm8.jpg",
      category: "body",
      title: "body",
    },
      {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/w_auto,q_auto,f_auto/v1772153063/body7_hi7ib7.jpg",
      category: "body",
      title: "body",
    },
      {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/w_auto,q_auto,f_auto/v1772153071/body8_qqndgr.jpg",
      category: "body",
      title: "body",
    },
    {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/w_auto,q_auto,f_auto/v1772153077/body9_aklcij.jpg",
      category: "body",
      title: "body",
    },
    {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/w_auto,q_auto,f_auto/v1772153092/body12_pcnvsj.jpg",
      category: "body",
      title: "body",
    },
    {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/w_auto,q_auto,f_auto/v1772153118/body11_jt63yp.jpg",
      category: "body",
      title: "body",
    },
   
    {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/w_auto,q_auto,f_auto/w_auto,q_auto,f_auto/v1772152363/g1_xypkjv.jpg",
      category: "gym",
      title: "gym",
    },
    {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/w_auto,q_auto,f_auto/v1772152433/g2_ixwmyf.jpg",
      category: "gym",
      title: "gym",
    },
    {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/w_auto,q_auto,f_auto/v1772152487/g3_emdnqi.jpg",
      category: "gym",
      title: "gym",
    },
    {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/w_auto,q_auto,f_auto/v1772152558/g4_ecyfvv.jpg",
      category: "gym",
      title: "gym",
    },
    {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/w_auto,q_auto,f_auto/v1772152633/g5_ghb53d.jpg",
      category: "gym",
      title: "gym",
    },
    {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/w_auto,q_auto,f_auto/v1772152667/g6_o75zch.jpg",
      category: "gym",
      title: "gym",
    },
    {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/w_auto,q_auto,f_auto/v1772152693/g7_kczbsd.jpg",
      category: "gym",
      title: "gym",
    },
    {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/w_auto,q_auto,f_auto/v1772152720/g8_gzexq3.jpg",
      category: "gym",
      title: "gym",
    },
    {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/w_auto,q_auto,f_auto/v1772152742/g9_hhtd9q.jpg",
      category: "gym",
      title: "gym",
    },
    {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/w_auto,q_auto,f_auto/v1772152766/g10_g2orqg.jpg",
      category: "gym",
      title: "gym",
    },
    {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/w_auto,q_auto,f_auto/v1772152792/g11_cythwr.jpg",
      category: "gym",
      title: "gym",
    },
    {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/w_auto,q_auto,f_auto/v1772152817/g12_wt0mwk.jpg",
      category: "gym",
      title: "gym",
    },
    {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/w_auto,q_auto,f_auto/v1772152864/Realgym_doxwuj.jpg",
      category: "gym",
      title: "gym",
    },
    {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/w_auto,q_auto,f_auto/v1772174968/member_hgelnm.jpg",
      category: "gym",
      title: "gym",
    },
    {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/v1772153732/t1_nqxn19.jpg",
      category: "transformations",
      title: "body",
    },
     {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/v1772153741/t2_w2c4bv.jpg",
      category: "transformations",
      title: "body",
    },
     {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/v1772153750/t3_sitvya.jpg",
      category: "transformations",
      title: "body",
    },
     {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/v1772153787/t4_gvzadc.jpg",
      category: "transformations",
      title: "body",
    },
     {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/v1772153797/t5_oixfm2.jpg",
      category: "transformations",
      title: "body",
    },
     {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/v1772153806/t6_ikvkc4.jpg",
      category: "transformations",
      title: "body",
    },
     {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/v1772153812/t7_mtjgr6.jpg",
      category: "transformations",
      title: "body",
    },
     {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/v1772153821/t8_jj1t2i.jpg",
      category: "transformations",
      title: "body",
    },
     {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/v1772153827/t9_zjg2fe.jpg",
      category: "transformations",
      title: "body",
    },
     {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/v1772153840/t10_e8ufax.jpg",
      category: "transformations",
      title: "body",
    },
     {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/v1772153850/t11_r4idig.jpg",
      category: "transformations",
      title: "body",
    },
     {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/v1772153858/t12_aaricb.jpg",
      category: "transformations",
      title: "body",
    },
     {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/v1772153867/t14_iuvafa.jpg",
      category: "transformations",
      title: "body",
    },
     {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/v1772153887/t13_wqquna.jpg",
      category: "transformations",
      title: "body",
    },
     {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/v1772153902/t15_moeb7g.jpg",
      category: "transformations",
      title: "body",
    },
     {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/v1772153917/t16_o6fikm.jpg",
      category: "transformations",
      title: "body",
    },
     {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/v1772153961/t17_sidquq.jpg",
      category: "transformations",
      title: "body",
    },

     {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/v1772153969/t18_qpkpoe.jpg",
      category: "transformations",
      title: "body",
    },
     {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/v1772153979/t19_lrc9rc.jpg",
      category: "transformations",
      title: "body",
    },

     {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/v1772153988/t20_auy0y2.jpg",
      category: "transformations",
      title: "body",
    },
     {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/v1772153997/t21_f1fikq.jpg",
      category: "transformations",
      title: "body",
    },

     {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/v1772154004/t22_a3tvfz.jpg",
      category: "transformations",
      title: "body",
    },
     {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/v1772154015/t23_hjtz9t.jpg",
      category: "transformations",
      title: "body",
    },
     {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/v1772154024/t24_gtpeqd.jpg",
      category: "transformations",
      title: "body",
    },
     {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/v1772154036/t25_o5jxa2.jpg",
      category: "transformations",
      title: "body",
    },
      {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/v1772154045/t26_xvtnlp.jpg",
      category: "transformations",
      title: "body",
    },
      {
      url: "https://res.cloudinary.com/di0bcylsr/image/upload/v1772154059/t27_ls2bnb.jpg",
      category: "transformations",
      title: "body",
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
          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6" style={{ fontWeight: 800 }}>
            Our{" "}
            <span className="bg-gradient-to-r from-[#86BC25] to-[#FFD700] bg-clip-text text-transparent">
              Galleryy
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
            Explore our world-class facilities and inspiring transformations
          </p>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-[#0a0a0a] sticky top-20 z-10 border-b border-[#2a2a2a]">
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


    </div>
  );
}
