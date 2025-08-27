"use client";

import GradientBlinds from "@/components/backgrounds/GradientBlinds";
import ShinyText from "@/components/typepography/ShinyText";
import { Ubuntu } from "@/components/Fonts/font";
import React from "react";

function HeroSection() {
  return (
    <div>
      <div
        style={{ width: "100%", position: "relative" }}
        className={`${Ubuntu.className} h-screen z-0`}
      >
        <GradientBlinds
          gradientColors={["#823111", "#fa4902"]}
          angle={45}
          noise={0}
          blindCount={30}
          blindMinWidth={50}
          spotlightRadius={0.8}
          spotlightSoftness={1}
          spotlightOpacity={1}
          mouseDampening={0.15}
          distortAmount={3}
          shineDirection="left"
          mixBlendMode="lighten"
        />

        <div className="absolute inset-0 bg-black/30 z-0"></div>

        <div className="absolute inset-0 mt-10 flex flex-col items-center justify-center px-6 sm:px-8 text-center z-10">
          <div className="max-w-3xl">
            <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold leading-tight drop-shadow-2xl">
              Build Real-World DevOps Skills with{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                InfraThrone
              </span>{" "}
              Live Projects
            </h1>
            <p className="mt-6 text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed">
              Learn by working on real client projects under the mentorship of a
              Senior DevOps Consultant.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a
              href="https://topmate.io/saurav_chaudhary_1/1697102"
              className="relative group inline-flex items-center justify-center overflow-hidden rounded-2xl px-8 py-3 font-semibold text-white shadow-xl bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-500 hover:to-red-400 transition-all duration-300 transform hover:scale-105"
              target="_blank"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-400 to-red-400 opacity-0 group-hover:opacity-20 transition-opacity"></span>
              <ShinyText
                text="🚀 Register Now"
                disabled={false}
                speed={3}
                className="custom-class"
              />
            </a>

            <a
              href="#ProgramDetails"
              className="relative inline-flex items-center justify-center rounded-2xl px-8 py-3 font-semibold text-orange-700 bg-white hover:bg-gray-100 shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <span className="absolute inset-0 w-full h-full bg-orange-100 opacity-0 hover:opacity-30 transition-opacity rounded-2xl"></span>
              📖 Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
