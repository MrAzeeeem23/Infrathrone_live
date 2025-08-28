"use client"

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/logo/infrathrone.webp";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="w-full fixed top-0 flex justify-center items-center z-20 px-4 py-2"
    >
      <motion.div
        animate={{
          scale: scrolled ? 0.95 : 1,
          y: scrolled ? 8 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`w-full max-w-6xl mt-4 rounded-full flex justify-between items-center 
        border transition-all duration-500 ease-in-out
        ${scrolled 
          ? 'border-white/20 bg-black/80 backdrop-blur-xl shadow-xl' 
          : 'border-white/10 bg-black/50 backdrop-blur-md'
        }
        px-6 py-3 md:px-12 md:py-4`}
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="relative"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-md"
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <Image
              src={Logo}
              alt="logo"
              className="relative z-10 w-16 md:w-20 transition-transform duration-500"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 font-medium text-sm md:text-base">
          {["Register", "About", "Features"].map((item, i) => (
            <motion.a
              key={i}
              href={`#${item === "Register" ? "CalltoAction" : item}`}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span 
                className="transition-colors duration-300 group-hover:text-orange-500 relative z-10"
                whileHover={{ 
                  textShadow: "0 0 8px rgba(251, 146, 60, 0.5)" 
                }}
              >
                {item}
              </motion.span>
              
              {/* Animated underline */}
              <motion.span
                className="absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-orange-500 to-red-500"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 bg-orange-500/10 rounded-lg blur-md -z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-300 relative"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Button pulse effect */}
          <motion.div
            className="absolute inset-0 bg-orange-500/20 rounded-lg"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.2, 0], 
              opacity: [0, 0.3, 0] 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              repeatDelay: 1 
            }}
          />
        </motion.button>
      </motion.div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ 
              opacity: 0, 
              scale: 0.9, 
              y: -20,
              rotateX: -15 
            }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              rotateX: 0 
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.9, 
              y: -20,
              rotateX: -15 
            }}
            transition={{ 
              duration: 0.4, 
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
            className="absolute top-24 w-11/12 max-w-sm 
            bg-black/90 backdrop-blur-xl border border-white/20 
            rounded-2xl shadow-2xl p-6 flex flex-col space-y-6 md:hidden
            before:absolute before:inset-0 before:bg-gradient-to-b before:from-orange-500/5 before:to-transparent before:rounded-2xl"
          >
            {["Register", "About", "Features"].map((item, i) => (
              <motion.a
                key={i}
                href={`#${item === "Register" ? "CalltoAction" : item}`}
                className="relative group transition-colors duration-300 hover:text-orange-500 py-2"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                whileHover={{ 
                  x: 8, 
                  color: "#f97316",
                  textShadow: "0 0 8px rgba(251, 146, 60, 0.5)" 
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Mobile menu item glow */}
                <motion.div
                  className="absolute -left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"
                  initial={{ scaleY: 0 }}
                  whileHover={{ scaleY: 1 }}
                  transition={{ duration: 0.2 }}
                />
                
                {/* Text with gradient on hover */}
                <motion.span
                  whileHover={{
                    background: "linear-gradient(45deg, #f97316, #ef4444)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {item}
                </motion.span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default NavBar;