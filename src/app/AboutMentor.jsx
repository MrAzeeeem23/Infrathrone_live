"use client";

import React from "react";
import { motion } from "framer-motion";
import { Ubuntu } from "@/components/Fonts/font";
import Image from "next/image";
import MentorImage from "../assets/SauravChaudhary.webp"
// import mentorImg from "@/public/mentor.png"; // replace with actual image

function AboutMentor() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 py-20" id="AboutMentor">
      {/* Background subtle animation */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Mentor Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="relative group w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden p-4">
            {/* Glow Border */}
            <div className="absolute inset-0 rounded-3xl p-4 bg-gradient-to-tr from-orange-500 via-red-500 to-yellow-500 opacity-70 blur-2xl group-hover:opacity-100 transition duration-500"></div>
            {/* Image */}
            <Image
              src={MentorImage}
              alt="Saurav Chaudhary"
              fill
              className="relative z-10 object-cover rounded-3xl group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>

        {/* Mentor Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-center lg:text-left"
        >
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 ${Ubuntu.className}`}
          >
            Meet Your <span className="text-orange-500">Mentor</span>
          </h2>
          <h3 className="text-2xl font-bold text-white">
            Saurav Chaudhary
          </h3>
          <p className="text-lg text-orange-400 font-medium mb-6">
            Senior DevOps Consultant | War Room Expert
          </p>

          <p className="text-gray-300 max-w-xl mx-auto lg:mx-0 mb-6">
            With years of experience solving real-world infrastructure
            challenges, Saurav has led critical DevOps projects in
            high-pressure environments. Through <span className="text-orange-400">InfraThrone Live Project</span>, he brings you the same War Room experience to prepare you for real industry battles.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
            <span className="px-4 py-2 rounded-lg bg-orange-600/20 text-orange-400 font-medium border border-orange-600/40">
              🚀 6+ Years Experience
            </span>
            <span className="px-4 py-2 rounded-lg bg-red-600/20 text-red-400 font-medium border border-red-600/40">
              👥 1000+ Mentees
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutMentor;
