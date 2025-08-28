"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import InfrathroneLogo from "../assets/logo/infrathrone.webp";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

function HeroSection() {
  return (
    <section
      className={`${inter.className} relative h-screen flex items-center justify-center overflow-hidden bg-black`}
    >
      {/* Base Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-950" />
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px] md:bg-[size:80px_80px] animate-grid-move" />
      </div>
      
      {/* Floating Infrastructure Boxes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-3 h-3 sm:w-4 sm:h-4 bg-orange-500/40 rounded-sm animate-float-1" />
        <div className="absolute top-1/3 right-16 w-2 h-2 sm:w-3 sm:h-3 bg-red-500/40 rounded-sm animate-float-2" />
        <div className="absolute bottom-1/4 left-1/4 w-4 h-4 sm:w-5 sm:h-5 bg-yellow-500/40 rounded-sm animate-float-3" />
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 sm:w-4 sm:h-4 bg-orange-500/30 rounded-sm animate-float-4" />
        <div className="absolute top-1/2 left-16 w-2 h-2 sm:w-3 sm:h-3 bg-red-400/40 rounded-sm animate-float-5" />
      </div>
      
      {/* Animated Connection Beams */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
        <defs>
          <linearGradient id="beam1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgba(251, 146, 60, 0.6)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="beam2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgba(239, 68, 68, 0.4)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        
        {/* Horizontal Beams */}
        <line x1="-100%" y1="20%" x2="200%" y2="20%" stroke="url(#beam1)" strokeWidth="1" className="animate-beam-horizontal-1" />
        <line x1="-100%" y1="80%" x2="200%" y2="80%" stroke="url(#beam2)" strokeWidth="1" className="animate-beam-horizontal-2" />
        
        {/* Vertical Beams */}
        <line x1="15%" y1="-100%" x2="15%" y2="200%" stroke="url(#beam1)" strokeWidth="1" className="animate-beam-vertical-1" />
        <line x1="85%" y1="-100%" x2="85%" y2="200%" stroke="url(#beam2)" strokeWidth="1" className="animate-beam-vertical-2" />
      </svg>
      
      {/* Data Flow Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-1 h-1 bg-orange-400 rounded-full animate-particle-1 opacity-60" />
        <div className="absolute w-1 h-1 bg-red-400 rounded-full animate-particle-2 opacity-60" />
        <div className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-particle-3 opacity-60" />
        <div className="absolute w-0.5 h-0.5 bg-orange-300 rounded-full animate-particle-4 opacity-80" />
      </div>
      
      {/* Infrastructure Network Lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-pulse-line" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse-line-delayed" />
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-orange-500 to-transparent animate-pulse-line-vertical" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-red-500 to-transparent animate-pulse-line-vertical-delayed" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex justify-center mb-8 sm:mb-12"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-xl animate-pulse" />
            <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36">
              <Image
                src={InfrathroneLogo}
                alt="InfraThrone Logo"
                fill
                priority
                className="object-contain drop-shadow-lg"
              />
            </div>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.2] mb-6"
        >
          Build{" "}
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400 animate-text-shine">
              Real-World DevOps
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-yellow-400/10 blur-lg animate-glow-subtle" />
          </span>{" "}
          <br className="hidden sm:block" />
          Skills with InfraThrone Live Projects
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-4 sm:mt-6 text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl lg:max-w-4xl mx-auto leading-relaxed"
        >
          Learn by contributing to production-grade projects under the mentorship
          of experienced DevOps consultants.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4"
        >
          <a
            href="https://topmate.io/saurav_chaudhary_1/1697102"
            target="_blank"
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-md bg-gradient-to-r from-orange-600 to-red-500 text-white font-semibold text-sm sm:text-base shadow-lg hover:scale-105 hover:shadow-orange-500/40 transition-all duration-300"
          >
            🚀 Register Now
          </a>
          <a
            href="#ProgramDetails"
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-md bg-neutral-900/80 backdrop-blur-sm border border-neutral-700/50 text-white font-medium text-sm sm:text-base hover:bg-neutral-800/80 hover:border-orange-500/30 hover:scale-105 transition-all duration-300"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Enhanced Tech-themed Animations */}
      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }
        .animate-grid-move {
          animation: grid-move 20s linear infinite;
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.4; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-30px) rotate(-180deg); opacity: 0.7; }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.4; }
          50% { transform: translateY(-25px) rotate(90deg); opacity: 0.6; }
        }
        @keyframes float-4 {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-15px) rotate(-90deg); opacity: 0.8; }
        }
        @keyframes float-5 {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.5; }
          50% { transform: translateY(-35px) rotate(270deg); opacity: 0.7; }
        }
        
        .animate-float-1 { animation: float-1 8s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 10s ease-in-out infinite 2s; }
        .animate-float-3 { animation: float-3 12s ease-in-out infinite 4s; }
        .animate-float-4 { animation: float-4 9s ease-in-out infinite 1s; }
        .animate-float-5 { animation: float-5 11s ease-in-out infinite 3s; }
        
        @keyframes beam-horizontal-1 {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes beam-horizontal-2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes beam-vertical-1 {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes beam-vertical-2 {
          0% { transform: translateY(100%); }
          100% { transform: translateY(-100%); }
        }
        
        .animate-beam-horizontal-1 { animation: beam-horizontal-1 8s linear infinite; }
        .animate-beam-horizontal-2 { animation: beam-horizontal-2 10s linear infinite 2s; }
        .animate-beam-vertical-1 { animation: beam-vertical-1 12s linear infinite 1s; }
        .animate-beam-vertical-2 { animation: beam-vertical-2 9s linear infinite 3s; }
        
        @keyframes particle-1 {
          0% { top: 100%; left: 10%; }
          100% { top: -5%; left: 90%; }
        }
        @keyframes particle-2 {
          0% { top: -5%; left: 80%; }
          100% { top: 100%; left: 20%; }
        }
        @keyframes particle-3 {
          0% { top: 50%; left: -5%; }
          100% { top: 30%; left: 100%; }
        }
        @keyframes particle-4 {
          0% { top: 20%; left: 100%; }
          100% { top: 80%; left: -5%; }
        }
        
        .animate-particle-1 { animation: particle-1 15s linear infinite; }
        .animate-particle-2 { animation: particle-2 12s linear infinite 3s; }
        .animate-particle-3 { animation: particle-3 18s linear infinite 6s; }
        .animate-particle-4 { animation: particle-4 14s linear infinite 2s; }
        
        @keyframes pulse-line {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        @keyframes pulse-line-delayed {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        @keyframes pulse-line-vertical {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        @keyframes pulse-line-vertical-delayed {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        
        .animate-pulse-line { animation: pulse-line 4s ease-in-out infinite; }
        .animate-pulse-line-delayed { animation: pulse-line-delayed 4s ease-in-out infinite 2s; }
        .animate-pulse-line-vertical { animation: pulse-line-vertical 6s ease-in-out infinite 1s; }
        .animate-pulse-line-vertical-delayed { animation: pulse-line-vertical-delayed 6s ease-in-out infinite 3s; }
        
        @keyframes text-shine {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .animate-text-shine {
          background-size: 200% auto;
          animation: text-shine 4s linear infinite;
        }
        
        @keyframes glow-subtle {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.02); }
        }
        .animate-glow-subtle {
          animation: glow-subtle 3s ease-in-out infinite;
        }
        
        @media (max-width: 640px) {
          .animate-grid-move {
            animation: grid-move 25s linear infinite;
          }
        }
      `}</style>
    </section>
  );
}

export default HeroSection;