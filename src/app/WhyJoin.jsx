"use client";

import React from "react";
import {Target, FolderOpen, Rocket, BrainCircuit} from "lucide-react"
import {Ubuntu} from "@/components/Fonts/font"

const values = [
  { title: "Gain practical DevOps experience (not just theory).", icon: <Target /> },
  { title: "Build a portfolio of client-level projects.", icon: <FolderOpen /> },
  { title: "Direct mentorship from a seasoned DevOps consultant.", icon: <BrainCircuit />},
  { title: "Career advantage – stand out in interviews with real project exposure.", icon: <Rocket />},
];

function WhyJoin() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="WhyJoin">
      <div className="py-16 lg:py-24">
        
        {/* Heading */}
        <div className="text-center mb-16">
        <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-4 ${Ubuntu.className}`}>
            Why Join This <span className="text-orange-500">Program</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Values Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
          {values.map((item, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 bg-gradient-to-r from-orange-900/70 to-orange-800/70 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform"
            >
              {/* Icon */}
              <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      {item.icon}
                    </div>
                  </div>

              {/* Text */}
              <div className="h-full flex justify-center items-center">

              <p className="text-lg text-white leading-relaxed">
                {item.title}
              </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default WhyJoin;
