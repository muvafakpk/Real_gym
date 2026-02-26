import { motion } from "framer-motion";
import { useState } from "react";
import { Check, X, ArrowRight } from "lucide-react";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import member from "../../assets/member.jpeg";

export default function Membership() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "Standard",
    duration: "monthly",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you! We'll contact you soon to complete your membership.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const membershipPlans = [
  {
    name: "Regular Membership",
    monthlyFee: "1000",
    admissionFee: "500 (One-time, first month only)",
    features: [
      "Full access to all gym equipment",
      "Locker facility",
      "Standard gym hours access",
    ],
    optionalAddOns: [
      "Treadmill access – 200/month",
    ],
    popular: true,
  },
  {
    name: "Student Membership",
    monthlyFee: "800",
    admissionFee: "500 (One-time, first month only)",
    features: [
      "Full access to all gym equipment",
      "Locker facility",
      "Standard gym hours access",
      "Special discounted price for students",
    ],
    optionalAddOns: [
      "Treadmill access – 200/month",
    ],
    popular: false,
  },
];

const personalTrainingPlan = {
  name: "Personal Training",
  monthlyFee: "5000",
  admissionFee: null,
  features: [
    "Dedicated personal trainer",
    "Customized workout plan",
    "Fitness progress tracking",
    "Diet guidance support",
  ],
  optionalAddOns: [],
  popular: false,
};

  const [selectedDuration, setSelectedDuration] = useState<"monthly" | "yearly">(
    "monthly"
  );
const plans = [
  membershipPlans[0],          // Regular
  personalTrainingPlan,        // Personal Training
  membershipPlans[1],          // Student
];
const getYearlyPrice = (monthly: number) => {
  const yearly = monthly * 12;
  const discount = yearly * 0.1;
  const final = yearly - discount;

  return final.toLocaleString("en-IN");
};
  return (
    <div className="bg-[#0a0a0a] pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={member}
            alt="Membership"
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
            Membership{" "}
            <span className="bg-gradient-to-r from-[#86BC25] to-[#FFD700] bg-clip-text text-transparent">
              Plans
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
            Choose the perfect plan for your fitness journey
          </p>
        </motion.div>
      </section>

      {/* Pricing Toggle */}
<section className="py-12 bg-[#0a0a0a]">
  <div className="container mx-auto px-4 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex justify-center"
    >
      <div className="bg-[#1a1a1a] p-2 rounded-lg inline-flex">
        <button
          onClick={() => setSelectedDuration("monthly")}
          className={`px-8 py-3 rounded-md transition-all duration-300 ${
            selectedDuration === "monthly"
              ? "bg-gradient-to-r from-[#86BC25] to-[#FFD700] text-black"
              : "text-gray-400 hover:text-white"
          }`}
          style={{ fontWeight: 700 }}
        >
          Monthly
        </button>

        <button
          onClick={() => setSelectedDuration("yearly")}
          className={`px-8 py-3 rounded-md transition-all duration-300 relative ${
            selectedDuration === "yearly"
              ? "bg-gradient-to-r from-[#86BC25] to-[#FFD700] text-black"
              : "text-gray-400 hover:text-white"
          }`}
          style={{ fontWeight: 700 }}
        >
          Yearly
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            Save 10%
          </span>
        </button>
      </div>
    </motion.div>
  </div>
</section>


{/* Pricing Plans */}
<section className="py-20 lg:py-32 bg-[#0a0a0a]">
  <div className="container mx-auto px-4 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto">
      {plans.map((plan, index) => (
        <motion.div
          key={`${selectedDuration}-${index}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
          className={`relative bg-[#1a1a1a] rounded-lg overflow-hidden ${
            plan.popular
              ? "border-2 border-[#86BC25] shadow-2xl shadow-[#86BC25]/20 transform scale-105"
              : "border border-[#2a2a2a]"
          }`}
        >
          {plan.popular && (
            <div className="absolute top-0 right-0 bg-gradient-to-r from-[#86BC25] to-[#FFD700] text-black px-4 py-1 text-sm font-bold">
              MOST POPULAR
            </div>
          )}

         <div className="p-5">
            <h3 className="text-xl md:text-3xl mb-2 text-white font-extrabold">
              {plan.name}
            </h3>

            <div className="mb-6">
             

              <div className="flex items-end">
      {selectedDuration === "monthly" ? (
  <>
  <span className="text-3xl md:text-5xl text-[#86BC25] font-extrabold tabular-nums">
      ₹{plan.monthlyFee}
    </span>
    <span className="text-gray-400 ml-2 mb-2">/month</span>
  </>
) : (
  <>
    <span className="text-3xl md:text-5xl text-[#86BC25] font-extrabold tabular-nums">
  ₹{getYearlyPrice(Number(plan.monthlyFee))}
</span>
    <span className="text-gray-400 ml-2 mb-2">/year</span>
  </>
)}
              </div>
              {selectedDuration === "monthly" && plan.admissionFee && (
  <p className="text-xs text-gray-400 mt-1">
    + ₹500 admission fee (first month only)
  </p>
)}
            </div>

            <div className="space-y-4">
              {plan.features.map((feature, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-[#86BC25] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm md:text-base">{feature}</span>
                </div>
              ))}

              {plan.optionalAddOns.length > 0 && (
  <div className="mt-3 border-t border-[#2a2a2a] pt-3">
    <p className="text-xs text-yellow-400">
      Treadmill access available – ₹200/month
    </p>
  </div>
)}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

     
      {/* Additional Benefits */}
      <section className="py-20 lg:py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontWeight: 800 }}>
              All Plans{" "}
              <span className="bg-gradient-to-r from-[#86BC25] to-[#FFD700] bg-clip-text text-transparent">
                Include
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              "Premium gym equipment",
              "Clean and sanitized facilities",
              "Professional trainer support",
              "Flexible payment options",
              "No hidden fees",
              "Cancel anytime",
              "Member-only events",
              "Progress tracking tools",
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex items-center space-x-3 bg-[#1a1a1a] p-6 rounded-lg border border-[#2a2a2a]"
              >
                <Check className="w-6 h-6 text-[#86BC25] flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
