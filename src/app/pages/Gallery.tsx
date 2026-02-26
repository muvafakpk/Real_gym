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
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/body1-imagetourl.cloud-1772133344060-fp1fps.jpeg",
      category: "body",
      title: "body",
    },
      {
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/body10-imagetourl.cloud-1772133377122-it3tyf.jpeg",
      category: "body",
      title: "body",
    },
      
      {
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/body9-imagetourl.cloud-1772133369836-9v9zcg.jpeg",
      category: "body",
      title: "body",
    },
      {
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/body8-imagetourl.cloud-1772133367342-cdnh03.jpeg",
      category: "body",
      title: "body",
    },
      {
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/body7-imagetourl.cloud-1772133361136-prr0zv.jpeg",
      category: "body",
      title: "body",
    },
      {
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/body6-imagetourl.cloud-1772133358773-xjfmuh.jpeg",
      category: "body",
      title: "body",
    },
      {
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/body5-imagetourl.cloud-1772133356167-0kog92.jpeg",
      category: "body",
      title: "body",
    },
      {
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/body4-imagetourl.cloud-1772133353127-cnq0r8.jpeg",
      category: "body",
      title: "body",
    },
      {
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/body3-imagetourl.cloud-1772133350036-utd0kg.jpeg",
      category: "body",
      title: "body",
    },
      {
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/body2-imagetourl.cloud-1772133346726-9zpmbf.jpeg",
      category: "body",
      title: "body",
    },
    {
      url: "https://user3182.na.imgto.link/public/20260226/g1.avif",
      category: "gym",
      title: "gym",
    },
    {
      url: "https://user3183.na.imgto.link/public/20260226/g2.avif",
      category: "gym",
      title: "gym",
    },
    {
      url: "https://user3183.na.imgto.link/public/20260226/g3.avif",
      category: "gym",
      title: "gym",
    },
    {
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/g4-imagetourl.cloud-1772132254393-zck8jg.jpeg",
      category: "gym",
      title: "gym",
    },
    {
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/g4-imagetourl.cloud-1772132254393-zck8jg.jpeg",
      category: "gym",
      title: "gym",
    },
    {
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/g5-imagetourl.cloud-1772132345815-qyio6s.jpeg",
      category: "gym",
      title: "gym",
    },
    {
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/g6-imagetourl.cloud-1772132349205-2sli5j.jpeg",
      category: "gym",
      title: "gym",
    },
    {
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/g7-imagetourl.cloud-1772132351806-htmt48.jpeg",
      category: "gym",
      title: "gym",
    },
    {
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/g8-imagetourl.cloud-1772132354196-2ep30c.jpeg",
      category: "gym",
      title: "gym",
    },
    {
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/g9-imagetourl.cloud-1772132356537-etpsoi.jpeg",
      category: "gym",
      title: "gym",
    },
    {
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/g10-imagetourl.cloud-1772132358660-153v53.jpeg",
      category: "gym",
      title: "gym",
    },
    {
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/g11-imagetourl.cloud-1772132381855-jae4db.jpeg",
      category: "gym",
      title: "gym",
    },
    {
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/g12-imagetourl.cloud-1772132385238-0zlihl.jpeg",
      category: "gym",
      title: "gym",
    },
    {
      url: member,
      category: "gym",
      title: "gym",
    },
    {
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/t1-imagetourl.cloud-1772132663363-xb8izv.jpeg",
      category: "transformations",
      title: "body",
    },
     {
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/t3-imagetourl.cloud-1772132669703-0vxqz2.jpeg",
      category: "transformations",
      title: "body",
    },
     {
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/t2-imagetourl.cloud-1772132666679-9wsl7w.jpeg",
      category: "transformations",
      title: "body",
    },
     {
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/t4-imagetourl.cloud-1772132672758-nwdeo6.jpeg",
      category: "transformations",
      title: "body",
    },
     {
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/t5-imagetourl.cloud-1772132677751-ajrnya.jpeg",
      category: "transformations",
      title: "body",
    },
     {
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/t6-imagetourl.cloud-1772132680606-62nfwg.jpeg",
      category: "transformations",
      title: "body",
    },
     {
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/t7-imagetourl.cloud-1772132683290-v1fqss.jpeg",
      category: "transformations",
      title: "body",
    },
     {
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/t8-imagetourl.cloud-1772132685912-esk98n.jpeg",
      category: "transformations",
      title: "body",
    },
     {
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/t9-imagetourl.cloud-1772132688675-cpxeno.jpeg",
      category: "transformations",
      title: "body",
    },
     {
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/t10-imagetourl.cloud-1772132691091-q71qy7.jpeg",
      category: "transformations",
      title: "body",
    },
     {
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/t11-imagetourl.cloud-1772132695370-ljrwlr.jpeg",
      category: "transformations",
      title: "body",
    },
     {
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/t12-imagetourl.cloud-1772132699704-kvlw22.jpeg",
      category: "transformations",
      title: "body",
    },
     {
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/t13-imagetourl.cloud-1772132702287-rsyhhb.jpeg",
      category: "transformations",
      title: "body",
    },
     {
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/t14-imagetourl.cloud-1772132704899-qq8tiv.jpeg",
      category: "transformations",
      title: "body",
    },
     {
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/t15-imagetourl.cloud-1772132707452-106qvf.jpeg",
      category: "transformations",
      title: "body",
    },
     {
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/t16-imagetourl.cloud-1772132711053-pk7dw5.jpeg",
      category: "transformations",
      title: "body",
    },
     {
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/t17-imagetourl.cloud-1772132714404-i13zu1.jpeg",
      category: "transformations",
      title: "body",
    },

     {
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/t18-imagetourl.cloud-1772132716635-jvu2wk.jpeg",
      category: "transformations",
      title: "body",
    },
     {
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/t19-imagetourl.cloud-1772132719417-nim1r4.jpeg",
      category: "transformations",
      title: "body",
    },

     {
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/t20-imagetourl.cloud-1772132722171-kgctxx.jpeg",
      category: "transformations",
      title: "body",
    },
     {
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/t21-imagetourl.cloud-1772132724636-0l0hu5.jpeg",
      category: "transformations",
      title: "body",
    },

     {
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/t22-imagetourl.cloud-1772132727052-ivbkay.jpeg",
      category: "transformations",
      title: "body",
    },
     {
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/t23-imagetourl.cloud-1772132730023-7uxrf6.jpeg",
      category: "transformations",
      title: "body",
    },
     {
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/t24-imagetourl.cloud-1772132732593-zafypi.jpeg",
      category: "transformations",
      title: "body",
    },
     {
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/t25-imagetourl.cloud-1772132734977-7wsbeu.jpeg",
      category: "transformations",
      title: "body",
    },
      {
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/t27-imagetourl.cloud-1772132739841-icabwm.jpeg",
      category: "transformations",
      title: "body",
    },
      {
      url: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/t26-imagetourl.cloud-1772132737314-hzkyg5.jpeg",
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
