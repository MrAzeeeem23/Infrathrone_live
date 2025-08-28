"use client";

import React from "react";
import { motion } from "framer-motion";
import { Ubuntu } from "@/components/Fonts/font";
import { Rocket, Code, Settings, GitBranch, Server, Cloud, Shield, Zap } from "lucide-react";

function CalltoAction() {
  const devopsIcons = [
    { Icon: Code, delay: 0, position: "top-4 left-8" },
    { Icon: GitBranch, delay: 0.2, position: "top-12 right-12" },
    { Icon: Server, delay: 0.4, position: "bottom-16 left-4" },
    { Icon: Cloud, delay: 0.6, position: "bottom-8 right-8" },
    { Icon: Shield, delay: 0.8, position: "top-20 left-1/2 -translate-x-1/2" },
    { Icon: Settings, delay: 1, position: "bottom-1/2 right-4" },
    { Icon: Zap, delay: 1.2, position: "bottom-1/2 left-8" },
  ];

  return (
    <section className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden " id="CalltoAction">
      {/* Enhanced Background Elements */}

      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-6 py-20">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col justify-center text-center lg:text-left space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-lg border border-orange-500/30 rounded-full text-orange-300 text-sm font-medium w-fit mx-auto lg:mx-0"
          >
            <Rocket className="w-4 h-4" />
            Limited Time Offer
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight ${Ubuntu.className}`}
          >
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Kickstart Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 bg-clip-text text-transparent animate-pulse">
              DevOps Journey
            </span>
            <br />
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              with Confidence
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            A limited-seat, hands-on program designed to help you level up quickly — 
            <span className="text-transparent bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text font-bold"> only 7 seats</span> available!
          </motion.p>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0"
          >
            {[
              "Real Projects",
              "Expert Mentorship", 
              "Small Batches",
              "Industry Ready"
            ].map((feature, index) => (
              <div key={feature} className="flex items-center gap-2 text-gray-300">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: `${index * 0.2}s` }} />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              href="https://topmate.io/saurav_chaudhary_1/1697102"
              target="_blank"
              className="relative group inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white rounded-2xl overflow-hidden bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 hover:from-orange-600 hover:via-red-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/25"
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 -top-40 -bottom-40 opacity-30 bg-gradient-to-r from-transparent via-white to-transparent skew-y-12 group-hover:animate-shimmer pointer-events-none" />
              
              <Rocket className="w-6 h-6 mr-3 animate-bounce" />
              Register Now
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="ml-2"
              >
                →
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Side - Modern DevOps Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex items-center justify-center lg:justify-end"
        >
          <div className="relative w-96 h-96 sm:w-[500px] sm:h-[500px]">
            {/* Central DevOps Circle */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-orange-500/30"
            />
            
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 rounded-full border-2 border-red-500/30"
            />

            {/* Center DevOps Logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative w-32 h-32 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-2xl shadow-orange-500/30"
              >
                <div className="text-white font-bold text-lg">DevOps</div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400/50 to-transparent animate-pulse" />
              </motion.div>
            </div>

            {/* Floating Icons */}
            {devopsIcons.map(({ Icon, delay, position }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay }}
                className={`absolute ${position}`}
              >
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotateY: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 3 + index * 0.5, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg border border-gray-700/50 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300">
                    <Icon className="w-8 h-8 text-orange-400 group-hover:text-orange-300 transition-colors" />
                  </div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-orange-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </motion.div>
            ))}

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f97316" stopOpacity="0.6">
                    <animate attributeName="stop-opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="100%" stopColor="#ef4444" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              
              {/* Animated Connection Lines */}
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                d="M 200 200 Q 250 150 300 200"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
              />
              
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                d="M 200 200 Q 150 150 100 200"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
              />
            </svg>

            {/* Pulse Rings */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: [1, 2, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 1.3,
                  ease: "easeOut"
                }}
                className="absolute inset-0 rounded-full border border-orange-500/30"
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-orange-500/10 to-transparent" />
    </section>
  );
}

export default CalltoAction;