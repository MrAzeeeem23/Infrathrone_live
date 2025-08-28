"use client";

import { motion } from "framer-motion";
import { UserCheck, Users, Code2, CalendarDays, Briefcase } from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const features = [
  {
    title: "Guidance 1:1",
    details: "Personal mentorship from Saurav Chaudhary.",
    icon: UserCheck,
  },
  {
    title: "Small Batch Size (7 max)",
    details: "Focused attention and collaboration.",
    icon: Users,
  },
  {
    title: "4 Live Projects",
    details: "End-to-end real projects, not dummy tasks.",
    icon: Code2,
  },
  {
    title: "Weekly Discussions",
    details: "2 calls per week to review progress & clear doubts.",
    icon: CalendarDays,
  },
  {
    title: "Real Client Work",
    details: "Work alongside an expert in live environments.",
    icon: Briefcase,
  },
];

export default function Features() {
  return (
    <section
      id="Features"
      className="relative w-full max-w-7xl mx-auto px-6 py-20"
    >
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      {/* Background Glow */}
      <div className="absolute -top-20 left-0 w-72 h-72 bg-amber-500/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 blur-3xl rounded-full animate-pulse" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h2
          className={`text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent ${poppins.className}`}
        >
          Why Choose Us?
        </h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          A mentorship experience designed to help you grow with hands-on,
          real-world learning.
        </p>
      </motion.div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="relative group rounded-2xl bg-white/5 backdrop-blur-lg p-8 hover:bg-white/10 transition-all shadow-lg"
          >
            {/* Icon Glow */}
            <div className="relative mb-6">
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl blur-md opacity-30 group-hover:opacity-70 transition-opacity" />
              <div className="relative flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                <feature.icon size={28} />
              </div>
            </div>

            <h3 className="text-xl font-semibold text-white mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-300">{feature.details}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
