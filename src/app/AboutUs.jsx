"use client";

import React from "react";
import { motion } from "framer-motion";
import { Poppins , Inter } from "next/font/google";

// const Poppins = Poppinsfont({ subsets: ["latin"], weight: ["700"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

function AboutUs() {
  return (
    <section
      id="About"
      className="relative w-full overflow-hidden py-24 sm:py-32 px-6 lg:px-12 bg-[#0C0C0B]"
    >
      {/* Subtle background grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className={` text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#f37113]`}
          >
            Inside InfraThrone
          </h2>

          <div className="h-1 w-24 bg-gradient-to-r from-[#d68418] to-[#7A5C3E] mt-6 rounded" />

          <p
            className={`${inter.className} mt-8 text-lg text-gray-300 leading-relaxed max-w-lg`}
          >
            We believe the best way to master DevOps is not by following
            tutorials, but by{" "}
            <span className="text-white font-semibold">building for real</span>.
          </p>

          <ul
            className={`${inter.className} mt-10 space-y-6 text-gray-400 text-base`}
          >
            {[
              {
                title: "Hands-on Mentorship",
                desc: "Work directly with senior DevOps consultants on live client projects.",
              },
              {
                title: "Practical Exposure",
                desc: "Go beyond theory — solve real-world challenges and build impactful solutions.",
              },
              {
                title: "Battle-Tested Skills",
                desc: "Graduate with industry experience that sets you apart.",
              },
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="flex items-start gap-4"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-[#B08B5B]" />
                <div>
                  <h3 className="text-white font-medium text-lg">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mt-1">{item.desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right Side - Visual Abstract */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative flex justify-center items-center"
        >
          {/* Bronze Glow Circle */}
          <div className="absolute w-72 h-72 bg-gradient-to-tr from-[#B08B5B]/30 to-transparent rounded-full blur-3xl" />

          {/* Floating Abstract Box */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative w-80 h-96 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#111] border border-[#2c2c2c] shadow-2xl flex items-center justify-center"
          >
            <h4
              className={`${inter.className} text-xl font-semibold text-[#B08B5B]`}
            >
              Real Projects.
              <br />
              Real Mentorship.
            </h4>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutUs;
