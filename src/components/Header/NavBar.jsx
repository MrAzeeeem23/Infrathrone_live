"use client"

import Image from "next/image";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/logo/infrathrone.webp";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 flex justify-center items-center mt-4 z-20 px-4">
      <div className="w-full max-w-6xl rounded-full flex justify-between items-center border border-white/25 backdrop-blur-md px-6 py-3 md:px-12 md:py-4 shadow-lg">
        
        <div>
          <Image
            src={Logo}
            alt="logo"
            className="w-16 md:w-20"
            priority
          />
        </div>

        <div className="hidden md:flex space-x-6 font-medium">
          <a href="#CalltoAction" className="hover:text-orange-500 transition">Register</a>
          <a href="#AboutUs" className="hover:text-orange-500 transition">About</a>
          <a href="#Features" className="hover:text-orange-500 transition">Features</a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/10"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-20 w-11/12 max-w-sm bg-black/80 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 flex flex-col space-y-4 md:hidden">
          <a
            href="#CalltoAction"
            className="hover:text-orange-500 transition"
            onClick={() => setIsOpen(false)}
          >
            Register
          </a>
          <a
            href="#AboutUs"
            className="hover:text-orange-500 transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#Features"
            className="hover:text-orange-500 transition"
            onClick={() => setIsOpen(false)}
          >
            Features
          </a>
        </div>
      )}
    </div>
  );
}

export default NavBar;
