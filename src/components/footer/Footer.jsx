"use client";

import Image from "next/image";
import React from "react";
import logo from "../../assets/logo/infrathrone.webp"

function Footer() {
  return (
    <footer className="w-full bg-black/80 text-gray-300 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-2">
        {/* Main copyright */}
        <p className="text-sm md:text-base">
          © 2025 <span className="font-semibold text-white">InfraThrone Live</span>: The DevOps War Room.  
        </p>

        <div className="flex justify-center items-center my-4">
        <Image src={logo} alt="logo" className="w-44" />

        </div>       
      </div>
    </footer>
  );
}

export default Footer;
