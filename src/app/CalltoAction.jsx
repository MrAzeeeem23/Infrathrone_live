"use client";

import React from "react";
import GradientBlinds from "@/components/backgrounds/GradientBlinds";
import ShinyText from "@/components/typepography/ShinyText";
import { Ubuntu } from "@/components/Fonts/font";

function CalltoAction() {
  return (
    <section
      id="CalltoAction"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="py-16 lg:py-24">
        <div className="text-center mb-12 sm:mb-16">
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-4 ${Ubuntu.className}`}
          >
            Register
          </h1>
          <div className="w-28 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full shadow-md"></div>
        </div>

        <div
          className={`${Ubuntu.className} relative w-full min-h-[320px] sm:min-h-[380px] md:min-h-[320px] rounded-2xl overflow-hidden bg-black`}
        >
          <GradientBlinds
            gradientColors={["#823111", "#fa4902"]}
            angle={45}
            noise={0}
            blindCount={14}
            blindMinWidth={50}
            spotlightRadius={0.8}
            spotlightSoftness={1}
            spotlightOpacity={1}
            mouseDampening={0.15}
            distortAmount={3}
            shineDirection="right"
            mixBlendMode="lighten"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 text-center">
            <div className="max-w-3xl">
              <h2 className="text-white text-[clamp(1.8rem,4vw,3rem)] font-bold leading-snug">
                Ready to Level Up Your{" "}
                <span className="text-orange-400">DevOps Career?</span>
              </h2>
              <p className="mt-4 sm:mt-6 text-gray-200 text-base sm:text-lg md:text-xl">
                🚀 Limited Batch Size (<span className="text-orange-400">7 max</span>) — Hurry Up!
              </p>
            </div>

            <div className="mt-6 sm:mt-8">
              <a
                href="https://topmate.io/saurav_chaudhary_1/1697102"
                target="_blank"
                className="relative group inline-flex items-center justify-center rounded-2xl px-8 py-3 text-lg sm:text-xl font-semibold text-white shadow-xl 
                bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-500 hover:to-red-400 
                transition-all duration-300 transform hover:scale-105"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-400 to-red-400 opacity-0 group-hover:opacity-20 transition-opacity rounded-2xl"></span>
                <ShinyText
                  text="Register Now"
                  disabled={false}
                  speed={3}
                  className="custom-class"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CalltoAction;
