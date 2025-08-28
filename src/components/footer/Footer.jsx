"use client";

import Image from "next/image";
import React from "react";
import logo from "../../assets/logo/infrathrone.webp";

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-zinc-900 via-black to-zinc-900 text-gray-400 py-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center space-y-6">
        
        {/* Logo */}
        <Image 
          src={logo} 
          alt="InfraThrone Logo" 
          className="w-40 opacity-90 hover:opacity-100 transition-opacity duration-300" 
        />

        {/* Links (Optional - can remove if not needed) */}
        <div className="flex space-x-6 text-sm md:text-base">
          <a href="#about" className="hover:text-orange-400 transition-colors">About</a>
          <a href="#program" className="hover:text-orange-400 transition-colors">Program</a>
          <a href="#contact" className="hover:text-orange-400 transition-colors">Contact</a>
        </div>

        {/* Copyright */}
        <p className="text-xs md:text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} <span className="font-medium text-white">InfraThrone Live</span> — The DevOps War Room.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
