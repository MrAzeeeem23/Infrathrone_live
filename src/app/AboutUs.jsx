"use client";

import React from "react";
import { Ubuntu } from "@/components/Fonts/font";

function AboutUs() {
  return (
    <section
      id="AboutUs"
      className="relative w-full overflow-hidden py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
    >

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-4 ${Ubuntu.className}`}
          >
            About Us
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-500 to-orange-500 mx-auto rounded-full"></div>
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl leading-snug mt-10 max-w-3xl mx-auto font-semibold">
            What is the{" "}
            <span className="text-orange-400 drop-shadow-md">InfraThrone</span>{" "}
            Live Project?
          </h2>
        </div>

        <div className="grid gap-8 max-w-5xl mx-auto text-gray-300 text-lg">
          <div className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-transform">
            <p>
              The{" "}
              <span className="text-white font-semibold">
                InfraThrone Live Project
              </span>{" "}
              is a{" "}
              <span className="text-orange-400 font-semibold">
                hands-on mentorship program
              </span>{" "}
              where learners collaborate in small, focused batches on{" "}
              <span className="text-white font-semibold">
                real-world client projects
              </span>{" "}
              under direct guidance of seasoned industry experts.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-transform">
            <p>
              Unlike traditional tutorials, this immersive program gives you{" "}
              <span className="text-orange-400 font-semibold">
                practical exposure
              </span>{" "}
              by shadowing experts, solving{" "}
              <span className="text-white font-semibold">live challenges</span>,
              and contributing to{" "}
              <span className="text-orange-400 font-semibold">
                impactful solutions
              </span>
              .
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-transform">
            <p>
              By the end, you won’t just learn — you’ll have{" "}
              <span className="text-orange-400 font-semibold">
                battle-tested skills
              </span>{" "}
              and{" "}
              <span className="text-white font-semibold">
                real project experience
              </span>{" "}
              that truly set you apart in the tech industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
