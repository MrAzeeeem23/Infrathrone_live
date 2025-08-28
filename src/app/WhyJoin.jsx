"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Activity,
  Users,
  Cpu,
  Server,
  GraduationCap,
  Briefcase,
  Sparkles,
} from "lucide-react";
import { Ubuntu } from "@/components/Fonts/font";

const values = [
  {
    title: "Weekly Chaos Simulations",
    subtitle: "Experience real production outages",
    icon: <Activity size={30} />,
    points: [
      "Real-time incident response",
      "Multi-system failures",
      "Time-pressured decisions",
      "Live monitoring & alerts",
    ],
  },
  {
    title: "Mock Interviews",
    subtitle: "High-pressure interview practice",
    icon: <Cpu size={30} />,
    points: [
      "System design challenges",
      "Incident response scenarios",
      "Leadership assessments",
      "Technical deep dives",
    ],
  },
  {
    title: "Group Discussions",
    subtitle: "Collaborate like in real war rooms",
    icon: <Users size={30} />,
    points: [
      "Cross-functional collaboration",
      "Architecture decisions",
      "Best practice sharing",
      "War room tactics",
    ],
  },
  {
    title: "Real World Project Insights",
    subtitle: "Learn from actual production systems",
    icon: <Server size={30} />,
    points: [
      "Multi-cloud implementations",
      "Scalability challenges",
      "Security considerations",
      "Cost optimization",
    ],
  },
  {
    title: "Direct Mentorship & Shadowing",
    subtitle: "Learn from Saurav Chaudhary",
    icon: <GraduationCap size={30} />,
    points: [
      "1:1 mentorship sessions",
      "Shadow live client projects",
    ],
  },
  {
    title: "Portfolio Building",
    subtitle: "Showcase real DevOps skills",
    icon: <Briefcase size={30} />,
    points: [
      "Client-grade project portfolio",
      "Hands-on case studies",
    ],
  },
  {
    title: "Career Advantage",
    subtitle: "Get interview-ready",
    icon: <Sparkles size={30} />,
    points: [
      "Stand out with war room experience",
      "Real project exposure = recruiter magnet",
    ],
  },
];

function WhyJoin() {
  return (
    <section
      id="WhyJoin"
      className="relative w-full overflow-hidden py-24 sm:py-32 px-6 lg:px-12 "
    >
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Heading */}
      <div className="text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight 
            bg-gradient-to-r from-orange-400 via-amber-300 to-orange-600 
            bg-clip-text text-transparent ${Ubuntu.className}`}
        >
          Why Join This Program
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg"
        >
          This isn't theory. It's chaos, pressure, and real-world DevOps — 
          preparing you to thrive where it matters most.
        </motion.p>
      </div>

      {/* Timeline Journey */}
      <div className="relative flex flex-col space-y-16 sm:space-y-20">
        {/* Enhanced Vertical Beam - Desktop */}
        <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 hidden sm:block">
          {/* Main beam */}
          <div className="relative w-1 h-full bg-gradient-to-b from-orange-500/20 via-amber-400/30 to-orange-500/20">
            {/* Animated pulse */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-orange-500 via-amber-400 to-orange-500"
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scaleY: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-orange-500 via-amber-400 to-orange-500 blur-sm opacity-40" />
            
            {/* Traveling particles */}
            <motion.div
              className="absolute left-1/2 w-2 h-2 bg-orange-400 rounded-full transform -translate-x-1/2"
              animate={{
                y: ["0%", "100%"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute left-1/2 w-1.5 h-1.5 bg-amber-300 rounded-full transform -translate-x-1/2"
              animate={{
                y: ["100%", "0%"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "linear",
                delay: 1.5,
              }}
            />
          </div>
        </div>

        {/* Enhanced Mobile Beam */}
        <div className="absolute left-6 top-0 bottom-0 block sm:hidden">
          <div className="relative w-0.5 h-full bg-gradient-to-b from-orange-500/30 via-amber-400/40 to-orange-500/30">
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-orange-500 via-amber-400 to-orange-500"
              animate={{
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-orange-500 via-amber-400 to-orange-500 blur-sm opacity-50" />
          </div>
        </div>

        {values.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -120 : 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            {/* Timeline Node - Desktop */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15 + 0.3,
                type: "spring",
                stiffness: 200 
              }}
              viewport={{ once: true }}
              className="absolute left-1/2 top-8 transform -translate-x-1/2 -translate-y-1/2 
                w-6 h-6 bg-gradient-to-br from-orange-500 to-amber-600 
                rounded-full shadow-lg shadow-orange-500/50 z-10 hidden sm:block
                before:absolute before:inset-0 before:bg-gradient-to-br before:from-orange-400 before:to-amber-500 
                before:rounded-full before:blur-sm before:-z-10"
            >
              <motion.div
                className="absolute inset-1 bg-white rounded-full"
                animate={{
                  scale: [1, 0.8, 1],
                  opacity: [1, 0.6, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              />
            </motion.div>

            {/* Timeline Node - Mobile */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring" 
              }}
              viewport={{ once: true }}
              className="absolute left-6 top-8 transform -translate-x-1/2 -translate-y-1/2 
                w-4 h-4 bg-gradient-to-br from-orange-500 to-amber-600 
                rounded-full shadow-md shadow-orange-500/40 z-10 block sm:hidden"
            />

            {/* Content Card */}
            <div className={`flex flex-col sm:flex-row items-start gap-6 ${
              index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
            }`}>
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-20 h-20 rounded-2xl 
                  bg-gradient-to-br from-orange-500 to-amber-600 shadow-xl shadow-orange-800/30
                  relative overflow-hidden ml-16 sm:ml-0"
              >
                {/* Icon glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-orange-400/50 to-amber-500/50 rounded-2xl"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />
                <div className="relative z-10 text-white">
                  {item.icon}
                </div>
              </motion.div>

              {/* Text Content */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className={`max-w-lg ${
                  index % 2 === 0 ? "sm:text-left" : "sm:text-right"
                } ml-16 sm:ml-0`}
              >
                <div className={`${
                  index % 2 === 0 ? "" : "sm:flex sm:flex-col sm:items-end"
                }`}>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-orange-300 mb-4 font-medium">{item.subtitle}</p>
                  <ul className={`space-y-2 ${
                    index % 2 === 0 ? "" : "sm:text-right"
                  }`}>
                    {item.points.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: index * 0.15 + i * 0.1 + 0.5 
                        }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 text-gray-300 leading-relaxed"
                      >
                        <div className={`flex-shrink-0 w-2 h-2 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full mt-2 ${
                          index % 2 === 0 ? "" : "sm:order-2"
                        }`} />
                        <span className={index % 2 === 0 ? "" : "sm:order-1"}>
                          {point}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Connection Lines to Timeline */}
            <div className={`absolute top-8 hidden sm:block ${
              index % 2 === 0 
                ? "left-1/2 ml-3 w-16 border-t-2 border-dashed border-orange-500/30" 
                : "right-1/2 mr-3 w-16 border-t-2 border-dashed border-orange-500/30"
            }`} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default WhyJoin;