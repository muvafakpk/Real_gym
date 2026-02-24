import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import logoImage from "../../assets/TheReal.jpeg";
import { supabase } from "../../supabase";
import { useLocation } from "react-router-dom";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
const location = useLocation();

useEffect(() => {
  if (location.hash === "#contact-form") {
    const element = document.getElementById("contact-form");
    if (element) {
      const yOffset = -120; // adjust for navbar height
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }
}, [location]);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const { error } = await supabase
    .from("contact_messages")
    .insert([
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      },
    ]);

  if (error) {
    alert("Something went wrong!");
    console.log(error);
  } else {
    alert("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  }
};
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Visit Us",
      info: ["Padna orimukk,Kasargod, Kerala,India", "6400+ sq. ft. of Space"],
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      info: ["+91 9567371658", "+91 9447771658", "Mon-Sat: 5 AM - 10 PM"],
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      info: ["info@therealgym.in", "support@therealgym.in", "We reply within 24 hours"],
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Working Hours",
      info: [
        "Mon - Sat: 5:00 AM - 10:00 PM",
        "Public Holidays: Special Hours",
      ],
    },
  ];

  return (
    <div className="bg-[#0a0a0a] pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={logoImage}
            alt="Contact Us"
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
            Get in{" "}
            <span className="bg-gradient-to-r from-[#86BC25] to-[#FFD700] bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </motion.div>
      </section>

     {/* Contact Info Cards */}
<section className="py-20 bg-[#0a0a0a]">
  <div className="container mx-auto px-4 lg:px-8">
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {contactInfo.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
          className="bg-[#1a1a1a] p-6 rounded-lg border border-[#2a2a2a] hover:border-[#86BC25] transition-all duration-300"
        >
          <div className="text-[#86BC25] mb-4">{item.icon}</div>

          <h3 className="text-lg md:text-2xl text-white mb-3 font-bold">
            {item.title}
          </h3>

          <div className="space-y-1">
            {item.info.map((line, idx) => (
              <p key={idx} className="text-gray-400 text-sm md:text-base">
                {line}
              </p>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Contact Form & Map */}
      <section
  id="contact-form"
  className="py-20 lg:py-32 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]"
>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl mb-6" style={{ fontWeight: 800 }}>
                Send Us a{" "}
                <span className="bg-gradient-to-r from-[#86BC25] to-[#FFD700] bg-clip-text text-transparent">
                  Message
                </span>
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Fill out the form below and our team will get back to you within
                24 hours.
              </p>

              <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-[#1a1a1a] p-8 rounded-lg border border-[#2a2a2a]"
              >
                <div>
                  <Label htmlFor="name" className="text-white mb-2 block">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-[#0a0a0a] border-[#2a2a2a] text-white focus:border-[#86BC25]"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-white mb-2 block">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-[#0a0a0a] border-[#2a2a2a] text-white focus:border-[#86BC25]"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-white mb-2 block">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-[#0a0a0a] border-[#2a2a2a] text-white focus:border-[#86BC25]"
                    placeholder=""
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-white mb-2 block">
                    Subject *
                  </Label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-[#0a0a0a] border border-[#2a2a2a] text-white rounded-md px-4 py-3 focus:outline-none focus:border-[#86BC25]"
                  >
                    <option value="">Select a subject</option>
                    <option value="membership">Membership Inquiry</option>
                    <option value="personal-training">Personal Training</option>
                    <option value="group-classes">Group Classes</option>
                    <option value="facilities">Facilities Tour</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-white mb-2 block">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="bg-[#0a0a0a] border-[#2a2a2a] text-white focus:border-[#86BC25] resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#86BC25] to-[#FFD700] text-black hover:shadow-lg hover:shadow-[#86BC25]/50 transition-all duration-300 transform hover:scale-105 py-6 text-lg"
                  style={{ fontWeight: 700 }}
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Google Maps Embed */}
              <div className="rounded-lg overflow-hidden shadow-2xl h-96 lg:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.7283842573465!2d75.1421177!3d12.198875799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba471005b2095d5%3A0xa279a3b43daeb924!2sRealGym.in!5e0!3m2!1sen!2sin!4v1771762321906!5m2!1sen!2sin" 
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Real Gym Location"
                ></iframe>
              </div>

              {/* Quick Info */}
              <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#2a2a2a]">
                <h3 className="text-2xl text-white mb-6" style={{ fontWeight: 700 }}>
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-[#86BC25] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white" style={{ fontWeight: 600 }}>
                        Phone
                      </p>
                      <a
                        href="tel:+919567371658"
                        className="text-gray-400 hover:text-[#FFD700] transition-colors"
                      >
                        +91 9567371658
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-[#86BC25] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white" style={{ fontWeight: 600 }}>
                        Email
                      </p>
                      <a
                        href="mailto:info@therealgym.in"
                        className="text-gray-400 hover:text-[#FFD700] transition-colors"
                      >
                        info@therealgym.in
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-[#86BC25] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white" style={{ fontWeight: 600 }}>
                        Location
                      </p>
                      <p className="text-gray-400">
                        Padna orimukk,Kasargod, Kerala, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-[#86BC25] to-[#FFD700] bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Quick answers to common questions about our gym
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "What are your gym timings?",
                answer:
                  "We're open Monday to Saturday from 5:00 AM to 10:00 PM.",
              },
              {
                question: "Do you offer free trials?",
                answer:
                  "Yes! We offer a complimentary one-day trial session so you can experience our facilities and meet our trainers before joining.",
              },
              {
                question: "What equipment do you have?",
                answer:
                  "We have state-of-the-art equipment including cardio machines, free weights, resistance machines, functional training area, and specialized equipment for CrossFit and powerlifting.",
              },
              {
                question: "Do you provide personal training?",
                answer:
                  "Yes, we have 8+ certified personal trainers who specialize in various areas including weight loss, muscle building, strength training, and more.",
              },
              {
                question: "Is parking available?",
                answer:
                  "Yes, we provide ample free parking space for all our members right next to the gym facility.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-[#1a1a1a] p-8 rounded-lg border border-[#2a2a2a]"
              >
                <h3 className="text-xl text-white mb-3" style={{ fontWeight: 700 }}>
                  {faq.question}
                </h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
